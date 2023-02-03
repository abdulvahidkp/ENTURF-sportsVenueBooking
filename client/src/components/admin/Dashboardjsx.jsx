import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);


function Dashboardjsx() {
  const data = {
    labels: ['3v3',"5v5","7v7","11v11"],
    datasets:[
      {
        data: [3,10,5,3],
        backgroundColor: ['#05445E','#189AB4','#75E6DA',"#D4F1F4"]
      }
    ]
  };

  const options = {
    
  }

  const footballData = [
    { x: "5v5", y: 4 },
    { x: "7v7", y: 56 },
    { x: "11v11", y: 89 },
  ];

  return (
    <div class="p-4 sm:ml-64 bg-[#05445E] h-screen">
      <div class="p-4 mt-12">
        <div class="grid grid-cols-5 gap-8 mb-4">
          <div class="flex items-center justify-between px-6 h-24 rounded bg-[#189AB4] dark:bg-gray-800">
            <div className="flex items-center">
              <svg
                class="absolute w-12 h-12 text-[#75E6DA] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-[#D4F1F4]">Total Users</p>
              <p className="font-bold text-[#D4F1F4] text-xl">0</p>
            </div>
          </div>
          <div class="flex items-center justify-between px-6 h-24 rounded bg-[#189AB4] dark:bg-gray-800">
            <div className="flex items-center">
              <svg
                class="absolute w-12 h-12 text-[#75E6DA] "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-[#D4F1F4]">Total Managers</p>
              <p className="font-bold text-[#D4F1F4] text-xl">0</p>
            </div>
          </div>
          <div class="flex items-center justify-between px-6 h-24 rounded bg-[#189AB4] dark:bg-gray-800">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-12 h-12 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <div>
              <p className="text-[#D4F1F4]">Total Venues</p>
              <p className="font-bold text-[#D4F1F4] text-xl">0</p>
            </div>
          </div>
          <div class="flex items-center justify-between px-6 h-24 rounded bg-[#189AB4] dark:bg-gray-800">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-12 h-12 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-[#D4F1F4]">Total Bookings</p>
              <p className="font-bold text-[#D4F1F4] text-xl">0</p>
            </div>
          </div>
          <div class="flex items-center justify-between px-6 h-24 rounded bg-[#189AB4] dark:bg-gray-800">
            <div className="flex items-center">
              <svg
                class="w-12 h-12 dark:text-white text-[#75E6DA]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-[#D4F1F4]">Total Facilities</p>
              <p className="font-bold text-[#D4F1F4] text-xl">0</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 mt-6 gap-4 mb-4">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
              <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
                <p className="text-lg m-1 capitalize">New Venue Requests</p>
                <tr className="border border-[#189AB4]">
                  <th scope="col" class="px-6 py-3">
                    Venue name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    place
                  </th>
                  <th scope="col" class="px-6 py-3">
                    sports
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Manager
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    Anfield Turf
                  </th>
                  <td class="px-6 py-4">Taliparamba</td>
                  <td class="px-6 py-4">Football</td>
                  <td class="px-6 py-4">Ali</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-[#75E6DA] hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    Anfield Turf
                  </th>
                  <td class="px-6 py-4">Taliparamba</td>
                  <td class="px-6 py-4">Football</td>
                  <td class="px-6 py-4">Ali</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-[#75E6DA] hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    Anfield Turf
                  </th>
                  <td class="px-6 py-4">Taliparamba</td>
                  <td class="px-6 py-4">Football</td>
                  <td class="px-6 py-4">Ali</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-[#75E6DA] hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    Anfield Turf
                  </th>
                  <td class="px-6 py-4">Taliparamba</td>
                  <td class="px-6 py-4">Football</td>
                  <td class="px-6 py-4">Ali</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-[#75E6DA] hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    Anfield Turf
                  </th>
                  <td class="px-6 py-4">Taliparamba</td>
                  <td class="px-6 py-4">Football</td>
                  <td class="px-6 py-4">Ali</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-[#75E6DA] hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex justify-center rounded  dark:bg-gray-800">
            <div className="p-16 w-50 ">
              <Pie 
               data={data}
               options = {options}
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardjsx;
