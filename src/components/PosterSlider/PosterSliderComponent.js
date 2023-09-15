import React from "react";
import Poster from "../Poster/Poster.comoponent";
import settings from "../../config/PosterConfig";
import Slider from "react-slick";

const PosterSlider = (props) => {
  return (
    <div>
    <div className="flex flex-col items-start lg:py-2 md:py-2">
    <h3 className={`text-2xl font-bold ${ props.isDark ? "text-white" : "text-gray-800"}` }>{props.title}</h3>
    <p className={`text-sm ${ props.isDark ? "text-white" : "text-gray-800"}` }>{props.subtitle}</p>
    </div>
    <Slider {...settings}>
    {
      props.Images.map( (img)=> (
      <Poster {...img} isDark={props.isDark} />
    ))
  }
    </Slider>
    </div>
  )

}

export default PosterSlider;