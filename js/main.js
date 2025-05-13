// SETVICES section modal

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

// PORTFOLIO section modal

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