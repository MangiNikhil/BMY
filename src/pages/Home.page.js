import React, { useState, useEffect } from "react";
import axios from "axios";
import { Footer } from "../components/footer/Footer";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
// imp ort Premier from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSliderComponent";
//import PremierImages from "../config/TempPosters.config";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "01bc365b72ee8a4d0097eb5dcea7d16e";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  console.log({ popularMovies });


  const [RMovies, setRMovies] = useState([]);

  useEffect(() => {
    const requestRMovies = async () => {
      const getRMovies = await axios.get("/movie/346698/recommendations");
      console.log(getRMovies)
      setRMovies(getRMovies.data.results);
    };
    requestRMovies();
  }, []);

  console.log({ RMovies });
 
  
  const [TRMovies, setTRMovies] = useState([]);

  useEffect(() => {
    const requestTRMovies = async () => {
      const getTRMovies = await axios.get("/movie/top_rated");
      setTRMovies(getTRMovies.data.results);
    };
    requestTRMovies();
  }, []);

  console.log({ TRMovies });



  return (
    <div className="flex flex-col mx-auto ">
      <div className="container mx-auto px-4 py-3">
        <h1 className="text-rgb(51, 51, 51)  text-2xl font-semibold  py-2 px-12">
          The Best Of Live Events{" "}
        </h1>
        <div className="mx-16">
          <EntertainmentCardSlider />
        </div>
      </div>
      <div className="bg-navcol-200  py-12 hidden md-block lg-block">
        <div className="mx-16">
          <div className=" px-4">
            <div>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="premlogo"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              Images={popularMovies}
              title="Premiers"
              isDark={true}
              subtitle="Brand New Releases Every Friday."
            />
          </div>
        </div>
      </div>
      <div className="bg-navcol-200  py-12 md-hidden ">
        <div className="mx-16">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="premlogo"
            className="w-full h-full"
          />
        </div>
        <div className="mx-16 ">
          <div className=" px-4">
            <PosterSlider
              Images={popularMovies}
              isDark={true}
              title="Premiers"
              subtitle="Brand New Releases Every Friday."
            />
          </div>
        </div>
      </div>

      <div className="py-4 px-16">
        <PosterSlider
          Images={popularMovies}
          title="Recommended movies"
         // subtitle="Brand New Releases Every Friday."
          isDark={false}
        />
      </div>
      <div className="py-4 px-16">
      <PosterSlider
        Images={popularMovies}
        title="Recommended movies"
        //subtitle="Brand New Releases Every Friday."
        isDark={false}
      />
    </div>
    <div className="py-4 px-16">
        <PosterSlider
          Images={popularMovies}
          title="Recommended movies"
         // subtitle="Brand New Releases Every Friday."
          isDark={false}
        />
      </div>
      
     <div className="hidden   lg:block"> 
     <Footer />
     </div>
    </div>
  );
};
export default HomePage;
