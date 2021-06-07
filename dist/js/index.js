let menuButton = document.querySelector('.navbar__mobile__menu');
let navItems = document.querySelector('.navbar__nav');
let navBar = document.querySelector('.navbar');
let barHide = document.querySelector('.navbar__mobile__menu__bar:nth-child(1)');
let barLeft = document.querySelector('.navbar__mobile__menu__bar:nth-child(2)');
let barRight = document.querySelector(
  '.navbar__mobile__menu__bar:nth-child(3)'
);
let navBrand = document.getElementById('nav-brand');

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle('navbar__nav__toggle');
  barHide.classList.toggle('navbar__mobile__menu__bar__hide');
  barLeft.classList.toggle('navbar__mobile__menu__bar__cross');
  barRight.classList.toggle('navbar__mobile__menu__bar__across');

  let nav = document.querySelector('.navbar__nav__toggle');

  if (nav) {
    navBar.style.height = '100vh';
    navBar.style.overflow = 'hidden';
    navBar.style.backgroundColor = '#101d40';
  } else {
    navBar.style.height = 'auto';
    navBar.style.backgroundColor = 'transparent';
  }
}

AOS.init({
  delay: 50,
  duration: 1000,
  easing: 'ease',
});

$('.trusted__carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});
