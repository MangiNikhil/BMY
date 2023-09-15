import React from "react";
import { PrevArrow, NextArrow } from "../HeroCorousal/Arrows.component";
import { BiChevronRight,BiStar } from "react-icons/bi";
import Slider from "react-slick";
// BiDislike, BiLike, BiShareAlt, 

const HeroCritic = () => {
  return (
    <div className=" w-full rounded-lg  px-6  py-8 border-2">
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center">
          <div className="lg:w-24  md:w-16  w-12 h-12   md:px-2  lg:px-2  lg:h-20">
            <img
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajinikanth-1795-29-12-2016-01-58-24.jpg"
              alt="logoofreview"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="text-2xl px-8 sm:text-xl ">User</div>
        </div>
        <div className="flex text-2xl px-12 items-center">
          <BiStar />
          10/10
        </div>
      </div>
      <div className="px-8 py-6">
        <h1 className="text-2xl py-2 font-bold">#Blockbuster #WowMusic</h1>
        <p>
          First half of the movie was quite good and it pulled us into the
          muthuvel pandian circle it's a treat and the climax was the one to look out
        </p>
      </div>
      
    </div>
  );
};

const Critic = () => {
  const settingsLg = {
    arrows:true,
    centerMode:true,
    dots: true,
   centerPadding:'100px',
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [
        {
          breakpoint: 1064,
          settings: {
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 790,
          settings: {
            centerPadding:'100px',
          }
        },
        {
          breakpoint: 520,
          settings: {
            centerPadding:'0px',
          }
        },
      ]
  };

  return (
    <div className="py-8 border-b-2 ">
      <div className="flex justify-between ">
        <h1 className="font-bold text-3xl">Critics</h1>
        <div className="items-center flex ">
          <h3 className="px-2 text-lg text-navcol-50 text">See all..</h3>
          <BiChevronRight className="w-6 h-8" />
        </div>
      </div>
      <div className="py-8 " >
        <Slider {...settingsLg}>
         <div className="w-4/5"> <HeroCritic/></div>
         <div className="w-4/5"> <HeroCritic/></div>
         <div className="w-4/5"> <HeroCritic/></div>
        </Slider>
        
      </div>
    </div>
  );
};
export default Critic;
