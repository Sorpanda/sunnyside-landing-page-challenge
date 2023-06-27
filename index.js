
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.mobile-nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav--visible');
})