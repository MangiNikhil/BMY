import React from "react";
//import { Component } from "react";
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({Component, ...rest }) => {
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
};

export default DefaultHOC;
