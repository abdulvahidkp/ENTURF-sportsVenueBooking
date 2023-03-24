import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

import BookingCalendar from './BookingCalendar';


import { EmptyCart } from '../../assets/CartIcon'


function BookingSection({turf}) {
  
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
 

  return (
  <div className='bg-[#F3F5F9]'>
        <div className='container'>
          <div className='flex space-x-10'>
            <div className='basis-5/6 w-full my-11 space-y-6   '>
              
                {/* <div className='bg-white rounded-lg'>
                <div className='py-2'>
                  <span className=' py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full'>1</span>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Choose an Activity</a>
                </div>
                <div className='flex px-4 py-5  space-x-9 '>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>Cricket</h1>
                      <p className='text-[#504a4ad0]'><span>3</span> facilities/session available</p>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>₹650</h1>
                          <p className='text-sm text-[#504a4ad0]'>onwards</p>
                        </div>
                        <div>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>Football</h1>
                      <p className='text-[#504a4ad0]'><span>3</span> facilities/session available</p>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>₹650</h1>
                          <p className='text-sm text-[#504a4ad0]'>onwards</p>
                        </div>
                        <div>
                          <button className='bg-green-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className='bg-[#a7b4ca3c] rounded-lg'>
                <div className='py-2 '>
                  <span className=' py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full'>2</span>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Choose a Facility</a>
                </div>
                <div className='flex px-4 py-5 space-x-9 '>
                  <p className='text-[#504a4ad0]'>Please select an activity to view available facilities</p>
                </div>
              </div> */}

              {/* <div className='bg-[#a7b4ca3c] rounded-lg'>
                <div className='py-2 '>
                  <span className=' py-2 px-3 w-3 -ml-7 bg-[#1a273a] text-white rounded-full'>3</span>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Select Slots</a>
                </div>
                <div className='flex px-4 py-5 space-x-9 '>
                  <p className='text-[#504a4ad0]'>Please select a facility to view available slots</p>
                </div>
              </div> */}
              {
                turf.slots?.length && 


              <div className='bg-white rounded-lg'>
                <div className='py-2 '>
                  <a className='text-2xl font-roboto font-semibold mx-2 text-[#504a4a] '>Select Slots</a>
                </div>
                <div className='flex px-4 py-5 space-x-9 '>
                  <BookingCalendar slots={turf.slots}/>
                </div>
              </div>
              }


            </div>
            <div className='basis-2/5 w-full bg-white h-80 rounded-lg my-11 grid justify-items-center relative'>
              <div className='mt-16 justify-items-center space-y-5 grid absolute top-0'>
                <div className='text-[#504a4a64] text-8xl'>
                  <EmptyCart/>
                </div>
                <h1 className='font-bold text-[#504a4ad0]'>Hudle Up!</h1>
                <p className='text-[#504a4ad0]'>Book your game now!  &#129321;</p>
              </div>
              <div className='bg-green-400/70 absolute bottom-0 rounded-b-md text-xl py-2 w-full'>
                  <h1 className='ml-4 text-white'>Please select slots </h1>
              </div>
            </div> 
          </div>
        </div>
      </div>
  )
}

export default BookingSection