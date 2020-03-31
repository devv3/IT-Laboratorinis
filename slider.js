var swiper = new Swiper('.swiper-container', {
    slidesPerView: 8,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });
