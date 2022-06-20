new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50,
    breakpoints: {
        1: {
            slidesPerView: 1,
        },
        460: {
            slidesPerView: 1.25,
            centeredSlides: true,
        },
        530: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        },
        992: { },
        1200: {
            slidesPerView: 3,
            
        }
    }
});