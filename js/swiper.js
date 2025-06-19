
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.5,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        769: {
            slidesPerView: 8.5,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 5.5,
        },
        0: {
            slidesPerView: 3.5,
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// First slider: 3 visible
var swiper1 = new Swiper(".slider-1", {
    slidesPerView: 8.5,
    spaceBetween: 20,
    breakpoints: {
        769: {
            slidesPerView: 8.5,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 5.5,
        },
        0: {
            slidesPerView: 3.5,
        },
    },
    navigation: {
        nextEl: ".slider-1 .swiper-button-next",
        prevEl: ".slider-1 .swiper-button-prev",
    },
});

// Second slider: 5 visible
var swiper2 = new Swiper(".slider-2", {
    slidesPerView: 5.5,
    spaceBetween: 20,
    breakpoints: {
        769: {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2.0,
        },
    },
    navigation: {
        nextEl: ".slider-2 .swiper-button-next",
        prevEl: ".slider-2 .swiper-button-prev",
    },
});

// Third slider: 8 visible
var swiper3 = new Swiper(".slider-3", {
    slidesPerView: 8.5,
    spaceBetween: 20,
    breakpoints: {
        769: {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2.0,
        },
    },
    navigation: {
        nextEl: ".slider-3 .swiper-button-next",
        prevEl: ".slider-3 .swiper-button-prev",
    },
});

// Third slider: 8 visible
var swiper5 = new Swiper(".slider-5", {
    slidesPerView: 4.5,
    spaceBetween: 20,
    breakpoints: {
        769: {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2.5,
        },
        0: {
            slidesPerView: 2.0,
        },
    },
    navigation: {
        nextEl: ".slider-3 .swiper-button-next",
        prevEl: ".slider-3 .swiper-button-prev",
    },
});
