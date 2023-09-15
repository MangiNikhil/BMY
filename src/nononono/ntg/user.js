import React ,{useState,useEffect}from "react";

const User= (props)=>{
    //value,  the fun to update the value 
    const [planet,setPlanet]=useState("earth");
    //same as componentDidMount
    useEffect(()=>{
        //setPlanet("jupiter");
        console.log("comp mounting");
    },[]);
   //same as componentDidUpdate
   useEffect(()=>{
    console.log("planet changes");
    },[planet]);
    return(
        <div>
        <h1>
        {props.name}
        </h1>
        <p>
        {props.desc}
        </p>
       <button onClick={()=>setPlanet("jupiter")}>  {planet}  </button>
        
        </div>
    );
};
export default User;