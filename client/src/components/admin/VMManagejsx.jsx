import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import turfImage from "../../assets/turfImage.jpeg";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import { ImageModal } from "./ImageModal";

const GET_VMS = "/admin/vm";
const CHANGE_BLOCK = "/admin/vm/blockStatus";

function VMManagejsx() {
  const [vms, setVms] = useState([]);
  const [turfs, showTurfs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const items = ["All", "Approved", "Pending"];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData,setFilteredData] = useState([])

  useEffect(() => {
    axios.get(GET_VMS).then(({ data }) => {
      setVms(data.vmsDatas);
      console.log(data.vmsDatas);
    });
  }, []);

  const handleBlock = (id, status) => {
    swal({
      title: `${status ? "Unblock Manager?" : "Block Manager?"}`,
      text: `Are you sure you want to ${
        status ? "Unblock" : "Block"
      } this Manager?`,
      icon: "warning",
      buttons: ["Cancel", `${status ? "Unblock" : "Block"}`],
      dangerMode: status ? false : true,
    }).then((confirm) => {
      if (confirm) {
        axios.put(CHANGE_BLOCK + `/${id}`).then((response) => {
          setVms(
            vms.map((vm) =>
              vm._id === id ? { ...vm, blockStatus: !vm.blockStatus } : vm
            )
          );
          toast.success(
            `User ${status ? "unblocked" : "blocked"} successfully!`
          );
        });
      } else {
        // Do nothing
      }
    });
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleApprove = (id,status)=>{
    if(status==='approve'){
      axios.put('/admin/vm/approve/'+id);
      setVms(vms.map(vm=>vm._id === id ? {...vm,approved:true}: vm ));
    } else {
      axios.delete('/admin/vm/'+id);
      setVms(vms.filter(vm=>vm._id !== id ));
    }
  }


  useEffect(()=>{
    setFilteredData(selectedItem === 'All'? vms : selectedItem === 'Approved' ? vms.filter((vm)=>vm.approved===true) : vms.filter((vm)=>vm.approved===false))
  },[selectedItem,vms])


  return (
    <div className="p-4 relative sm:ml-64 bg-[#05445E] h-screen">
      <Toaster position="top-right" />
      <div className="p-4  border-gray-200   rounded-lg dark:border-gray-700 mt-14">
        <div className="flex justify-between mb-3">
          <p className="text-lg m-1 capitalize text-white">Venue Managers</p>

          <div className="relative inline-block text-left">
            <div>
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedItem}
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {items.map((item) => (
                  <button
                    key={item}
                    className={`${
                      item === selectedItem
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => {
                      setSelectedItem(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full table-fixed text-left text-[#D4F1F4] dark:text-blue-100">
            <thead className="text-xs m-1 text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <tr className="border border-[#189AB4]">
                <th scope="col" className="px-6 py-3">
                  Manager
                </th>
                <th scope="col" className="px-6 py-3">
                  mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Document
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
              {filteredData.length ? (
                filteredData.map((vm) => (
                  <tr className="bg-[#189AB4] border-b border-[#05445E]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                    >
                      {vm.name}
                    </th>
                    <td className="px-6 py-4">{vm.mobile}</td>
                    <td
                      className="px-6 py-4"
                      onClick={() => handleImageClick(vm.image)}
                    >
                      <img src={vm.image} alt="" className="w-20" />
                    </td>
                    <td
                      className="px-6 py-4 hover:underline cursor-pointer"
                      onClick={() => showTurfs(!turfs)}
                    >
                      02
                      <div
                        id="1"
                        class={`z-20 ${
                          turfs ? "" : "hidden"
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
                      {!vm.approved ? (
                        <div className="">
                          <a
                            className="font-medium bg-green-600 p-2 cursor-pointer"
                            onClick={()=>handleApprove(vm._id,'approve')}
                          >
                            Approve
                          </a>
                          <a
                            className="ml-1 font-medium bg-red-600 p-2 cursor-pointer"
                            onClick={()=>handleApprove(vm._id,'decline')}
                          >
                            Decline
                          </a>
                        </div>
                      ) : (
                        <a
                          href="#"
                          onClick={() => handleBlock(vm._id, vm.blockStatus)}
                          className={`font-medium ${
                            vm.blockStatus ? "bg-green-600 " : "bg-red-600"
                          } p-2  `}
                        >
                          {vm.blockStatus ? "Unblock" : "Block"}
                        </a>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <div className=" p-4">No users available</div>
              )}
            </tbody>
          </table>
          {selectedImage && (
            <ImageModal imageUrl={selectedImage} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VMManagejsx;
