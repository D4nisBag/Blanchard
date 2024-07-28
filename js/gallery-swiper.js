const swiper = new Swiper('.gallery__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: "row"
    },
    // Responsive breakpoints
    breakpoints: {
      340: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },
      // when window width is >= 320px
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    },
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
  })
  const swiperTwo = new Swiper('.events__swiper', {
    // Default parameters
    spaceBetween: 10,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      470: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    },
    navigation: {
        nextEl: '.events-next',
        prevEl: '.events-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  })

  const swiperThree = new Swiper('.projects__swiper', {
    // Default parameters
    spaceBetween: 10,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      340: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33.9
      },
      800: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },
      // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    },
    navigation: {
        nextEl: '.projects__next',
        prevEl: '.projects__prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  })
  const swiperFour = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
