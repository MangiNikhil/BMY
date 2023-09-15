import React from "react";
import { BiChevronRight,BiShareAlt, BiStar } from "react-icons/bi";
//import { BsShare } from "react-icons/bs";
const launchRazorPay = () => {
  let options = {
    key: "rzp_test_CzaQMZ6vUigHnc",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase or Rental",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};
const MovieHero = () => {

  return (
    <div>
      <div className="md:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
        />
      </div>

      <div
        className="bg-black relative hidden lg:block"
        style={{ height: "34rem" }}
      >
        <div
          className="absolute h-full w-full -z-1"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%,		rgba(26, 26, 26, 0.0409746) 97.47%,rgb(34, 34, 34) 100%)",
            // "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"
          }}
        ></div>
        <div>
          <div className="absolute h-96 z-11 w-64 left-32 top-20 flex ">
            <div className="absolute h-full w-full  rounded-xl">
              <img
                className="h-full w-full rounded-t-lg "
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-et00004000-1663573359.jpg"
                alt="poster"
              />
              <div className="p-2 text-center bg-black text-white rounded-b-lg">
                No Watch Options.
              </div>
            </div>
            <div>
              <div className="absolute h-full w-full left-72 top-4  rounded-lg flex  flex-col	">
                <div className="text-white font-bold text-4xl	"> Avatar </div>
                <div className="text-white   flex  flex-row items-center	py-4	">
                  <div className="pr-2">
                    <BiStar />
                  </div>
                  <div className=" text-2xl font-bold pl-1 pr-3"> 9.1/10 </div>{" "}
                  <div className=" text-lg"> 40.9k Votes</div>
                  <div className="px-1 py-2 mt-1">
                    <BiChevronRight />
                  </div>
                </div>
                <div className="flex text-white bg-navcol-700 px-6 py-4 w-96 items-center rounded-lg   flex-row justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold	"> Add your rating & review</div>
                    <div className="text-slate-300"> Your ratings matter </div>
                  </div>
                  <div className="bg-white text-black px-4 py-2 rounded-lg ">
                    <button> Rate now</button>
                  </div>
                </div>
                <div className="bg-white text-black mt-4 px-2 text-lg rounded-sm w-72">
                  3D,4DX,2D,4DX,3D,IMAX,3D,MX4D
                </div>
                <div className="bg-white text-black my-2 px-2 text-lg rounded-sm w-60">
                  English,Hindi,Telugu,Tamil
                </div>
                <div className=" text-white my-2 w-96">
                  {" "}
                  2h 46m • Action,Adventure,Thriller • UA • 18 Dec, 2009
                </div>
                <div>
                <button onClick={ launchRazorPay  } className="bg-red-600 text-white text-sm rounded px-6 py-3">
                Book Tickets
              </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-20  items-center px-2 hover:bg-navcol-700  flex bg-opacity-2 cursor-pointer    rounded-xl top-16">
          <div className="px-4 w-4  h-4"><BiShareAlt /></div>  
          <div className="p-2 text-center text-white">Share.</div>
          </div>
        </div>

        <div className="ml-16 mr-16  " style={{ height: "34rem" }}>
          <img
            className="   h-full w-full"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/avatar-et00004000-1663573359.jpg"
            alt="poster"
          />
        </div>
      </div>
    </div>
  );
};
export default MovieHero;
