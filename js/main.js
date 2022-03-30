// * Nabvar
const nav = document.querySelector(".navbar__main");
const navOpenBtn = document.querySelector(".navbar--open--icon");
const navCloseBtn = document.querySelector(".navbar--close--icon");
const navLinks = document.querySelectorAll(".nav__link")

navOpenBtn.addEventListener('click', () => {
    nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open");
});
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("open");
    });
})
