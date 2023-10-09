export const carouselSettings = {
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
