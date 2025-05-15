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