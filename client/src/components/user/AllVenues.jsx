import React, { useState } from "react";
import { ShareIcon } from "../../assets/ShareIcon";
import { Cricket, Football } from "../../assets/Sports";
import axios from "../../api/axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIcon from "./assets/LoadingIconSport.gif";

function AllVenues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const { place } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    try {
      const getTurfs = async () => {
        let { data } = await axios.get(`/venues/${place}`);
        setVenues(data);
      };
      getTurfs();
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="container mx-auto">
        {loading ? (
          <div role="status" className="h-screen flex justify-center items-center">
             <img src={LoadingIcon} alt="Loading..." className="rounded-full h-14 " style={{animationDuration:'0.3 s'}} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 min-h-screen h-auto lg:grid-cols-3 place-items-center 2xl:grid-cols-4 py-24 ">
            {/* start */}
            {venues.length ? (
              venues.map((venue,index) => (
                <div key={index} className="w-full p-4 lg:w-72 2xl:w-80 rounded-lg shadow-xl mt-20 scale-100 hover:scale-105 ease-in duration-200 bg-white" onClick={() => navigate(`/venue/${venue._id}`)}>
                  <div className="wrapper antialiased -mt-16">
                    <img src={venue.image} alt="turfImage" className="h-44 w-full object-cover rounded-lg shadow-md " />
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">{venue.discountPercentage}% off</span>
                    <ShareIcon />
                  </div>
                  <h4 className="mt-1 text-md md:text-xl font-semibold uppercase leading-tight truncate">{venue.venueName}</h4>
                  <div className="sm:mt-1">{venue.district}</div>
                  <div className=" sm:mt-0 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <p className="mt-3 hidden sm:block text-[#4f4c4a]">Rating</p>
                      <div className="flex items-center ">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="-mt-2 sm:-mt-0 flex flex-row sm:flex-col items-end ">
                      <h2 className="font-semibold sm:font-bold mt-3 text-start sm:text-end">₹{venue.actualPrice}</h2>
                      <p className="text-[#4f4c4a] ml-1">onwards</p>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl  mt-1 flex gap-3 text-grey-500">{venue.sport === "football" ? <Football /> : venue.sport === "cricket" ? <Cricket /> : ""}</div>
                </div>
              ))
            ) : (
              <p className="text-6xl whitespace-nowrap  ">No Turfs available </p>
            )}
            {/* end */}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllVenues;
