import React from 'react'
import { DocsIcon,BookingCancel } from '../../assets/DescriptionIcon'
import { Link } from 'react-router-dom'

function TurfDetailsPart({turf}) {
  return (
      <div className='bg-[#F3F5F9]'>
        <div className='container'>
          <div className='grid space-x-10'>
            <div className='my-10 bg-white h-auto pb-8 rounded-md w-full space-y-5 '>
              <div className='sm:ml-10 mx-3  space-y-4'>
                <h1 className='mt-4 text-2xl font-medium text-[#504a4a] '>Details</h1>
                <div className='flex'>
                  <div className='text-xl text-green-400'>
                    <DocsIcon/>
                  </div>
                  <div className='ml-2 space-y-2'>
                    <h1 className='text-[#504a4a] font-semibold uppercase'>Description</h1>
                    <p className='text-[#504a4a]'>{turf.description}</p>
                  </div>
                </div>
                <hr />
                <div className='flex '>
                  <div className='text-xl text-green-400'>
                    <BookingCancel/>
                  </div>
                  <div className='ml-2 space-y-2'>
                    <h1 className='text-[#504a4a] font-semibold uppercase'>Cancellation</h1>
                    <p className='text-[#504a4a]'>Cancellation of Bookings is allowed as per the cancellation policy.</p>
                    <Link to='/cancellation' className='font-semibold text-green-400 cursor-pointer hover:text-green-500'>View Cancellation Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TurfDetailsPart
