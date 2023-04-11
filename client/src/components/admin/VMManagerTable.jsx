import React, { useState } from "react";
import VMManagerModal from "./VMManagerModal";
import { ImageModal } from "./ImageModal";

function VMManagerTable({ vm, handleImageClick, showTurfs, handleStatus, selectedImage, handleClose, turfs,handleBlock}) {

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
