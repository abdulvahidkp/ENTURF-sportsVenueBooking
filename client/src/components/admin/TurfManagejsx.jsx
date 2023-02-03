import React from "react";

function TurfManagejsx() {
  return (
    <div class="p-4 sm:ml-64 bg-[#05445E] h-screen">
      <div class="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
            <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <p className="text-lg m-1 capitalize">Turf Manage</p>
              <tr className="border border-[#189AB4]">
                <th scope="col" class="px-6 py-3">
                  Turf name
                </th>
                <th scope="col" class="px-6 py-3">
                  location
                </th>
                <th scope="col" class="px-6 py-3">
                  mobile
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  anfield turf
                </th>
                <td class="px-6 py-4">Taliparamba,Kannur</td>
                <td class="px-6 py-4">9999999999</td>
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
                  CARRIEBEANS
                </th>
                <td class="px-6 py-4">Allamkulam,Taliparamba</td>
                <td class="px-6 py-4">9993894324</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Rejected
                  </a>
                </td>
              </tr>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  Adhil
                </th>
                <td class="px-6 py-4">9993894324</td>
                <td class="px-6 py-4">adhil@gmail.com</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Allowed
                  </a>
                </td>
              </tr>
              <tr class="bg-[#189AB4] border-b border-[#05445E]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                  Arun
                </th>
                <td class="px-6 py-4">9993894324</td>
                <td class="px-6 py-4">arun@gmail.com</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-[#75E6DA] hover:underline"
                  >
                    Allowed
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

export default TurfManagejsx;
