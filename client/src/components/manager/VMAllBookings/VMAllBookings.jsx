import React from "react";
import ReactDOM from "react-dom";
import turfImage from "../../../assets/turfImage.jpeg";

function VMAllBookings() {
  return (
    <div>
      <div class="p-4 sm:ml-64">
        <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
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
                      price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">Anfield Turf</td>
                    <td class="px-6 py-4">Akhin </td>
                    <td class="px-6 py-4">Football</td>
                    <td class="px-6 py-4">5v5</td>
                    <td class="px-6 py-4">10:00pm - 11:00pm</td>
                    <td class="px-6 py-4">₹700</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">carribeans Turf</td>
                    <td class="px-6 py-4">irshad </td>
                    <td class="px-6 py-4">cricket</td>
                    <td class="px-6 py-4">11v11</td>
                    <td class="px-6 py-4">06:00pm - 07:00pm</td>
                    <td class="px-6 py-4">₹900</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">Anfield Turf</td>
                    <td class="px-6 py-4">Adhil </td>
                    <td class="px-6 py-4">Football</td>
                    <td class="px-6 py-4">5v5</td>
                    <td class="px-6 py-4">07:00am - 08:00am</td>
                    <td class="px-6 py-4">₹700</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">Anfield Turf</td>
                    <td class="px-6 py-4">Akhin </td>
                    <td class="px-6 py-4">Football</td>
                    <td class="px-6 py-4">5v5</td>
                    <td class="px-6 py-4">10:00pm - 11:00pm</td>
                    <td class="px-6 py-4">₹700</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
