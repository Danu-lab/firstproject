new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    breakpoints: {
        // 1: {
        //     slidesPerView: 1,
        // },
        320: {
            slidesPerView: 1,
            centeredSlides: true,

        },
        380: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 10,
        },
        450: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 0
        },
        530: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    }
});