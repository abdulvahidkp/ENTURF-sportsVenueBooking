import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../api/axios";
import turfImage from "../../assets/turfImage.jpeg";

function ProfileAndBooking() {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("user")
    const getBookings = async () => {
      let { data } = await axios.get("/bookings", {
        headers: {
          Authorization: token,
        },
      });
      setBooking(data);
      console.table(data);
    }

    getBookings()
  }, []);

  const user = useSelector(state=>state.user);

  const [aside, setAside] = useState("booking");
  return (
    <div>
      <div className=" w-full h-screen bg-[#F3F5F9]">
        <div className="container">
          <div className="flex py-24 max-h-full space-x-2">
            <div className="bg-white h-full shadow-sm w-full  basis-1/4 p-4 space-y-3 rounded-md sticky">
              <div>
                <h1 className="font-semibold text-2xl font-roboto text-[#605555] uppercase">{user.name}</h1>
                <p className="text-[#807d7d] font-mono font-semibold">{user.mobile}</p>
              </div>
              <div className="buttons flex flex-col space-y-2 ">
                <button
                  className={`border-r-4 text-lg p-3 text-[#807d7d] ${aside === "booking" && "border-green-400 focus:text-[#605555]"} hover:text-[#605555] text-start`}
                  onClick={() => setAside("booking")}
                >
                  MY BOOKINGS
                </button>
                <button
                  className={`border-r-4 text-lg p-3 text-[#807d7d] ${aside === "profile" && "border-green-400 focus:text-[#605555]"} hover:text-[#605555] text-start`}
                  onClick={() => setAside("profile")}
                >
                  EDIT PROFILE
                </button>
              </div>
            </div>
            {aside === "booking" ? (
              <div className="bg-white basis-3/4 p-4 space-y-5 ">
                <h1 className="font-semibold text-2xl font-roboto text-green-700 ">Bookings</h1>
                {bookings.length ? (
                  bookings.map((per) => (
                    <div className="shadow rounded-lg">
                      <div className="flex justify-between rounded-lg p-1">
                        <div className="flex space-x-2">
                          <img src={per.turfId.image} className="h-24 rounded-l-lg" alt="" />
                          <div className="pt-1">
                            <h1 className="text-[#605555] text-lg uppercase">{per.turfId.venueName}</h1>
                            <p className="text-[#605555]">
                              <span className="text-[#807d7d]">Activity : </span>{per.sport}
                            </p>
                            <p className="text-[#605555]">
                              <span className="text-[#807d7d]">Facility : </span>{per.facility}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h1 className="text-[#605555] text-md uppercase">{per.slotDate}</h1>
                          {/* <p className="text-[#605555] ">
                            <span className="text-[#807d7d]">DAY : </span>{}
                          </p> */}
                          <p className="text-[#605555]">
                            <span className="text-[#807d7d]">TIME : </span>{per.slotTime}
                          </p>
                        </div>
                        <div className="mr-3">
                          <p className="text-[#605555] text-end">
                            <span className="text-[#807d7d]">RS : </span>₹{per.price}
                          </p>
                          {/* <p className="text-white bg-red-500 hover:bg-red-600 text-center rounded-full cursor-pointer">cancel</p> */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <p>NO BOOKINGS AVAILABLE</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white basis-3/4 p-4 space-y-5 rounded-lg">
                <h1 className="font-semibold text-2xl font-roboto text-green-700">Edit Profile</h1>
                <div className="grid grid-cols-2 space-x-2">
                  <input
                    type="text"
                    id="first_name"
                    className="border my-3 border-gray-300 text-gray-900 text-md rounded-md p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    value="abdulvahidkp"
                    required
                  />
                  <input
                    type="text"
                    id="first_name"
                    className="border my-3 border-gray-300 text-gray-900 text-md rounded-md p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    value="989214568"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-green-300 w-24 rounded-full h-10 duration-500 transition hover:bg-green-400">Save</button>
                  <p className="text-[#807d7d] cursor-pointer hover:underline hover:text-[#605555]">change password</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAndBooking;
