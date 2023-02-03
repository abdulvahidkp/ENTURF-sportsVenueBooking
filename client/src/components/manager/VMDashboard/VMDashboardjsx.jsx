import React from 'react'

function VMDashboardjsx() {
    
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
                <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL ONLINE BOOKING</p>
                <p className='text-4xl text-gray-700 font-bold'>0</p>
            </div>
            <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
                <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL OFFLINE BOOKING</p>
                <p className='text-4xl text-gray-700 font-bold'>0</p>
            </div>
            <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
                <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">TOTAL ONLINE COLLECTION</p>
                <p className='text-4xl text-gray-700 font-bold'>0</p>
            </div>
            <div className="flex flex-col p-2 items-center shadow-md justify-center space-y-2 h-auto rounded bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gray-800">
                <p className="text-sm font-roboto text-gray-500 dark:text-gray-500">UPCOMING BOOKING</p>
                <p className='text-4xl text-gray-700 font-bold'>0</p>
            </div>
        </div>
        <div className="flex-col sm:flex-row h-auto justify-center md:justify-start mb-4 rounded border bg-gray-50 dark:bg-gray-800">
            <div className='p-2'>
              <h1 className='text-md bg-gradient-to-r from-gray-100 to-gray-300 p-3 border'>QUICK BOOKING</h1>
            </div>
            <div>
            <div className=' rounded-lg'>
                <div className='flex px-4 py-5  space-x-9 '>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>ANFIELD TURF </h1>
                      <p className='text-[#504a4ad0]'><span>3</span> facilities/session available</p>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>₹650</h1>
                          <p className='text-sm text-[#504a4ad0]'>onwards</p>
                        </div>
                        <div>
                          <button className='bg-emerald-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border rounded-md'>
                    <div className='p-2'>
                      <h1 className='font-semibold text-xl text-[#504a4ad0] '>MARCANA TURF</h1>
                      <p className='text-[#504a4ad0]'><span>3</span> facilities/session available</p>
                    </div>
                    <div className='pt-3'>
                      <div className='border p-1 flex justify-between items-center bg-[#F3F5F9]'>
                        <div>
                          <h1 className='text-bold text-xl'>₹650</h1>
                          <p className='text-sm text-[#504a4ad0]'>onwards</p>
                        </div>
                        <div>
                          <button className='bg-emerald-400/70 text-white px-2 rounded'>BOOK</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-4 mb-4">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <p className='my-2'>LATEST BOOKING</p>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                VENUE NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                SPORTS
                            </th>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                FACILITY
                            </th>
                            <th scope="col" class="px-6 py-3">
                                TIME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Anfield turf
                            </th>
                            <td class="px-6 py-4">
                                cricket
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                5v5
                            </td>
                            <td class="px-6 py-4">
                                11:00pm - 12:00pm
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Anfield turf
                            </th>
                            <td class="px-6 py-4">
                                football
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                7v7
                            </td>
                            <td class="px-6 py-4">
                                10:00pm - 11:00pm
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Carriebeans
                            </th>
                            <td class="px-6 py-4">
                                football
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                5v5
                            </td>
                            <td class="px-6 py-4">
                                06:00am - 07:00am
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div> */}
            
        </div>
      </div>
    </div>
  )
}

export default VMDashboardjsx;
