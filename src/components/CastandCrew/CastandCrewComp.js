import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../HeroCorousal/Arrows.component";
import CastImages from "../../config/CastImages.js";
const CastandCrewCard = (props) => {
  return (
    <div className="md:h-36 md:w-36 sm:h-12   sm:w-16 ">
      <div className="  h-full w-full">
        <img className=" rounded-full md:h-4/5 md:w-4/5" src={props.img.src} alt={props.img.alt} />
        <h1 className="pl-4 text-xl">{props.img.title}</h1>
      </div>
    </div>
  );
};
const CastandCrewComp = () => {

  const settingsLg = {
    arrows: true,
    // dots: true,
   // Infinity: true,
    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  var settingsmd = {
    // arrows: true,
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  var settingssm = {
    // arrows: true,
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <div className="md:hidden  px-0 py-4  ">
        <div >
          <Slider {...settingssm}>
            {CastImages.map((image) => (
              <CastandCrewCard img={image} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="hidden px-0 py-4   lg:hidden  md:block  ">
        <div >
          <Slider {...settingsmd}>
            {CastImages.map((image) => (
              <CastandCrewCard img={image} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="hidden  py-4   lg:block">
        <div>
          <Slider {...settingsLg}>
            {CastImages.map((image) => (
              <CastandCrewCard img={image} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default CastandCrewComp;



