import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Cricket, Football, Volleyball, Badminton } from "../../assets/Sports";

const SPORTS_GET = "/admin/sports";

function SportsManagejsx() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get(SPORTS_GET).then(({ data }) => {
      console.log(data.sportsDatas);
      setSports(data.sportsDatas);
    });
  }, []);

  return (
    <div class="p-4 sm:ml-64 bg-[#05445E] ">
      <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="flex items-center justify-between">
          <p className="text-lg m-1 capitalize text-[#D4F1F4]">SPORTS</p>
          {/* <button className="bg-[#189AB4] text-[#D4F1F4] py-1 px-3 rounded-lg mb-1 hover:bg-[#28a2bb]">
            Edit
          </button> */}
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
                  Facilities ( count )
                </th>
                <th scope="col" class="px-6 py-3">
                  total
                </th>
              </tr>
            </thead>
            {sports.length ? (
              <tbody>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    <Football />
                  </th>
                  <td class="px-6 py-4 uppercase">{sports[0].sport}</td>
                  <td class="px-6 py-4">
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[0].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "5v5",
                                sports[0].facilityDetails[0].status
                              )
                            }
                          >
                            {sports[0].facilityDetails[0].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[0].facilityDetails[0].facility}
                            <span className="ml-2">
                              ({sports[0].facilityDetails[0].count})
                            </span>
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[0].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "7v7",
                                sports[0].facilityDetails[1].status
                              )
                            }
                          >
                            {sports[0].facilityDetails[1].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[0].facilityDetails[1].facility}
                            <span className="ml-2">
                              ({sports[0].facilityDetails[1].count})
                            </span>
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[0].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "11v11",
                                sports[0].facilityDetails[2].status
                              )
                            }
                          >
                            {sports[0].facilityDetails[2].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[0].facilityDetails[2].facility}
                            <span className="ml-2">
                              ({sports[0].facilityDetails[2].count})
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td class="px-6 py-4">  </td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    <Cricket />
                  </th>
                  <td class="px-6 py-4 uppercase">{sports[1].sport}</td>
                  <td class="px-6 py-4">
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[0].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "5v5",
                                sports[1].facilityDetails[0].status
                              )
                            }
                          >
                            {sports[1].facilityDetails[0].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[1].facilityDetails[0].facility}
                            <span className="ml-2">
                              ({sports[1].facilityDetails[0].count})
                            </span>
                          </label>
                        </div>
                      </li>
                      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[0].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "11v11",
                                sports[1].facilityDetails[1].status
                              )
                            }
                          >
                            {sports[1].facilityDetails[1].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[1].facilityDetails[1].facility}
                            <span className="ml-2">
                              ({sports[1].facilityDetails[1].count})
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td class="px-6 py-4">17</td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    <Volleyball />
                  </th>
                  <td class="px-6 py-4 uppercase">
                    {sports[2].sport}
                  </td>
                  <td class="px-6 py-4">
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[2].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "6v6",
                                sports[2].facilityDetails[0].status
                              )
                            }
                          >
                            {sports[2].facilityDetails[0].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[2].facilityDetails[0].facility}
                            <span className="ml-2">
                              ({sports[2].facilityDetails[0].count})
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td class="px-6 py-4">15</td>
                </tr>
                <tr class="bg-[#189AB4] border-b border-[#05445E]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                  >
                    <Badminton />
                  </th>
                  <td class="px-6 py-4 uppercase">
                    {sports[3].sport}
                  </td>
                  <td class="px-6 py-4">
                    <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center pl-3">
                          <button
                            className={`${
                              sports[3].facilityDetails[0].status
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white p-1 rounded`}
                            onClick={() =>
                              handleAction(
                                _id,
                                "2v2",
                                sports[3].facilityDetails[0].status
                              )
                            }
                          >
                            {sports[3].facilityDetails[0].status
                              ? "disable"
                              : "enable"}
                          </button>
                          <label
                            for="vue-checkbox"
                            class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                          >
                            {sports[3].facilityDetails[0].facility}
                            <span className="ml-2">
                              ({sports[3].facilityDetails[0].count})
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td class="px-6 py-4">3</td>
                </tr>
              </tbody>
            ) : (
              <h1 className="p-4">no sports available</h1>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default SportsManagejsx;
