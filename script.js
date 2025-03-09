let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar'); // Move this line up

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active'); // Now navbar is defined before use
}

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

let helpButton = document.querySelector('#help-btn');
let helpContent = document.querySelector('.help-content');

helpButton.onclick = () => {
    helpContent.classList.toggle('active');
}

window.onscroll = () => {
    helpContent.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Swiper for desktop view
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Media query for screens with a max width of 768px
if (window.matchMedia("(max-width: 768px)").matches) {
    var swiperMobile = new Swiper(".mySwiper", {
        slidesPerView: 1, // Adjusted for mobile
        spaceBetween: 20, // Adjusted for mobile
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
