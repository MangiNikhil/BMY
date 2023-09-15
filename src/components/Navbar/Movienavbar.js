import React from "react";
// import pic from "./bmslogo.png";
import {
 BiChevronDown,
  //BiChevronRight,
  BiMenu,
  BiSearch,
  //BiChevronLeft,
  BiShareAlt,
} from "react-icons/bi";
const NavSm = () => {
  return (
    <div className="items-center ">
      <div className="text-white flex items-center justify-between">
      <div>
      <h3 className="text-xl  ">It All Starts Here!</h3>
    </div>
        <div className="py-1">
          <div className="w-8  h-8 ">
            <BiShareAlt className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
const ExtraNav = () => {
  return (
    <div className="bg-navcol-650 px-36 py-2  text-sm text-navcol-1000 hidden  md:block lg:block">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Movies
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Stream
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Events
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Plays
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Sports
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Activities
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Buzz
          </a>
        </div>
        <div className="md:hidden lg:block  text-navcol-1100">
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            ListYourShow
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Corporates
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Offers
          </a>
          <a className="hover:text-navcol-1100 pr-2 " href="www.google.com">
            {" "}
            Gift Cards
          </a>
        </div>
      </div>
    </div>
  );
};
const NavLg = () => {
  return (
  <div>
  <div className="container w-full mx-auto px-28 flex items-center justify-between">
     <div className="flex items-center w-1/2">
        <div className="w-18 h-12">
           <img
           src="https://in.bmscdn.com/webin/common/icons/logo.svg"
           alt="logo"
              className="w-full px-2 h-full" />
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
           <BiSearch />
           <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
        </div>
     </div>
     <div className="flex items-center gap-3">
     <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer	">
        Hyderabad
        <BiChevronDown />
     </span>
     <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
     Sign in
     </button>
     <div className="w-8 h-8 text-white">
     <BiMenu className="w-full h-full" />
     </div>
     </div>
  </div>
  </div>
  );
  }  
const MovieNavbar = () => {
  return (
    <div>
      <nav className="  ">
        <div className="lg:hidden px-3 py-2 absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-sm  bg-navcol-700">
          <NavSm />
        </div>
        <div className="hidden  lg:block  ">
         <div className=" px-3 py-2 l bg-navcol-600 "> <NavLg /></div>
          <ExtraNav />
        </div>
      </nav>
    </div>
  );
};

export default MovieNavbar;