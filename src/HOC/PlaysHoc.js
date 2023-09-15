import React from "react";
import { Route, Routes } from "react-router-dom";

import PlaysLayout from "../layouts/MovieLayout";
export const PlaysHoc = ({ Component, ...rest }) => {
  return (
    <div>
      <Routes>
        <Route
          {...rest}
          Component={(props) => (
            <PlaysLayout>
              <Component {...props} />
            </PlaysLayout>
          )}
        />
      </Routes>
    </div>
  );
};
