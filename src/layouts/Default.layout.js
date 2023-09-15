import React from "react";
//compnnent
import Navbar from "../components/Navbar/navbar.compo";
import HeroCorousal from "../components/HeroCorousal/HeroCorousal.component";

const DefaultLayout= (props)=>{
    return(
        <div>
            <Navbar  />
            < HeroCorousal />
            {props.children}
        </div>
        
    );
};
 
export default DefaultLayout;