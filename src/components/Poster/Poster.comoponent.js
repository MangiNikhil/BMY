import React from "react";
//src,title,subtitle, isDark(bool)
const Poster = (props) => {
  return (
    <div>
      <div className="flex flex-col items-start gap-2 lg:px-6 md:px-6">
        <div className="h-80 w-full  ">
          <img
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt={props.original_title}
            className="w-full h-full rounded-xl"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm  ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Poster;
