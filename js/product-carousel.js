
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 60,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination-featured",
    },
  });