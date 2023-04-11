import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";

function VMAllBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBookings = async () => {
      let token = localStorage.getItem("vm");
      try {
        setLoading(true);
        const { data } = await axios.get("/vm/bookings", {
          headers: {
            Authorization: token,
          },
        });
        setBookings(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBookings();
  }, []);

  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
          {loading ? (
            <div role="status" className="flex justify-center items-center h-screen">
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <div class="grid gap-4 mb-4">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Venue name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Booked user
                      </th>
                      <th scope="col" class="px-6 py-3">
                        sport
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Facility
                      </th>
                      <th scope="col" class="px-6 py-3">
                        time
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                        price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        is cancelled
                      </th>
                    </tr>
                  </thead>
                  {
                  bookings.length ?
                  <tbody>
                    {
                      bookings.map((per,index) => (
                        <tr key={index} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <td class="px-6 py-4">{per.venueName} </td>
                          <td class="px-6 py-4">{per.name} </td>
                          <td class="px-6 py-4">{per.sport}</td>
                          <td class="px-6 py-4">{per.facility}</td>
                          <td class="px-6 py-4">{per.slotTime}</td>
                          <td class="px-6 py-4">{per.slotDate}</td>
                          <td class="px-6 py-4">₹ {per.price}</td>
                          <td class="px-6 py-4">{per.refund === 'processed' ? "YES" : "NO"}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                  :
                  <div className="flex justify-center items-center p-5">
                    <p className="text-2xl sm:text-4xl">No bookings available</p>
                  </div>
}
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VMAllBookings;

{
  /* <div>
      <div className="p-4 sm:ml-64">
      <div className="h-screen bg-gray-100 p-6 mt-3">

      <div  className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12'>
        
          <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sun </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Mon </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Tue </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
                  </div>
              </div>
          </div>
        
          <div className='flex group bg-purple-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16'>
            <span className="flex h-3 w-3 absolute -top-1 -right-1">
              <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
            </span>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-100 text-sm'> Wed </p>
                     <p className='text-gray-100  mt-3 font-bold'> 14 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Thu </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Fri </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                  </div>
              </div>
          </div>
          
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'> Sat </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                  </div>
              </div>
          </div>
          
        
      </div>
      
      
    </div>
      </div>
    </div> */
}
