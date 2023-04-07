import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setSport, setFacility, clearBooking } from "../../redux/features/bookingSlice";
import swal from "sweetalert";
import { updateWallet } from "../../redux/features/userSlice";
import toast from "react-hot-toast";

import BookingCalendar from "./BookingCalendar";

import { EmptyCart } from "../../assets/CartIcon";

function BookingSection({ turf }) {
  // function handleSlotSelection(isSelected, slot) {
  //   // Store the selected slot in a state variable
  //   setSelectedSlots(prevSelectedSlots => isSelected
  //     ? [...prevSelectedSlots, slot]
  //     : prevSelectedSlots.filter(selectedSlot => selectedSlot !== slot)
  //   );

  //   // Calculate the price based on the number of selected slots
  //   const pricePerSlot = 10; // Replace with your actual price per slot
  //   const totalPrice = selectedSlots.length * pricePerSlot;
  //   setTotalPrice(totalPrice);
  // }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sportAndFacility = useSelector((state) => state.booking);
  const { isLoggedIn, wallet } = useSelector((state) => state.user);

  const setSportAndFacility = (sport, facility) => {
    dispatch(setSport(sport));
    dispatch(setFacility(facility));
  };

  useEffect(() => {
    return () => {
      dispatch(clearBooking());
    };
  }, []);

  function showPaymentOptions() {
    if (!wallet) return handleBooknow("online");
    swal({
      title: "Select Payment Option",
      text: `Choose your preferred payment option, wallet balance Rs.${wallet}.00 , amount to be paid in online ${
        turf.actualPrice - turf.actualPrice * (turf.discountPercentage / 100) - wallet < 0 ? "0" : turf.actualPrice - turf.actualPrice * (turf.discountPercentage / 100) - wallet
      }`,
      buttons: {
        offline: {
          text: "include wallet",
          value: "wallet",
          className: "bg-green-500 uppercase",
        },
        online: {
          text: "fully Online Payment",
          value: "online",
          className: "bg-green-500 uppercase",
        },
      },
    }).then((value) => {
      // The value parameter contains the value of the clicked button
      if (value === "wallet") return handleBooknow("wallet");
      else if (value === "online") return handleBooknow("online");
    });
  }

  async function handleBooknow(method) {
    const token = localStorage.getItem("user");
    try {
      let response = await axios.post(
        "/book",
        { turf: turf._id, method, sport: sportAndFacility.sport, facility: sportAndFacility.facility, slotDate: sportAndFacility.date, slotTime: sportAndFacility.slot },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.status === 201) {
        dispatch(updateWallet({ wallet: response.data.wallet }));
        toast.success(`turf Booked Successfully`);
        navigate("/confirmation");
        return;
      }
      initPayment(response.data.order);
    } catch (error) {
      console.log(error);
    }
  }

  function initPayment(datas) {
    const token = localStorage.getItem("user");
    try {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEYID,
        amount: datas.amount,
        currency: datas.currency,
        name: turf.venueName,
        description: "payment for book a slot",
        image: turf.image,
        order_id: datas.id,
        handler: async (response) => {
          try {
            const { data } = await axios.post(
              "/verifyPayment",
              {
                ...response,
                turfId: turf._id,
                sport: sportAndFacility.sport,
                facility: sportAndFacility.facility,
                slotDate: sportAndFacility.date,
                slotTime: sportAndFacility.slot,
                price: datas.amount,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            dispatch(updateWallet({ wallet: data.wallet }));
            navigate("/confirmation");
          } catch (error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="bg-[#F3F5F9]">
      <div className="container">
        <div className="flex flex-col md:flex-row space-x-10">
          {isLoggedIn ? (
            <>
              <div className=" md:mx-0 md:w-8/12 my-11 space-y-6   ">
                <div className="bg-white rounded-lg">
                  <div className="py-2 hidden sm:block">
                    <span className=" py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full">1</span>
                    <a className="text-2xl font-roboto font-semibold mx-2 text-[#504a4a] ">Choose an Activity</a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 px-4 py-5">
                    {turf.sportFacility?.length &&
                      turf.sportFacility.map((per, index) => (
                        <div key={index} className="border w-44 rounded-md flex flex-col mt-3 ">
                          <div className="p-2">
                            <h1 className="font-semibold text-xl text-[#504a4ad0] ">{per.sport}</h1>
                            <p className="text-[#504a4ad0]">facility available : {per.facility}</p>
                          </div>
                          <div className="pt-3 mt-auto">
                            <div className="border p-1 flex justify-between items-center bg-[#F3F5F9]">
                              <div>
                                {/* <h1 className="text-bold text-xl">{per.facility}</h1> */}
                                {/* <p className="text-sm text-[#504a4ad0]">onwards</p> */}
                              </div>
                              <div>
                                <button
                                  className={`text-white px-2 rounded hover:bg-green-400 duration-300 ${sportAndFacility.sport === per.sport ? "bg-green-400" : "bg-green-400/70"}`}
                                  onClick={() => {
                                    if (sportAndFacility.sport !== per.sport) {
                                      setSportAndFacility(per.sport, per.facility);
                                    }
                                  }}
                                >
                                  {sportAndFacility.sport === per.sport ? "SELECTED" : "SELECT"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* <div className='bg-[#a7b4ca3c] rounded-lg'>
                <div className='py-2 '>
                  <span className=' py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full'>2</span>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Choose a Facility</a>
                </div>
                <div className='flex px-4 py-5 space-x-9 '>
                  <p className='text-[#504a4ad0]'>Please select an activity to view available facilities</p>
                </div>
               </div> */}
                {!sportAndFacility.sport ? (
                  <div className="bg-[#a7b4ca3c] rounded-lg">
                    <div className="py-2 hidden sm:block">
                      <span className=" py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full">2</span>
                      <a className="text-2xl font-roboto font-semibold mx-2 text-[#504a4a] ">Select Slots</a>
                    </div>
                    <div className="flex px-4 py-5 space-x-9 ">
                      <p className="text-[#504a4ad0]">Please select a facility to view available slots</p>
                    </div>
                  </div>
                ) : (
                  turf.slots?.length && (
                    <div className="bg-white rounded-lg">
                      <div className="py-2 hidden sm:block">
                        <span className=" py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full">2</span>
                        <a className="text-2xl font-roboto font-semibold mx-2 text-[#504a4a] ">Select Slots</a>
                      </div>
                      <div className=" px-4 py-5 space-x-9 ">
                        <BookingCalendar slots={turf.slots} turfId={turf._id} />
                      </div>
                    </div>
                  )
                )}
              </div>
              {sportAndFacility.slot ? (
                <>
                  <div className="md:basis-4/12 bg-white h-80 rounded-lg my-4 md:my-11 grid p-2 relative">
                    <div className="xl:text-2xl h-16 rounded bg-[#a7b4ca3c] flex items-start justify-between px-2 w-full lg:text-xl text-sm">
                      <div>
                        <p className="text-black">{sportAndFacility.date}</p>
                        <p className="text-sm">
                          {sportAndFacility.sport} {sportAndFacility.facility}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p>{sportAndFacility.slot}</p>
                        <p className="text-sm">₹{turf.actualPrice - (turf.actualPrice * turf.discountPercentage) / 100}</p>
                      </div>
                    </div>
                    <div className="bg-green-400/70 absolute bottom-0 rounded-b-md text-xl w-full">
                      <div className="p-1 text-white">
                        <button className="bg-green-600/90 rounded py-1 px-2" onClick={showPaymentOptions}>
                          BOOK NOW{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="ml-16 md:basis-4/12 bg-white h-80 rounded-lg my-6 md:my-11 grid justify-items-center relative">
                  <div className="md:mt-8 flex flex-col justify-center items-center top-0">
                    <div className="text-[#504a4a64] text-8xl">
                      <EmptyCart />
                    </div>
                    <h1 className="font-bold text-[#504a4ad0]">Hudle Up!</h1>
                    <p className="text-[#504a4ad0]">Book your game now! &#129321;</p>
                  </div>
                  <div className="bg-green-400/70 absolute bottom-0 rounded-b-md text-xl py-2 w-full">
                    <h1 className="ml-4 text-white">Please select slots</h1>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full my-11 space-y-6 ">
              {/* <div className='bg-[#a7b4ca3c] rounded-lg'>
                <div className='py-2 '>
                  <span className=' py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full'>2</span>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Choose a Facility</a>
                </div>
                <div className='flex px-4 py-5 space-x-9 '>
                  <p className='text-[#504a4ad0]'>Please select an activity to view available facilities</p>
                </div>
               </div> */}
              <div className="bg-[#a7b4ca3c] rounded-lg">
                <div className="flex flex-col items-center gap-y-2 sm:gap-y-0 sm:flex-row  px-4 justify-between py-5 space-x-9 ">
                  <p className="text-[#504a4ad0]">Please login to see available facility and slots</p>
                  <Link to="/signin" className="bg-green-700 text-center hover:bg-green-800 text-white rounded px-4 py-2">
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
