const headerBurger = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const headerLink = document.querySelectorAll('.header-menu__link');
const formLink = document.querySelector('.header_form-link');
const body = document.querySelector('body');

headerBurger.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');
});

formLink.addEventListener('click', () => {
    headerBurger.classList.remove('active');
    headerNav.classList.remove('active');
    body.classList.remove('active');
});

headerLink.forEach(link => {
    link.addEventListener('click', (e) => {
        headerBurger.classList.remove('active');
        headerNav.classList.remove('active');
        body.classList.remove('active');
    });
});