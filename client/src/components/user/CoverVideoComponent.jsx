import { Link } from "react-router-dom";
import React from "react";
import CoverVideo from "../../assets/CoverVideo.mp4";
const places = [
  'Thiruvananthapuram',
  'Pathanamthitta',
  'Kollam',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod'
]

function CoverVideoComponent() {
  return (
    <div className="w-full min-h-screen h-auto relative">
      <video
        src={CoverVideo}
        autoPlay
        loop
        muted
        className="min-h-screen h-auto w-auto blur-sm object-none"
      />
      <div className="absolute flex flex-col top-0 text-black w-full h-full space-y-9 items-center justify-center">
        <div>
          <p className="text-xl text-center md:text-4xl text-white font-roboto">
            Ready to find{" "}
            <span className="bg-green-400/70 p-1 md:p-2 font-roboto font-light border">
              Sports Venues
            </span>{" "}
            around you
          </p>
        </div>
        <div>
          <input type="text" className="px-6 ring-green-600 ring-2 focus:outline-none ring-offset-1 focus:ring py-2 text-base md:text-xl md:px-16 md:py-4 rounded-full" placeholder=" Search for cities" />
        </div>
        <div className="flex flex-wrap justify-center" >
          {places.map((place,index)=>
            <Link key={index} to={`/venues/${place}`} className="p-1.5 w-32 md:p-2 md:w-44 text-xs md:text-base text-center text-gray-700 opacity-80 hover:shadow-lg cursor-pointer bg-white rounded-full m-2" >{place}</Link>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default CoverVideoComponent;
