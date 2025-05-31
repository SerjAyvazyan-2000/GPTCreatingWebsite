


const swiper = new Swiper('.reviews-swiper', {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,

    pagination: {
        el: '.reviews-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.reviews-arrow-next',
        prevEl: '.reviews-arrow-prev',
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        490: { slidesPerView: 1 },
        620: { slidesPerView: 1 },
        810: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        1096: { slidesPerView: 1.5 },
        1232: { slidesPerView: 1.5 },
    },


});