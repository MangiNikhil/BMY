const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  
  export default settings;