import React from "react";
import CoverVideo from "../../assets/CoverVideo.mp4";

function CoverVideoComponent() {
  return (
    <div className="w-full h-full relative">
      <video
        src={CoverVideo}
        autoPlay
        loop
        muted
        className="w-full opacity-30 h-1/5 object-cover"
      />
      <div className="absolute flex flex-col top-0 text-black w-full h-full space-y-9 items-center justify-center">
        <div>
          <p className="text-4xl text-white font-roboto">
            Ready to find{" "}
            <span className="bg-green-400/70 p-2 font-roboto font-light border">
              Sports Venues
            </span>{" "}
            around you
          </p>
        </div>
        <div>
          <input type="text" className=" px-16 py-4 rounded-full" placeholder=" Search for cities" />
        </div>
      </div>
    </div>
  );
}

export default CoverVideoComponent;
