import React, { useState } from "react";
import turfImage from "../../assets/turfImage.jpeg";

function VMManagejsx() {
  const [turfs1, showTurfs1] = useState(false);
  const [turfs2, showTurfs2] = useState(false);
  const [turfs3, showTurfs3] = useState(false);



  return (
    <div className="p-4 relative sm:ml-64 bg-[#05445E] h-screen">
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
            <thead className="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <p className="text-lg m-1 capitalize">Venue Managers</p>
              <tr className="border border-[#189AB4]">
                <th scope="col" className="px-6 py-3">
                  Manager
                </th>
                <th scope="col" className="px-6 py-3">
                  mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  Turfs
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  Nihad
                </th>
                <td className="px-6 py-4">9993894324</td>
                <td className="px-6 py-4">nihad@gmail.com</td>
                <td
                  className="px-6 py-4 hover:underline cursor-pointer"
                  onClick={() => showTurfs1(!turfs1)}
                >
                  02
                  <div
                    id="1"
                    class={`z-20 ${
                      turfs1 && "hidden"
                    } absolute w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton`}
                  >
                    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                      All Turfs
                    </div>
                    <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
                          <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
                            <tr className="border border-[#189AB4]">
                              <th scope="col" class="px-6 py-3">
                                VENUE IMAGE
                              </th>
                              <th scope="col" class="px-6 py-3">
                                VENUE NAME
                              </th>
                              <th scope="col" class="px-6 py-3">
                                SPORTS & FACILITIES
                              </th>
                              <th scope="col" class="px-6 py-3">
                                STATUS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-[#189AB4] border-b border-[#05445E]">
                              <th
                                scope="row"
                                class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                              >
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">CARRIEBEANS TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#75E6DA] hover:underline"
                  >
                    Block
                  </a>
                </td>
              </tr>
              <tr className="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  Nihad
                </th>
                <td className="px-6 py-4">9993894324</td>
                <td className="px-6 py-4">nihad@gmail.com</td>
                <td
                  className="px-6 py-4 hover:underline cursor-pointer"
                  onClick={() => showTurfs2(!turfs2)}
                >
                  02
                  <div
                    id="2"
                    class={`z-20 ${
                      turfs2 && "hidden"
                    } absolute w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton`}
                  >
                    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                      All Turfs
                    </div>
                    <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
                          <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
                            <tr className="border border-[#189AB4]">
                              <th scope="col" class="px-6 py-3">
                                VENUE IMAGE
                              </th>
                              <th scope="col" class="px-6 py-3">
                                VENUE NAME
                              </th>
                              <th scope="col" class="px-6 py-3">
                                SPORTS & FACILITIES
                              </th>
                              <th scope="col" class="px-6 py-3">
                                STATUS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-[#189AB4] border-b border-[#05445E]">
                              <th
                                scope="row"
                                class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                              >
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#75E6DA] hover:underline"
                  >
                    Block
                  </a>
                </td>
              </tr><tr className="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  Nihad
                </th>
                <td className="px-6 py-4">9993894324</td>
                <td className="px-6 py-4">nihad@gmail.com</td>
                <td
                  className="px-6 py-4 hover:underline cursor-pointer"
                  onClick={() => showTurfs3(!turfs3)}
                >
                  02
                  <div
                    id="3"
                    class={`z-20 ${
                      turfs3 && "hidden"
                    } absolute w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton`}
                  >
                    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                      All Turfs
                    </div>
                    <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
                          <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
                            <tr className="border border-[#189AB4]">
                              <th scope="col" class="px-6 py-3">
                                VENUE IMAGE
                              </th>
                              <th scope="col" class="px-6 py-3">
                                VENUE NAME
                              </th>
                              <th scope="col" class="px-6 py-3">
                                SPORTS & FACILITIES
                              </th>
                              <th scope="col" class="px-6 py-3">
                                STATUS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-[#189AB4] border-b border-[#05445E]">
                              <th
                                scope="row"
                                class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                              >
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                                <img src={turfImage} alt="" />
                              </th>
                              <td class="px-6 py-4">ANFIELD TURF</td>
                              <td class="px-6 py-4">
                                football(5v5,6v6,7v7),cricket(5v5,11v11)
                              </td>
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
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-[#75E6DA] hover:underline"
                  >
                    Block
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

export default VMManagejsx;
