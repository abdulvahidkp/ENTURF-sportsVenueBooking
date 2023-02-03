import React,{useState} from "react";

function VMEditVenuejsx() {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4  border-dashed rounded-lg dark:border-gray-700 mt-14">
        <h1 className="text-gray-700 text-2xl font-light font-roboto drop-shadow-sm shadow-black ">
          EDIT VENUE
        </h1>
        <div class="grid grid-cols-2 gap-4 mb-4 mt-8">
          <div>
            <div class="relative">
              <input
                type="text"
                id="venueName"
                name="venueName"
                class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                value='ANFIELD TURF'
              />
              <label
                for="venueName"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Venue Name
              </label>
            </div>
            <div className="grid grid-cols-2 space-x-2 py-3 ">
              <div class="relative">
                <input
                  type="number"
                  id="venueMobile"
                  name="venueMobile"
                  class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value='999999999'
                />
                <label
                  for="venueMobile"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Venue Mobile
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="venueLocation"
                  class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value="Kannur,Taliparamba,Kerala"
                />
                <label
                  for="venueLocation"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Venue Location
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 space-x-2 ">
              <div class="relative">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a District</option>
                  <option value="US" selected>United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="relative -mt-2">
                <label htmlFor="docVenue " className="text-xs  text-gray-500">
                  Venue Document
                </label>
                <input
                  type="file"
                  id="docVenue"
                  className="file-input text-gray-400  file-input-ghost w-full max-w-xs"
                />
              </div>
            </div>
            <div className="grid space-x-2 ">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 mt-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description about Venue..."
                value="it's a nice venue"
              ></textarea>
            </div>
          </div>
          <div>
            <div className="relative block -mt-2">
              <div>
                <label htmlFor="docVenue " className="text-xs  text-gray-500">
                  Venue Photos
                </label>
              </div>
              <input
                type="file"
                id="docVenue"
                className="file-input text-gray-400  file-input-ghost w-full max-w-xs"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div>
              <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div>
              <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center rounded bg-gray-50 p-3 dark:bg-gray-800">
            <div className="border rounded-md">
              <div className="p-2">
                <h1 className="font-semibold text-xl text-[#504a4ad0] ">
                  Cricket (court-1)
                </h1>
                <p className="text-[#504a4ad0]">
                  <span>12 schedules</span>
                </p>
              </div>
              <div className="pt-3">
                <div className="border p-1 gap-2 flex justify-between items-center bg-[#F3F5F9]">
                  <div>
                    <h1 className="text-md">₹650</h1>
                    <p className="text-sm text-[#504a4ad0]">onwards</p>
                  </div>
                  <div className="gap-2 flex">
                    <button className="bg-green-400/70 text-white px-2 rounded">
                      Edit
                    </button>
                    <button className="bg-red-400 text-white px-2 rounded">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3 p-3 rounded bg-gray-50 h-auto dark:bg-gray-800">
            <div>
              <h3 class="mb-2 text-gray-900 dark:text-white">sports</h3>
              <ul class="items-center flex-col w-full text-sm font-medium text-gray-900 bg-[#F3F5F9] border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="horizontal-list-radio-license"
                      class="w-full py-3 ml-2 text-sm font-normal text-gray-700 dark:text-gray-300"
                    >
                      Football
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value=""
                      name="list-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      disabled
                    />
                    <label
                      for="horizontal-list-radio-id"
                      class="w-full py-3 ml-2 text-sm font-normal text-gray-700 dark:text-gray-300"
                    >
                      Cricket
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-2  text-gray-900 dark:text-white">Facilities</h3>
              <ul class="w-48 text-sm font-medium text-gray-900 bg-[#F3F5F9] border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox"
                      class="w-full py-3 ml-2 text-sm font-normal text-gray-700 dark:text-gray-300"
                    >
                      7v7
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox"
                      class="w-full py-3 ml-2 text-sm font-normal text-gray-700 dark:text-gray-300"
                    >
                      5v5
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <label htmlFor="start-time">Start Time:</label>
                <input
                  type="time"
                  id="start-time"
                  value={startTime}
                  onChange={handleStartTimeChange}
                />

                <label htmlFor="end-time">End Time:</label>
                <input
                  type="time"
                  id="end-time"
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
              </div>
            </div>
            <div className="">
              <button className="bg-blue-400 text-white px-2  rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VMEditVenuejsx;
