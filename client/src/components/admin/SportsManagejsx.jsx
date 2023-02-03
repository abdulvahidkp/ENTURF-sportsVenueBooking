import React from "react";
import { Cricket, Football, Volleyball, Badminton } from "../../assets/Sports";

function SportsManagejsx() {
  return (
    <div class="p-4 sm:ml-64 bg-[#05445E] ">
      <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="flex items-center justify-between">
          <p className="text-lg m-1 capitalize text-[#D4F1F4]">SPORTS</p>
          <button className="bg-[#189AB4] text-[#D4F1F4] py-1 px-3 rounded-lg mb-1 hover:bg-[#28a2bb]">
            Edit
          </button>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-h-screen">
          <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
            <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <tr className="border border-[#189AB4]">
                <th scope="col" class="px-6 py-3">
                  Logo
                </th>
                <th scope="col" class="px-6 py-3">
                  Sports
                </th>
                <th scope="col" class="px-6 py-3">
                  Facilities
                </th>
                <th scope="col" class="px-6 py-3">
                  total
                </th>
                <th scope="col" class="px-6 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  <Football />
                </th>
                <td class="px-6 py-4">Football</td>
                <td class="px-6 py-4">
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-[#D4F1F4] bg-gray-100 border-gray-300 rounded focus:ring-text-[#D4F1F4] a/rk:focus:ring-text-[#D4F1F4] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          3v3 (12)
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          5v5 (15)
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="angular-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="angular-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          7v7 (7)
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="laravel-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          11v11 (2)
                        </label>
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="px-6 py-4">36</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Disable
                  </a>
                </td>
              </tr>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  <Cricket />
                </th>
                <td class="px-6 py-4">Cricket</td>
                <td class="px-6 py-4">
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          5v5 (15)
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="laravel-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          11v11 (2)
                        </label>
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="px-6 py-4">17</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Disable
                  </a>
                </td>
              </tr>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  <Volleyball />
                </th>
                <td class="px-6 py-4">VolleyBall</td>
                <td class="px-6 py-4">
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input checked
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          6v6 (15)
                        </label>
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="px-6 py-4">15</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Enable
                  </a>
                </td>
              </tr>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  <Badminton />
                </th>
                <td class="px-6 py-4">Badminton</td>
                <td class="px-6 py-4">
                  <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                   
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input checked
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 a/rk:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                        >
                          2v2 (3)
                        </label>
                      </div>
                    </li>
                  </ul>
                </td>
                <td class="px-6 py-4">3</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Enable
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SportsManagejsx;
