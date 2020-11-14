mobileMenuBtn = document.querySelector(".nav-mobile-menu")
navigation = document.querySelector(".navigation")

mobileMenuBtn.addEventListener("click", function () {

    mobileMenuBtn.classList.toggle("active-menu")
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        navigation.classList.remove("active-menu")
    }
    if (mobileMenuBtn.classList.toggle("active-menu")) {
        navigation.classList.add("active-menu")
    }
})