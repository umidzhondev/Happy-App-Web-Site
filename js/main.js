// * Nabvar
const nav = document.querySelector(".navbar__main");
const navOpenBtn = document.querySelector(".navbar--open--icon");
const navCloseBtn = document.querySelector(".navbar--close--icon");

navOpenBtn.addEventListener('click', () => {
    nav.classList.add("open");
});

navCloseBtn.addEventListener('click', () => {
    nav.classList.remove("open");
});
