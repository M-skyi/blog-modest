let mobileMenuBtn = document.querySelector(".nav-mobile-menu")
let navigationMobile = document.querySelector(".navigation")

mobileMenuBtn.addEventListener("click", function () {

    mobileMenuBtn.classList.toggle("active-menu")
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        navigationMobile.classList.remove("active-menu")
    }
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        navigationMobile.classList.add("active-menu")
    }
})
let modalBtnClose = document.querySelector(".modal-Btn-close")
let modalWindow = document.querySelector(".modal")
let pageScroll = document.querySelector("body").scrollHeight;
let middlePage = pageScroll / 2;

window.addEventListener("scroll", scrollPage);

function scrollPage() {
    if (window.pageYOffset >= middlePage) {
        modalWindow.classList.add("show-modal");
    }
}
modalBtnClose.addEventListener("click", function () {
    modalWindow.classList.remove("show-modal")
    window.removeEventListener("scroll", scrollPage)
})