import React from 'react'

function VMProfileEdit() {
  return (
    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className='bg-gradient-to-r from-emerald-50 to-emerald-100 py-32 sm:px-16 lg:px-32 xl:px-72 '> 
      <div className='container'>
        <div className='w-full h-45 bg-white shadow-md rounded-md p-8 space-y-6 '>
          <div className='space-y-1'>
            <h1 className='font-semibold'> <span className='text-3xl font-roboto font-bold'>Edit Profile</span></h1>
          </div>
          <div className='grid sm:grid-cols-2 gap-2'>
            <input type="text " className='input_Field' placeholder='First Name' value='Abdul' />
            <input type="text" className='input_Field' placeholder='Last Name' value='Vahid' />
            <input type="text " className='input_Field' placeholder='Mobile' value='999999999' />
            <input type="text" className='input_Field' placeholder='Email' value='abdulva@gmail.com' />
            <input type="text " className='input_Field' placeholder='Bank' value='IDBI' />
            <input type="text" className='input_Field' placeholder='Ac no' value='1001 0024 0154 0212' />
            <input type="text" className='input_Field' placeholder='IFSC no.' value='FDRL01290' />

          </div>
          <button className='w-1/4  select-none p-1 rounded-full text-white  font-roboto  h-16 font-semibold bg-green-400/70 hover:bg-green-500'>Save Changes</button>
        </div>
      </div>
    </div>
        </div>
      </div>
  )
}

export default VMProfileEdit
