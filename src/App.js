import React from "react";
//hoc
//import axios from "axios";
import DefaultHoc from "./HOC/default.hoc";
import MovieHoc from "./HOC/MovieHoc";
import { PlaysHoc } from "./HOC/PlaysHoc";
//homepage
import HomePage from "./pages/Home.page";
import Movie  from "./pages/Moviepage";
import { Plays } from "./pages/Playspage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//process.env.REACT_APP_API_KEY;
function App(){
return(
       <div>      
       <DefaultHoc  path="/" exact Component={HomePage} />    
       <MovieHoc  path="/movie/:id" exact Component={Movie} />    
       <PlaysHoc path="/plays" exact Component={Plays} />
       </div>
  );
};

export default App;