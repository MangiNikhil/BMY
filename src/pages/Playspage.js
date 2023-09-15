import React from "react";
import { Footer } from "../components/footer/Footer"; 
import { MyDisclosure } from "../components/PlaysFilters/PlaysFilter";
import Poster from "../components/Poster/Poster.comoponent";
export const Plays = () => {
  return (
<div>
<div className="bg-slate-100	 md:py-16 lg:px-24 lg:py-16 md:px-24 sm:px-8 sm:py-8">
<div className="container mx-auto px-4">
  <div className="w-full lg:flex ">
    <div className="lg:w-1/4">
      <h2 className="text-2xl font-bold pl-4 mb-6">Filters</h2>
      <div>
        <MyDisclosure title="Date" Filters={["Today", "Tomorrow", "This Weekend"]} />
        <MyDisclosure title="Language" Filters={["Tamil", "Kannada"]} />
        <MyDisclosure title="Categories" Filters={["Theatre"]} />
        <MyDisclosure title="Genres" Filters={["Drama", "Action","Historical"]} />
        <MyDisclosure title="More Filters" Filters={["OnlineStreaming", "Kids Allowed"]} />
        <MyDisclosure title="Price" Filters={["Free", "0-500","501-2000"]} />

        </div>
    </div>
    <div className="lg:w-3/4">
      <h2 className="text-2xl font-bold pl-4 mb-6">Plays in Hyderabad</h2>
      <div className="flex flex-wrap">
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362433-ydcwnmknty-portrait.jpg"
            title="Love in the Cholera of Time"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366842-zxxukcthqx-portrait.jpg"
            title="The Importance of being Earnest by Samahaara"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368185-vwuzaxzrxf-portrait.jpg"
            title="ONLINE HORROR STORY-TELLING SESSION BY ATHARVA"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00367611-dwffrhcjvb-portrait.jpg"
            title="Tgood-doctor-match-fixing-by-samahaara"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362433-ydcwnmknty-portrait.jpg"
            title="Love in the Cholera of Time"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00366842-zxxukcthqx-portrait.jpg"
            title="The Importance of being Earnest by Samahaara"
            subtitle="English ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
          <Poster
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00368185-vwuzaxzrxf-portrait.jpg"
            title="ONLINE HORROR STORY-TELLING SESSION BY ATHARVA"
            subtitle="English ₹300"
          />
        </div>{" "}

      </div>
    </div>
  </div>
</div>

</div>
<div>
<Footer/>
</div>
</div>
  );
};
