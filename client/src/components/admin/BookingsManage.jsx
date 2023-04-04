import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import toast, { Toaster } from "react-hot-toast";

const GET_BOOKINGS = "/admin/bookings";

function BookingsManage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("admin");
    axios
      .get(GET_BOOKINGS, { headers: { Authorization: token } })
      .then(({ data }) => {
        setBookings(data);
        console.clear();
        console.table(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={`p-4 sm:ml-64 bg-[#05445E] min-h-screen h-auto`}>
      <Toaster position="top-right" />
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-[#D4F1F4] dark:text-blue-100">
            <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <p className="text-lg m-1 capitalize">Manage Bookings</p>
              <tr className="border border-[#189AB4]">
                <th scope="col" class="px-6 py-3">
                  Turf Name
                </th>
                <th scope="col" class="px-6 py-3">
                  user Name
                </th>
                <th scope="col" className="px-6 py-3">
                  district
                </th>
                <th scope="col" className="px-6 py-3">
                  slot Date
                </th>
                <th scope="col" className="px-6 py-3">
                  slot Time
                </th>
                <th scope="col" className="px-6 py-3">
                  sport
                </th>
                <th scope="col" className="px-6 py-3">
                  facility
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment type
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.length ? (
                bookings.map((booking, key) => (
                  <tr className="bg-[#189AB4] border-b border-[#05445E]" id={key}>
                    <th scope="row" className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]">
                      {booking?.turfId?.venueName}
                    </th>
                    <td class="px-6 py-4">{booking.userId?.name}</td>
                    <td class="px-6 py-4">{booking.turfId?.district}</td>
                    <td class="px-6 py-4">{booking.slotDate}</td>
                    <td class="px-6 py-4">{booking.slotTime}</td>
                    <td class="px-6 py-4">{booking.sport}</td>
                    <td class="px-6 py-4">{booking.facility}</td>
                    <td class="px-6 py-4">{booking.price}</td>

                    
                    <td class="px-6 py-4">
                      {booking?.paymentType}
                    </td>
                  </tr>
                ))
              ) : (
                <div className=" p-4">No bookings available</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookingsManage;
