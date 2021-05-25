
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);

// swiper partners

const swiper = new Swiper('.mySwiper', {  
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,      
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
        slidesPerView: 1,     
        centeredSlides: true,   
    },
    400: {
      slidesPerView: 2,
      centeredSlides: true,          
    },
    700: {
        slidesPerView: 3,        
    },
    900: {
        slidesPerView: 4,        
    },
    },    
});

// swiper teachers

const swiperTeachers = new Swiper('.teachersSwiper', {  
      
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1,                
    },
    450: {
      slidesPerView: 2,     
      centeredSlides: true,   
    },
    600: {
      slidesPerView: 2,                
    },
    800: {
      slidesPerView: 3,        
    },    
    },    
});