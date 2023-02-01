import React from 'react'
import './VenueManagerSignup.css'

function VenueManagerSignup() {
  return (
    <div className='bg-gradient-to-r from-emerald-50 to-emerald-100 py-32 sm:px-16 lg:px-32 xl:px-72 '> 
      <div className='container'>
        <div className='w-full h-45 bg-white shadow-md rounded-md p-8 space-y-6 '>
          <div className='space-y-1'>
            <h1 className='font-semibold'>hey, <span className='text-3xl font-roboto font-bold'>Venue Manager.</span></h1>
            <p>Let's get rolling.</p>
          </div>
          <div className='grid sm:grid-cols-2 gap-2'>
            <input type="text " className='input_Field' placeholder='First Name' />
            <input type="text" className='input_Field' placeholder='Last Name' />
            <input type="text " className='input_Field' placeholder='Mobile' />
            <input type="text" className='input_Field' placeholder='Email' />
            <input type="text " className='input_Field' placeholder='Bank' />
            <input type="text" className='input_Field' placeholder='Ac no' />
            <input type="text" className='input_Field' placeholder='IFSC no.' />
            <input type="text" className='input_Field' placeholder='Password' />
          <button className='w-2/4 select-none p-2 rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500'>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueManagerSignup
