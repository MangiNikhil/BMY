// higher order components tansforms componet into another component
// adding additional fuctionality to the existing component

import React  from "react";
import { Route, Routes } from "react-router-dom";

import MovieLayout from "../layouts/MovieLayout";

const MovieHoc=({Component, ...rest })=>{
   return (
   <div>
     <Routes>
        <Route 
        {...rest}
        Component={(props)=>(
           <MovieLayout>
            <Component {...props}/>
           </MovieLayout>
        )
        }
        />
     </Routes>
   </div>
   );
}

export default MovieHoc;
