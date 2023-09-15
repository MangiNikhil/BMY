import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <div>
   <div
   className={props.className}
   style={{ ...props.style}}
   //,width:"20px", height:"20px",paddingRight:"35px",BorderRadius:"50px",paddingTop:"10px",paddingBottom:"30px",paddingLeft:"10px", backgroundColor: "navcol-600"
   onClick={props.onClick}
    />
    </div>
  );
};

export const PrevArrow = (props) => {
  return (
    <div>
   <div
   className={props.className}
   style={{ ...props.style}}
   //width:"20px", height:"20px",paddingRight:"35px",BorderRadius:"50px",paddingTop:"10px",paddingBottom:"30px",paddingLeft:"10px", backgroundColor: "navcol-600"
   onClick={props.onClick}
    />
    </div>
  );
};