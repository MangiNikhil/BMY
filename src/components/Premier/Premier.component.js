import React from "react";
import { PrevArrow, NextArrow } from "../HeroCorousal/Arrows.component";
import Slider from "react-slick";
import Poster from "../Poster/Poster.comoponent";
import PremierImages from "../../config/TempPosters.config";
export const Premier = (props) => {
  const settingsLg = {
    arrows: true,
    centermode: true,
  //  dots: true,
    //Infinity: true,
    //autoplay: true,
    slidesToShow: 4,
    //speed: 500,
    slidesToScroll: 2,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  var settingsmd = {
    arrows: true,
   // dots: true,
    centermode: true,
    //infinite: true,
   // autoplay: true,
    //speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  var settingssm = {
    arrows: true,
   // dots: true,
    //infinite: true,
   // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex flex-col items-start">
        
          <h3 className={`py-8 text-xl font-bold ${ props.isDark ? "text-white" : "text-gray-800"}` }>You might also like</h3>
         
        </div>
        <Slider {...settingsLg}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </div>



      <div className="hidden lg:hidden  md:block ">
        <div className="flex flex-col items-start">
        <h3 className={`py-8 text-xl font-bold ${ props.isDark ? "text-white" : "text-gray-800"}` }>You might also like</h3>
        
        </div>
        <Slider {...settingsmd}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </div>




      <div className="md:hidden">
        <div className="flex flex-col items-start">
        <h3 className={`py-8 text-xl font-bold ${ props.isDark ? "text-white" : "text-gray-800"}` }>You might also like</h3>
        
        </div>
        <Slider {...settingssm}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </div>



    </div>
  );
};

export default Premier;
