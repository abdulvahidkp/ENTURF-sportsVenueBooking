import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../api/axios";
import toast,{ Toaster } from "react-hot-toast";
import swal from 'sweetalert'
import { Wallet } from "../../assets/Wallet";
import { updateWallet, changeName } from '../../redux/features/userSlice'

function ProfileAndBooking() {
  const user = useSelector((state) => state.user);

  const [bookings, setBookings] = useState([]);
  const [name,setName] = useState(user.name);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("user");
    const getBookings = async () => {
      let { data } = await axios.get("/bookings", {
        headers: {
          Authorization: token,
        },
      });
      setBookings(data);
    };

    getBookings();
  }, []);

  function shouldShowCancelButton(bookedDate,bookedTime) {
    const bookingDate = new Date(`${bookedDate} ${bookedTime.substring(0,5)}`);
    const now = new Date();
    const eightHoursAdd = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    // Check if the booking time is in the future and is less than 8 hours away
    if (bookingDate < eightHoursAdd) return false;
    return true;
  }

  async function handleChangeName(){
    const token = localStorage.getItem('user')
    if(user.name === name || !name) return;
    try {
      let {data} = await axios.put('/changeName',{name},{
        headers:{
          Authorization:token
        }
      })
      dispatch(changeName(data.name))
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCancelBooking(bookingId,bookedDate,bookedTime){
    swal({
      title: `Cancel Booking`,
      text: `Are you sure you want to cancel this booking?`,
      icon: 'warning',
      buttons: ['NO', `YES`],
      dangerMode: true
    })
    .then(async (confirm) => {
      if (confirm) {
        let token = localStorage.getItem('user')
        if(!shouldShowCancelButton(bookedDate,bookedTime)) return false
        try {
          let {data} = await axios.get(`/booking/${bookingId}/refund`,{
            headers:{
              Authorization:token
            }
          })
          dispatch(updateWallet({wallet:data.wallet}))
          toast.success(`refunded to wallet`);
          const newArray = [...bookings]
          const index = newArray.findIndex(item => item._id === bookingId);
          newArray[index].refund = 'processed';
          setBookings(newArray);
        } catch (error) {
          console.log(error)
          toast.error(`${(error.response && error.response.data && error.response.data.message) || error.message || error.toString()}`);
        }
      }
    })
  }

  const [aside, setAside] = useState("booking");
  return (
    <div>
      <Toaster position="top-right" />
      <div className=" w-full min-h-screen h-auto bg-[#F3F5F9]">
        <div className="container">
          <div className="flex flex-col md:flex-row py-24 max-h-full space-x-2">
            <div className="bg-white h-full shadow-sm w-full basis-1/4 p-4 space-y-3 rounded-md sticky">
              <div className="flex flex-col ">
                <div>
                  <h1 className="font-semibold text-2xl font-roboto text-[#605555] uppercase break-all">{user.name}</h1>
                  <p className="text-[#807d7d] font-mono font-semibold">{user.mobile}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[#605555]">
                    <Wallet/>
                  </div>
                  <p className="text-[#605555]">&#8377;{user.wallet}.00</p>
                </div>
              </div>
              <div className="buttons flex md:flex-col space-y-2 ">
                <button
                  className={`border-b-4 md:border-b-0 md:border-r-4 text-lg p-3 text-[#807d7d] ${aside === "booking" && "border-green-400 focus:text-[#605555]"} hover:text-[#605555] text-start`}
                  onClick={() => setAside("booking")}
                >
                  MY BOOKINGS
                </button>
                <button
                  className={`border-b-4 md:border-b-0 md:border-r-4 text-lg p-3 text-[#807d7d] ${aside === "profile" && "border-green-400 focus:text-[#605555]"} hover:text-[#605555] text-start`}
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
                  bookings.map((per, index) => (
                    <div className="shadow rounded-lg" key={index}>
                      <div className="flex justify-between rounded-lg p-1">
                        <div className="flex space-x-2">
                          <img src={per.turfId.image} className="h-24 w-28 object-center hidden md:block rounded-l-lg" alt="" />
                          <div className="pt-1">
                            <h1 className="text-[#605555] text-lg uppercase">{per.turfId.venueName}</h1>
                            <p className="text-[#605555]">
                              <span className="text-[#807d7d]">Activity : </span>
                              {per.sport}
                            </p>
                            <p className="text-[#605555]">
                              <span className="text-[#807d7d]">Facility : </span>
                              {per.facility}
                            </p>
                          </div>
                        </div>
                        
                        <div className="">
                          <h1 className="text-[#605555] text-md uppercase">{per.slotDate}</h1>
                          {/* <p className="text-[#605555] ">
                            <span className="text-[#807d7d]">DAY : </span>{}
                          </p> */}
                          <p className="text-[#605555] text-end">
                            {per.slotTime}
                          </p>
                          <p className="text-[#605555] text-end">
                            <span className="text-[#807d7d]">Rs : </span>₹{per.price}
                          </p>
                          {
                            per.refund === 'processed' ?
                            <p className=" rounded-full text-[#79d85d] text-end">refunded</p> :
                            shouldShowCancelButton(per.slotDate,per.slotTime) &&
                             <p className="text-white bg-red-500 hover:bg-red-600 text-center rounded-full cursor-pointer" onClick={()=>handleCancelBooking(per._id,per.slotDate,per.slotTime)}>cancel</p>
                          }
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
                    id="name"
                    className="border my-3 border-gray-300 text-gray-900 text-md rounded-md p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    id="mobile"
                    className="border my-3 border-gray-300 text-gray-900 text-md rounded-md p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    value={user.mobile}
                    required
                    disabled
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className={`bg-green-300 w-24 rounded-full ${name !== user.name ? 'block' : 'hidden'} h-10 duration-500 transition hover:bg-green-400`} onClick={handleChangeName}>Save</button>
                  {/* <p className="text-[#807d7d] cursor-pointer hover:underline hover:text-[#605555]">change password</p> */}
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
