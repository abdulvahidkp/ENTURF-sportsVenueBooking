import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import turfImage from "../../assets/turfImage.jpeg";
import toast,{ Toaster }  from 'react-hot-toast';
import swal from "sweetalert";

const GET_VMS = "/admin/vm";
const CHANGE_BLOCK = "/admin/vm/blockStatus";

function VMManagejsx() {
  const [vms, setVms] = useState([]);
  const [turfs, showTurfs] = useState(false);

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
      dangerMode: status?false:true,
    }).then((confirm) => {
      if (confirm) {
        axios.put(CHANGE_BLOCK + `/${id}`).then((response) => {
          setVms(
            vms.map((vm) =>
              vm._id === id ? { ...vm, blockStatus: !vm.blockStatus } : vm
            )
          );
        });
      } else {
        // Do nothing
      }
    });
  };

  return (
    <div className="p-4 relative sm:ml-64 bg-[#05445E] h-screen">
      <Toaster position="top-right" />
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full table-fixed text-left text-[#D4F1F4] dark:text-blue-100">
            <thead className="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <p className="text-lg m-1 capitalize">Manage Venue Managers</p>
              <tr className="border border-[#189AB4]">
                <th scope="col" className="px-6 py-3">
                  Manager
                </th>
                <th scope="col" className="px-6 py-3">
                  mobile
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
              {vms.length ? (
                vms.map((vm) => (
                  <tr className="bg-[#189AB4] border-b border-[#05445E]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                    >
                      {vm.name}
                    </th>
                    <td className="px-6 py-4">{vm.mobile}</td>
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
                      <a
                        href="#"
                        onClick={() => handleBlock(vm._id)}
                        className={`font-medium ${
                          vm.blockStatus ? "bg-green-600 " : "bg-red-600"
                        } p-2  `}
                      >
                        {vm.blockStatus ? "Unblock" : "Block"}
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <div className=" p-4">No users available</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VMManagejsx;
