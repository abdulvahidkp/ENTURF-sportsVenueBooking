import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import TurfDetailsModal from "./TurfDetailsModal";

function TurfManagejsx() {
  const [turfs, setTurfs] = useState([]);
  const items = ["All", "Approved", "Pending"];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [modal,setModal] = useState(false)
  const [indexNo,setIndexNo] = useState(null)

  useEffect(() => {
    axios
      .get("/admin/turf")
      .then(({ data }) => {
        setTurfs(data.response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(()=>{
    setFilteredData(selectedItem === 'All'? turfs : selectedItem === 'Approved' ? turfs.filter((turf)=>turf.approved===true) : turfs.filter((turf)=>turf.approved===false))
  },[selectedItem,turfs]);

  const handleApprove = async (id, status) => {
    const adminToken = localStorage.getItem("admin");
    swal({
      title: `Are you sure?`,
      text: `Are you sure you want to ${status} this turf?`,
      icon: "warning",
      buttons: ["Cancel", `${status === "approve" ? "Approve" : "Decline"}`],
      dangerMode: status === "approve" ? false : true,
    }).then(async (isConfirm) => {
      if (isConfirm) {
        if (status === "approve") {
          try {
            const { data } = await axios.put(
              `/admin/turf/approve`,
              JSON.stringify({ id }),
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${adminToken}`,
                },
                withCredentials: true,
              }
            );
          } catch (error) {
            console.log(error.message);
          }
          setTurfs(
            turfs.map((turf) =>
              turf._id === id ? { ...turf, approved: true } : turf
            )
          );
        } else {
          axios
            .delete(`/admin/turf/${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${adminToken}`,
              },
              withCredentials: true,
            })
            .then(({ data }) => {
              setTurfs(turfs.filter((turf) => turf._id !== id));
            })
            .catch((error) => console.log(error.message));
        }
      }
    });
  };

  const handleBlock = (id, status) => {
    const adminToken = localStorage.getItem("admin");
    swal({
      title: `${status ? "Unblock turf?" : "Block turf?"}`,
      text: `Are you sure you want to ${
        status ? "Unblock" : "Block"
      } this turf?`,
      icon: "warning",
      buttons: ["Cancel", `${status ? "Unblock" : "Block"}`],
      dangerMode: status ? false : true,
    }).then((confirm) => {
      if (confirm) {
        // Perform block action
        axios
          .put("/admin/turf/block", JSON.stringify({ id }), {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${adminToken}`,
            },
            withCredentials: true,
          })
          .then((response) => {
            setTurfs(
              turfs.map((turf) =>
                turf._id === id ? { ...turf, isBlocked: !turf.isBlocked } : turf
              )
            );
            toast.success(
              `Turf ${status ? "unblocked" : "blocked"} successfully!`
            );
          });
      }
    });
  };

  return (
    <div className="p-4 sm:ml-64 bg-[#05445E] min-h-screen h-auto">
      <Toaster position="top-right" />
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="flex justify-between mb-3">
          <p className="text-lg m-1 capitalize text-white">Turf manage</p>

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
          <table className="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
            <thead className="text-xs m-1 text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <tr className="border border-[#189AB4]">
                <th scope="col" className="px-6 py-3">
                  Venue Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Manager Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Sport & Facility
                </th>
                <th scope="col" className="px-6 py-3">
                  Place
                </th>
                <th scope="col" className="px-6 py-3">
                  District
                </th>
                <th scope="col" className="px-6 py-3">
                  Slot Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {filteredData.length ? (
              <tbody>
                {filteredData.map((turf,index) => (
                  <tr className="bg-[#189AB4] border-b border-[#05445E]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                    >
                      {turf.venueName}
                    </th>
                    <td className="px-6 py-4">{turf.vmId.name}</td>
                    <td className="px-6 py-4">
                      {
                        turf.sportFacility.map(per=>(
                          <div key={per._id}>{per.sport}, {per.facility}</div>
                        ))
                      }
                    </td>
                    <td className="px-6 py-4">{turf.place}</td>
                    <td className="px-6 py-4">{turf.district}</td>
                    <td className="px-6 py-4">&#8377; {turf.actualPrice}</td>
                    <td className="px-6 py-4">
                      {!turf.approved ? (
                        <div className="">
                          <a
                            className="font-medium rounded hover:bg-green-700 duration-300 bg-green-600 p-2 cursor-pointer"
                            onClick={() => handleApprove(turf._id, "approve")}
                          >
                            Approve
                          </a>
                          <a
                            className="ml-1 rounded font-medium hover:bg-red-700 duration-300 bg-red-600 p-2 cursor-pointer"
                            onClick={() => handleApprove(turf._id, "decline")}
                          >
                            Decline
                          </a>
                        </div>
                      ) : (
                        <a
                          href="#"
                          onClick={() =>
                            handleBlock(turf._id, turf.isBlocked)
                          }
                          className={`font-medium rounded ${
                            turf.isBlocked
                              ? "bg-green-600 hover:bg-green-700 duration-300"
                              : "bg-red-600 hover:bg-red-700 duration-300"
                          } p-2  `}
                        >
                          {turf.isBlocked ? "Unblock" : "Block"}
                        </a>
                      )}
                    </td>
                    <td className="px-6 py-4 ">
                      <a onClick={()=>{
                        setIndexNo(index)
                        setModal(true)
                      }}
                        className="bg-[#05445E] hover:bg-[#05141a] rounded duration-300 p-2 cursor-pointer"
                      >
                        Know more
                      </a>
                        {modal && index === indexNo && <TurfDetailsModal turfs={turfs} modal={modal} id={turf._id} handleApprove={handleApprove} handleBlock={handleBlock} isBlocked={turf.isBlocked} approved={turf.approved} setModal={setModal} /> }
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <p className="text-white text-2xl">No turfs available</p>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TurfManagejsx;
