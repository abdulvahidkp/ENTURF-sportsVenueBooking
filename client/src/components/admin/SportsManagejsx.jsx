import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import swal from 'sweetalert'
import toast,{ Toaster } from "react-hot-toast";
import {
  Cricket,
  Football,
  Volleyball,
  Badminton,
  Tennis,
} from "../../assets/Sports";

const SPORTS_GET = "/admin/sports";
const SPORTS_STATUS = "/admin/sports";

function SportsManagejsx() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    try {
      axios.get(SPORTS_GET).then(({ data }) => {
        setSports(data.sportsDatas);
      });
    } catch (error) {
      console.log(error)
    }
  }, []);

  const handleAction = (_id, facility, status, sportName) => {
    const facilityData = {
      _id,
      facility,
      status,
    };
    swal({
      title: `Do you want to ${status?`enable`:`disable`}`,
      text: `Are you sure you want to ${status?`enable ${facility} facility of ${sportName}?`:`disable ${facility} facility of ${sportName}?`}`,
      icon: 'warning',
      buttons: ['Cancel', `${status?"Enable":"Disable"}`],
      dangerMode: status?false:true,
    })
    .then((confirm)=>{
      if(confirm){
        try {
          axios.put(SPORTS_STATUS, facilityData).then((response) => {
            setSports(
              sports.map((sport) =>
                sport._id === _id
                  ? {
                      ...sport,
                      facilityDetails: sport.facilityDetails.map((perFacility) =>
                        perFacility.facility === facility
                          ? { ...perFacility, status: status }
                          : perFacility
                      ),
                    }
                  : sport
              )
            );
            toast.success(`${sportName+','+facility} ${status?"Enabled":"Disabled"} successfully!`);
          });
        } catch (error) {
          console.log(error.message)
        }
      }
    })
  };

  return (
    <div class="p-4 sm:ml-64 bg-[#05445E] ">
      <Toaster position="top-right" />
      <div class="p-4 border-gray-200 rounded-lg dark:border-gray-700 mt-14">
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
                {sports.map((sport) => (
                  <tr class="bg-[#189AB4] border-b border-[#05445E]">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                    >
                      {sport.sport === "football" ? (
                        <Football />
                      ) : sport.sport === "cricket" ? (
                        <Cricket />
                      ) : sport.sport === "volley ball" ? (
                        <Volleyball />
                      ) : sport.sport === "badminton" ? (
                        <Badminton />
                      ) : sport.sport === "tennis" ? (
                        <Tennis />
                      ) : (
                        ""
                      )}
                    </th>
                    <td class="px-6 py-4 uppercase">{sport.sport}</td>
                    <td class="px-6 py-4">
                      <ul class="w-48 text-sm font-medium text-gray-900 bg-[#05445E] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {sport.facilityDetails.map((facility) => (
                          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center pl-3">
                              <button
                                className={`${
                                  facility.status
                                    ? "bg-red-600 hover:bg-red-700"
                                    : "bg-green-600 hover:bg-green-700"
                                } text-white p-1 rounded`}
                                onClick={() =>
                                  handleAction(
                                    sport._id,
                                    facility.facility,
                                    !facility.status,
                                    sport.sport
                                  )
                                }
                              >
                                {facility.status ? "disable" : "enable"}
                              </button>
                              <label
                                for="vue-checkbox"
                                class="w-full py-3 ml-2 text-sm font-medium text-[#D4F1F4] dark:text-gray-300"
                              >
                                {facility.facility}
                                <span className="ml-2">({facility.count})</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td class="px-6 py-4">
                      {sport.facilityDetails.reduce(
                        (acc, curr) => acc + curr.count,
                        0
                      )}
                    </td>
                  </tr>
                ))}
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
