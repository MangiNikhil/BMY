import React from "react";
//compnnent
import MovieNavbar from "../components/Navbar/Movienavbar";
const MovieLayout= (props)=>{
    return(
        <div>
            <MovieNavbar  />
            {props.children}
        </div>
        
    );
};
 
export default MovieLayout;