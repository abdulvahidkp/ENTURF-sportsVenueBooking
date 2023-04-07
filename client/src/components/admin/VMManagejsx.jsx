import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import turfImage from "../../assets/turfImage.jpeg";
import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";
import VMManagerTable from "./VMManagerTable";

const GET_VMS = "/admin/vm";
const CHANGE_BLOCK = "/admin/vm/blockStatus";

function VMManagejsx() {
  const [vms, setVms] = useState([]); //
  const [filteredData, setFilteredData] = useState([]);
  const [turfs, showTurfs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const items = ["All", "Approved", "Pending","Rejected"];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState(false);
 

  useEffect(() => {
    axios.get(GET_VMS).then(({ data }) => {
      setVms(data.vmsDatas);
    });
  }, []);

  const handleBlock = (id, status) => {
    swal({
      title: `${status ? "Unblock Manager?" : "Block Manager?"}`,
      text: `Are you sure you want to ${status ? "Unblock" : "Block"} this Manager?`,
      icon: "warning",
      buttons: ["Cancel", `${status ? "Unblock" : "Block"}`],
      dangerMode: status ? false : true,
    }).then((confirm) => {
      if (confirm) {
        axios
          .put(CHANGE_BLOCK + `/${id}`)
          .then((response) => {
            setVms(vms.map((vm) => (vm._id === id ? { ...vm, blockStatus: !vm.blockStatus } : vm)));
            toast.success(`User ${status ? "unblocked" : "blocked"} successfully!`);
          })
          .catch((err) => {
            console.log(err.message);
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

  const handleStatus = async (vmId, status, reason = "") => {
    let adminToken = localStorage.getItem("admin");
    try {
      let { data } = await axios.put(
        "/admin/vm/status",
        { vmId, status, reason },
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setVms(vms.map((vm) => (vm._id === vmId ? { ...vm, status } : vm)));
  };

  useEffect(() => {
    setFilteredData(selectedItem === "All" ? vms : selectedItem === "Approved" ? vms.filter((vm) => vm.status === "approved") : selectedItem === 'Rejected' ? vms.filter((vm) => vm.status === 'rejected ') : vms.filter((vm) => vm.status === "pending"));
  }, [selectedItem, vms]);

  return (
    <div className="p-4 sm:ml-64 bg-[#05445E] min-h-screen h-auto">
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
                <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {items.map((item) => (
                  <button
                    key={item}
                    className={`${item === selectedItem ? "bg-gray-100 text-gray-900" : "text-gray-700"} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full  text-left text-[#D4F1F4] dark:text-blue-100">
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
            {filteredData.length ? (
              filteredData.map((data, key) => (
                <VMManagerTable
                  vm={data}
                  key={key}
                  handleImageClick={handleImageClick}
                  showTurfs={showTurfs}
                  turfImage={turfImage}
                  handleStatus={handleStatus}
                  selectedImage={selectedImage}
                  handleClose={handleClose}
                  turfs={turfs}
                  handleBlock={handleBlock}
                />
              ))
            ) : (
              <p>No datas available</p>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default VMManagejsx;
