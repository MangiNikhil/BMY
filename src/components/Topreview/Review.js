import React from "react";
import { PrevArrow, NextArrow } from "../HeroCorousal/Arrows.component";
import { BiChevronRight, BiDislike, BiLike, BiShareAlt, BiStar } from "react-icons/bi";
import Slider from "react-slick";
const Reviewblock = () => {
  return (
    <div>
      <div className="flex  gap-5  justify-between">
        <div className="border-2 rounded-xl px-4 border-navcol-50 ">
          #SuperHit
        </div>
      </div>
    </div>
  );
};
const HeroReview = () => {
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
          <div className="text-2xl px-8 sm:text-xl "> User</div>
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
      <div className=" px-6 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
        <BiLike /> <span>10.1k</span> <BiDislike />
        </div>
        <div className="flex gap-2 items-center">
          <span>20 Days ago </span>
          <BiShareAlt />
        </div>
      </div>
    </div>
  );
};

const Review = () => {
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
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
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
  
  return (
    <div className="py-8  border-b-2 ">
      <div className="flex justify-between ">
        <h1 className="font-bold text-3xl">Top reviews</h1>
        <div className="items-center flex ">
          <h3 className="px-2 text-lg text-navcol-50 text">195.5k reviews</h3>
          <BiChevronRight className="w-6 h-8" />
        </div>
      </div>
      <div className="py-4 text-gray-400 text-xl">Summary of all reviews.</div>
      <Slider {...settings}>
        <Reviewblock />
        <Reviewblock />
        <Reviewblock />
        <Reviewblock />
        <Reviewblock />
        <Reviewblock />
        <Reviewblock />
      </Slider>
      <div className="py-8 " >
        <Slider {...settingsLg}>
         <div className="w-4/5"> <HeroReview /></div>
         <div className="w-4/5"> <HeroReview /></div>
         <div className="w-4/5"> <HeroReview /></div>
        </Slider>
      </div>
    </div>
  );
};
export default Review;
