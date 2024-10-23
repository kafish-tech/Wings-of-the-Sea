
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  speed: 400,
  spaceBetween: 16,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 0,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: ".swiper-pagination-featured",
    },
    breakpoints: {
      767: {
        spaceBetween: 80,
        centeredSlides: true,
        coverflowEffect : {
          rotate: 0,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }
      }
    }
  });