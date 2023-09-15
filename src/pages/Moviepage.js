import React from "react";
import Review from "../components/Topreview/Review";
import MovieHero from "../components/MovieHero/MovieHero";
import { BiCameraMovie } from "react-icons/bi";
import CastandCrewComp from "../components/CastandCrew/CastandCrewComp";
import Critic from "../components/Topreview/critic";
import Premier from "../components/Premier/Premier.component";
import { Footer } from "../components/footer/Footer";



const MovieLayout = (props) => {
  return (
    <div className="">
      <MovieHero />
      <div className="lg:w-3/5 lg:pl-12 lg:ml-24 md:mr- md:mx-4 md:mr-8">
        <div className="flex py-8 my-6   pb-12 border-b-2 container mx-auto">
          <div>
            <h2 className="text-gray-800 font-bold md:pb-4  text-3xl">
              About the movie.
            </h2>
            <p>
              Re-releasing in Indian cinemas on 23 September, 2022. A paraplegic
              marine, Jake, is sent on a corporate mission to the moon Pandora
              inhabited by the natives called Na`vi. During his mission, Jake is
              accepted by the natives but remains torn between his orders and
              protecting a place he calls home.
            </p>
          </div>
        </div>
        <div className="lg:w-3/5  md:w-4/5 border-b-2 pb-6">
          <h1 className="text-gray-800 font-bold pt-6 pb-8 text-3xl">
            Applicable offers
          </h1>
          <div className="flex flex-row  items-start border-2 bg-yellow-200 my-4 px-6 py-6 rounded-xl border-yellow-500 border-dashed gap-8">
            <div className="w-12  h-12">
              <BiCameraMovie className="w-full h-full" />
            </div>
            <div>
              <div className="gap-5 text-xl py-2 font-bold">
                <h3>Filmy Pass.</h3>
              </div>
              <div>
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy FIlm Pass
                @99.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b-2 pb-2">
            <div className="text-gray-800   font-bold pt-6 pb-8 text-3xl">
              Cast
            </div>
            <CastandCrewComp className=" pb-4" />
          </div>
          <div className="border-b-2 pb-2 ">
            <div className="text-gray-800   font-bold pt-6 pb-8 text-3xl">
              Crew
            </div>
            <CastandCrewComp className=" pb-4" />
          </div>
        </div>
        <Review />
        <Critic />
       <Premier  isDark={false}/>
      </div>
      <Footer  className="" />
    </div>
  );
};
export default MovieLayout;
