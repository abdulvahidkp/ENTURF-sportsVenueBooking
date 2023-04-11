import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { setTurfDetails, clearBooking, setSport, setFacility } from "../../../redux/features/vm/offlineBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import BookingCalendar from "./BookingCalenderVM";
import toast,{ Toaster } from "react-hot-toast";

function VMDashboardjsx() {
  const [quickBookTurfs, setQuickBookTurfs] = useState([]);
  const [latestBooking, setLatestBooking] = useState([]);

  const dispatch = useDispatch();

  const offlineBooking = useSelector((state) => state.offlineBooking);

  const setSportAndFacility = (sport, facility) => {
    dispatch(setSport(sport));
    dispatch(setFacility(facility));
  };

  async function handleOfflineBooking() {
    if(!offlineBooking.slot) return;
    const token = localStorage.getItem('vm');
    try {
      let response = await axios.post(
        "/vm/offlineBook",
        { turfId: offlineBooking.turfDetails._id, sport: offlineBooking.sport, facility: offlineBooking.facility, slotDate: offlineBooking.date, slotTime: offlineBooking.slot },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(`turf Booked Successfully`);
      getDashboardDetails();
      dispatch(clearBooking())
    } catch (error) {
      console.log(error);
    }
  }
  const getDashboardDetails = async () => {
    try {
      const token = localStorage.getItem("vm");
      let { data } = await axios.get("/vm", {
        headers: {
          Authorization: token,
        },
      });
      console.table(data.quickBookTurfs);
      setQuickBookTurfs(data.quickBookTurfs);
      setLatestBooking(data.latestBooking);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboardDetails();
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <Toaster position="top-right" />
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
            <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL ONLINE BOOKING</p>
            <p className="text-4xl text-gray-700 font-bold">0</p>
          </div>
          <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
            <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL OFFLINE BOOKING</p>
            <p className="text-4xl text-gray-700 font-bold">0</p>
          </div>
          <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
            <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL ONLINE COLLECTION</p>
            <p className="text-4xl text-gray-700 font-bold">0</p>
          </div>
          <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
            <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">UPCOMING BOOKING</p>
            <p className="text-4xl text-gray-700 font-bold">0</p>
          </div>
        </div>
        {quickBookTurfs.length && (
          <div className="flex-col sm:flex-row h-auto justify-center md:justify-start mb-4 rounded border bg-gray-50 dark:bg-gray-800">
            <div className="p-2 flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-300  border">
              <h1 className="text-md ">QUICK BOOKING</h1>
              {offlineBooking.turfDetails && (
                <button className="bg-white p-1 rounded text-red-700 shadow-inner duration-300 hover:bg-[#e77878]" onClick={() => dispatch(clearBooking())}>
                  clear selection
                </button>
              )}
            </div>
            <div>
              <div className=" rounded-lg">
                <div className="flex px-4 py-5  space-x-9 ">
                  {!offlineBooking.turfDetails ? (
                    quickBookTurfs.map((per, index) => (
                      <div key={index} className="border rounded-md">
                        <div className="p-2">
                          <h1 className="font-semibold text-xl text-[#504a4ad0] ">{per.venueName} </h1>
                          <p className="text-[#504a4ad0]">
                            <span>{per.sportFacility.length}</span> sports available
                          </p>
                        </div>
                        <div className="pt-3">
                          <div className="border p-1 flex justify-end items-center bg-[#F3F5F9]">
                            <button className="bg-emerald-400/70 text-white px-2 rounded" onClick={() => dispatch(setTurfDetails(per))}>
                              BOOK
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : //else
                  !offlineBooking.sport ? (
                    offlineBooking.turfDetails.sportFacility.map((perSport, index) => (
                      <div key={index} className="border w-44 rounded-md flex flex-col mt-3 ">
                        <div className="p-2">
                          <h1 className="font-semibold text-xl text-[#504a4ad0] ">{perSport.sport}</h1>
                          <p className="text-[#504a4ad0]">facility available : {perSport.facility}</p>
                        </div>
                        <div className="pt-3 mt-auto">
                          <div className="border p-1 flex justify-between items-center bg-[#F3F5F9]">
                            <div>
                              {/* <h1 className="text-bold text-xl">{per.facility}</h1> */}
                              {/* <p className="text-sm text-[#504a4ad0]">onwards</p> */}
                            </div>
                            <div>
                              <button
                                className={`bg-emerald-400/70 text-white rounded px-2 duration-300 ${offlineBooking.sport === perSport.sport ? "bg-green-400" : "bg-green-400/70"}`}
                                onClick={() => {
                                  if (offlineBooking.sport !== perSport.sport) {
                                    setSportAndFacility(perSport.sport, perSport.facility);
                                  }
                                }}
                              >
                                {offlineBooking.sport === perSport.sport ? "SELECTED" : "SELECT"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : !offlineBooking.slot ? (
                    <BookingCalendar slots={offlineBooking.turfDetails.slots} turfId={offlineBooking.turfDetails._id} />
                  ) : (
                      <div  className="border w-auto rounded-md flex flex-col mt-3 ">
                        <div className="p-2">
                        <h1 className="font-semibold text-xl text-[#504a4ad0] ">{offlineBooking.turfDetails.venueName}</h1>
                          <p className="text-[#504a4ad0]"> {offlineBooking.sport+' '+offlineBooking.facility}</p>
                          <p className="text-[#504a4ad0]"> {offlineBooking.date+' '+offlineBooking.slot}</p>
                        </div>
                        <div className="pt-3 mt-auto">
                          <div className="border p-1 flex justify-between items-center bg-[#F3F5F9]">
                            <div>
                              {/* <h1 className="text-bold text-xl">{per.facility}</h1> */}
                              {/* <p className="text-sm text-[#504a4ad0]">onwards</p> */}
                            </div>
                            <div >
                              <button
                                className={`bg-emerald-400/70 text-white rounded px-2 duration-300 `}
                                onClick={handleOfflineBooking}
                              >
                                BOOK NOW
                              </button>
                            </div>
                          </div>
                        </div>
                    </div>  
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="grid xl:grid-cols-2 gap-4 mb-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <p className="my-2">LATEST BOOKING</p>
            {latestBooking.length ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                      VENUE NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SPORTS
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                      FACILITY
                    </th>
                    <th scope="col" className="px-6 py-3">
                      TIME
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DATE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PRICE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {latestBooking.map((per, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        {per.venueName}
                      </th>
                      <td className="px-6 py-4">{per.sport}</td>
                      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{per.facility}</td>
                      <td className="px-6 py-4">{per.slotTime + " " + per.slotDate}</td>
                      <td className="px-6 py-4">{per.slotDate}</td>
                      <td className="px-6 py-4">₹{per.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-2xl sm:text-4xl">No bookings available</p>
            )}
          </div>

          {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default VMDashboardjsx;
