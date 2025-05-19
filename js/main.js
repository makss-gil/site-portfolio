// =============== HEADER effect scroll ===============
const header = document.querySelector(".header")
window.addEventListener("scroll", function(){
    this.window.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky")
}) 

            //addEventListener -  Додає обробник події до об'єкта.
            // querySelector - для пошуку першої кнопки на веб-сторінці.



// =============== NAV-ITEM effect color ===============
window.addEventListener("scroll", function(){
    const section = this.document.querySelectorAll("section")
    const scrollY = window.scrollY;

    section.forEach(function(current){
        let sectionHight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        let sectionId = current.getAttribute("id")
        let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`)

        if(navItem){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
            navItem.classList.add("active")
            } else{
            navItem.classList.remove("active")
            }  
        }
    })
})

// =============== SCROLL TO TOP BUTTON ===============
const scrollToTop = document.querySelector(".scrollToTop")
window.addEventListener("scroll", function(){
    scrollToTop.classList.toggle("active", this.window.scrollY > 500)
})

scrollToTop.addEventListener("click", function(){
    document.body.scrollToTop = 0
    document.documentElement.scrollTop = 0
})

// =============== THEM LIGHT / DARK ===============
const themeBtn = document.querySelector(".them-btn")

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"

const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    themeBtn.classList.toggle("sun")

    localStorage.setItem("saved-theme", getCurrentTheme())
    localStorage.setItem("saved-icon", getCurrentIcon())
})

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

// Применяем сохраненную тему и значок

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme")
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

// =============== MEDIA NAV-MENU TOGGLE ===============
const navBtn = document.querySelector(".nav-menu-btn")
const navBar = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("close")
    navBar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        navBtn.classList.remove("close")
        navBar.classList.remove("active")
        navMenu.classList.remove("active")
    })
})



// =============== SETVICES section modal ===============
const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function(modalClick){
    serviceModal[modalClick].classList.add("active")
}

learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", function(){
        modal(i)
    })
})

modalCloseBtn.forEach(button => {
    button.addEventListener("click", () =>{
        serviceModal.forEach(modal => {
            modal.classList.remove("active")
        })
    })
})



// =============== PORTFOLIO section modal ===============
const portfolioModals = document.querySelectorAll(".portfolio-modal")
const imgCard = document.querySelectorAll(".img-card")
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn")

const portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active")
}

imgCard.forEach((button, i) => {
    button.addEventListener("click", () => {
        portfolioModal(i)
    })
})

portfolioCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        portfolioModals.forEach(modelView => {
          modelView.classList.remove("active")  
        })
    })
})

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1, // кількість слайдів яку хочемо показувати
    spaceBetween: 30, // відстань між слайдами
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100
})

ScrollReveal().reveal('.home-info h1', {delay: 400, origin: "left"});
ScrollReveal().reveal('.home-img', {delay: 500, origin: "right"});
ScrollReveal().reveal('.media-icons a', {delay: 300, origin: "left", interval: 90});
ScrollReveal().reveal('.home-info h3, .home-info p, .home-info-link', {delay: 700, origin: "left"});
