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
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Sliver
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Google Pixel Phone
                            </th>
                            <td class="px-6 py-4">
                                Gray
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Phone
                            </td>
                            <td class="px-6 py-4">
                                $799
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                Apple Watch 5
                            </th>
                            <td class="px-6 py-4">
                                Red
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                Wearables
                            </td>
                            <td class="px-6 py-4">
                                $999
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VMDashboardjsx;
