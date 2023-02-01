import React from "react";
import ReactDOM from "react-dom";
import turfImage from '../../../assets/turfImage.jpeg'


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
                                Photo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Venue name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Activity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Facility
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Slots
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={turfImage} alt="" className='h-16'/>
                            </th>
                            <td class="px-6 py-4">
                                Anfield Turf
                            </td>
                            <td class="px-6 py-4">
                                Allamkulam,taliparamba,kannur
                            </td>
                            <td class="px-6 py-4">
                                Criket,Football
                            </td>
                            <td class="px-6 py-4">
                                5v5,7v7,11v11
                            </td>
                            <td class="px-6 py-4">
                                7hrs
                            </td>
                            <td class="px-6 py-4">
                                From ₹700
                            </td>
                            <td class="px-6 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium adipisci tempore eligendi commodi, dolores facilis odio expedita aliquam aut laboriosam modi repudiandae cumque amet officia sunt accusamus, autem rem.
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="font-medium text-red-600 dark:text-blue-500 hover:underline">Block</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <span className='bg-green-400 font-roboto p-3 rounded-md shadow-lg hover:bg-green-500 duration-300 cursor-pointer float-right'>Add new venue</span>
            </div>
        </div>
      
      </div>
    </div>
    </div>
    
  );
}

export default VMAllBookings;


{/* <div>
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
    </div> */}