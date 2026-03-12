// =============== NAV MENU TOGGLE (MOBILE) ===============
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');
  });
}

// Close menu when a nav link is clicked (mobile UX improvement)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
  });
});

// =============== ACTIVE LINK BY PAGE ===============
// Highlights current page in navbar based on URL
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach((link) => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath) {
    link.classList.add('active-link');
  }
});

// =============== THEME TOGGLE (LIGHT / DARK) ===============
const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const lightThemeClass = 'light-theme';
const iconMoon = 'ri-moon-line';
const iconSun = 'ri-sun-line';

// Load previously selected theme from localStorage
const selectedTheme = localStorage.getItem('selected-theme');

if (selectedTheme === 'light') {
  document.body.classList.add(lightThemeClass);
  themeIcon.classList.remove(iconMoon);
  themeIcon.classList.add(iconSun);
}

function getCurrentTheme() {
  return document.body.classList.contains(lightThemeClass) ? 'light' : 'dark';
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightThemeClass);
    const isLight = document.body.classList.contains(lightThemeClass);

    // Swap icon
    if (isLight) {
      themeIcon.classList.remove(iconMoon);
      themeIcon.classList.add(iconSun);
    } else {
      themeIcon.classList.remove(iconSun);
      themeIcon.classList.add(iconMoon);
    }

    // Persist preference
    localStorage.setItem('selected-theme', getCurrentTheme());
  });
}

// =============== SWIPER: PROJECTS SLIDER ===============
// Initializes Swiper for the projects section
/* global Swiper */
const projectsSlider = document.querySelector('.projects__slider');

if (projectsSlider && typeof Swiper !== 'undefined') {
  // eslint-disable-next-line no-unused-vars
  const swiperProjects = new Swiper('.projects__slider', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1120: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

// =============== SCROLLREVEAL ANIMATIONS ===============
// Fade / slide in sections as the user scrolls
/* global ScrollReveal */
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '40px',
    duration: 900,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 80,
    reset: false
  });

  // Hero
  sr.reveal('.hero__content', { origin: 'left' });
  sr.reveal('.hero__card', { origin: 'right', delay: 150 });

  // Sections
  sr.reveal('#about .section__header', {});
  sr.reveal('#about .about__summary', { delay: 120 });
  sr.reveal('#about .note', { interval: 70, delay: 160 });

  sr.reveal('#skills .section__header', {});
  sr.reveal('#skills .skills__category', { interval: 80, delay: 120 });

  sr.reveal('#projects .section__header', {});
  sr.reveal('#projects .project-card', { interval: 80, delay: 140 });

  sr.reveal('#resume .resume__content', { origin: 'bottom' });

  sr.reveal('#contact .section__header', {});
  sr.reveal('#contact .contact__card', { interval: 90, delay: 130 });
}

// =============== FOOTER YEAR ===============
// Automatically updates the footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

