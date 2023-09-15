import React  from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarouselComponent.js";
import Navbar from "../components/navbar/navbar.component.js"
const DefaultLayout = (props) =>{
return(
<div>
<Navbar />
<HeroCarousel />
{props.children}
</div>
);
};
export default DefaultLayout;
