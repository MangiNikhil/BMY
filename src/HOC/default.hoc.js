// higher order components tansforms componet into another component
// adding additional fuctionality to the existing component

 import React  from "react";
 //import { Component } from "react";
import { Route, Routes } from "react-router-dom";
//layouts
//default layout
import DefaultLayout from "../layouts/Default.layout";

 const DefaultHoc=({Component, ...rest })=>{
   //component
   //props:path, exact
    return (
    <div>
      <Routes>
         <Route 
         {...rest}
         Component={(props)=>(
            <DefaultLayout>
             <Component {...props}/>
            </DefaultLayout>
         )
         }
         />
      </Routes>
    </div>
    );
 }

 export default DefaultHoc;
















