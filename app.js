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
