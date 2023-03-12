import React, { useState } from "react";
import VMManagerModal from "./VMManagerModal";
import { ImageModal } from "./ImageModal";

function VMManagerTable({ vm, handleImageClick, showTurfs, turfImage, handleStatus, selectedImage, handleClose, turfs,handleBlock}) {

  const [rejectPop, setRejectPop] = useState(false);
  
  return (
    <>
      <tbody>
        <tr className="bg-[#189AB4] border-b border-[#05445E]">
          <th scope="row" className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]">
            {vm.name}
          </th>
          <td className="px-6 py-4">{vm.mobile}</td>
          <td className="px-6 py-4" onClick={() => handleImageClick(vm.image)}>
            <img src={vm.image} alt="" className="w-20" />
          </td>
          <td className="px-6 py-4 hover:underline cursor-pointer" onClick={() => showTurfs(!turfs)}>
            02
            <div
              id="1"
              class={`z-20 ${
                turfs ? "" : "hidden"
              } absolute w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton`}
            >
              <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">All Turfs</div>
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
                        <th scope="row" class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]">
                          <img src={turfImage} alt="" />
                        </th>
                        <td class="px-6 py-4">ANFIELD TURF</td>
                        <td class="px-6 py-4">football(5v5,6v6,7v7),cricket(5v5,11v11)</td>
                        <td class="px-6 py-4">
                          <a href="#" class="font-medium text-[#75E6DA] hover:underline">
                            Pending
                          </a>
                        </td>
                      </tr>
                      <tr class="bg-[#189AB4] border-b border-[#05445E]">
                        <th scope="row" class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]">
                          <img src={turfImage} alt="" />
                        </th>
                        <td class="px-6 py-4">CARRIEBEANS TURF</td>
                        <td class="px-6 py-4">football(5v5,6v6,7v7),cricket(5v5,11v11)</td>
                        <td class="px-6 py-4">
                          <a href="#" class="font-medium text-[#75E6DA] hover:underline">
                            Enable
                          </a>
                        </td>
                      </tr>
                      <tr class="bg-[#189AB4] border-b border-[#05445E]">
                        <th scope="row" class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]">
                          <img src={turfImage} alt="" />
                        </th>
                        <td class="px-6 py-4">ANFIELD TURF</td>
                        <td class="px-6 py-4">football(5v5,6v6,7v7),cricket(5v5,11v11)</td>
                        <td class="px-6 py-4">
                          <a href="#" class="font-medium text-[#75E6DA] hover:underline">
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
            {vm.status === 'pending' ? (
              <div className="">
                <a className="font-medium bg-green-600 p-2 cursor-pointer" onClick={() => handleStatus(vm._id, "approved")}>
                  Approve
                </a>
                <a className="ml-1 font-medium bg-red-600 p-2 cursor-pointer" onClick={() => { 

                  setRejectPop(true)}}>
                  Reject
                </a>
                { <VMManagerModal vmId={vm._id} handleStatus={handleStatus} rejectPop={rejectPop} setRejectPop={setRejectPop} /> }
              </div>
            ) :
              vm.status === 'rejected' ? 
              <p>waiting for update</p>
              :
              (
                <a href="#" onClick={() => handleBlock(vm._id, vm.blockStatus)} className={`font-medium ${vm.blockStatus ? "bg-green-600 " : "bg-red-600"} p-2  `}>
                  {vm.blockStatus ? "Unblock" : "Block"}
                </a>
              )
            }
          </td>
        </tr>
      </tbody>
      {selectedImage && <ImageModal imageUrl={selectedImage}  onClose={handleClose} />}
    </>
  );
}

export default VMManagerTable;
