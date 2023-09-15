import React ,{useState,useEffect }from "react";
import Slider from "react-slick";
import axios from "axios";

import { PrevArrow,NextArrow } from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]="01bc365b72ee8a4d0097eb5dcea7d16e";
const HeroCarousel =()=>{
    const settingsLg={
        arrows:true,
        centerMode:true,
        autoPlay:true,
        dots: true,
        centerPadding:'300px',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>
    }
    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>
      };
      const [images,setImages]=useState([]);
      /*useEffect(()=>{
         const getTrendingmovies=async ()=>{
            const tmovies=axios.get('/trending/movie/day');
            console.log(tmovies);
         }
           getTrendingmovies();
      },[])
*/
      useEffect(() => {
         const requestNowPlayingMovies = async() => {
           const getImages = await axios.get("/trending/all/day");
           setImages(getImages.data.results);
           console.log(getImages);
         };
         requestNowPlayingMovies();
       }, []);

return(
<div>
<div className="lg:hidden">
<Slider {...settings} >
{

   images.map((image)=> (
    <div className="w-full  h-64 md:h-80 px-2 py-3">
       <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="car test"  className="w-full h-full"/>
    </div>
   )
   )
}
  </Slider>
</div>

<div className="hidden lg:block">
<Slider {...settingsLg} >
{

   images.map((image)=> (
    <div className="w-full  h-96 py-2 px-2">
       <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="car test"  className="w-full h-full"/>
    </div>
   )
   )
}
  </Slider>
</div>
</div>
);

}


export default HeroCarousel;