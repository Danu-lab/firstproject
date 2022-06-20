new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 50,
            centeredSlides: true
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        992: { },
        1200: {
            slidesPerView: 3,
            
        }
    }
});