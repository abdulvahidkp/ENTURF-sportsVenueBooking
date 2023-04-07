import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl, useControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "../../../api/axios";
const GET_SPORTS = "/vm/sports";

const slots = [
  { start: "00:00", end: "01:00" },
  { start: "01:00", end: "02:00" },
  { start: "02:00", end: "03:00" },
  { start: "03:00", end: "04:00" },
  { start: "04:00", end: "05:00" },
  { start: "05:00", end: "06:00" },
  { start: "06:00", end: "07:00" },
  { start: "07:00", end: "08:00" },
  { start: "08:00", end: "09:00" },
  { start: "09:00", end: "10:00" },
  { start: "10:00", end: "11:00" },
  { start: "11:00", end: "12:00" },
  { start: "12:00", end: "13:00" },
  { start: "13:00", end: "14:00" },
  { start: "14:00", end: "15:00" },
  { start: "15:00", end: "16:00" },
  { start: "16:00", end: "17:00" },
  { start: "17:00", end: "18:00" },
  { start: "18:00", end: "19:00" },
  { start: "19:00", end: "20:00" },
  { start: "20:00", end: "21:00" },
  { start: "21:00", end: "22:00" },
  { start: "22:00", end: "23:00" },
  { start: "23:00", end: "24:00" },
];

function VmVenueAddNew() {
  const [sports, setSports] = useState([]);

  const [lat, setLat] = useState(10.45);
  const [lng, setLng] = useState(76.6);
  const Geocoder = () => {
    const ctrl = new MapboxGeocoder({
      accessToken: import.meta.env.VITE_MAP_TOKEN,
      marker: false,
      collapsed: true,
    });
    useControl(() => ctrl);
    ctrl.on("result", (e) => {
      const coords = e.result.geometry.coordinates;
      setLng(coords[0]);
      setLat(coords[1]);
    });
    return null;
  };

  useEffect(() => {
    try {
      axios.get(GET_SPORTS).then(({ data }) => {
        console.log(data.response);
        setSports(data.response);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <div className="flex gap-x-4 ">
          <div className="mt-3 w-1/2 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Venue Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner capitalize"
              placeholder="Enter Venue Name"
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Mobile
            </label>
            <input
              type="number"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Enter Mobile"
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Place
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="flex-col w-2/4">
            <div className="flex gap-x-4 ">
              <div className="mt-3 w-2/4 ">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  District
                </label>
                <select type="" name="name" className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner capitalize" required>
                  <option selected disabled className="text-gray-400 select-none">
                    Choose a District
                  </option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
              </div>
              <div className="mt-3 w-2/4">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  name="name"
                  className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="mt-3 w-2/4 ">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  Discount %
                </label>
                <input
                  type="number"
                  name="name"
                  className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
                  placeholder="Discount Percentage"
                  required
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-3 w-1/2">
                <label htmlFor="image" className="block text-sm text-gray-700">
                  Image
                </label>
                <div className="flex items-center justify-between">
                  <label htmlFor="image-upload" className=" cursor-pointer p-2  rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input id="image-upload" name="image" type="file" accept="image/*" className="sr-only" onChange={(e) => setImage(e.target.files[0])} />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="image" className="block text-sm text-gray-700">
                  Document
                </label>
                <div className="flex items-center justify-between">
                  <label htmlFor="image-upload" className=" cursor-pointer p-2  rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input id="document-upload" name="document" type="file" accept="image/*" className="sr-only" onChange={(e) => setDocument(e.target.files[0])} />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <div class="mt-3 w-full">
              <label for="description" class="block text-sm text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Type something about your turf"
                name="description"
                rows="4"
                class="bg-gray-100/50 focus:outline-none shadow-inner p-2 focus:border-b-2 focus:border-green-600 block w-full border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex w-full h-auto gap-x-4 mt-3">
          <div className="w-1/2 h-auto">
            <ReactMapGL
              mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
              initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: 7,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                latitude={lat}
                longitude={lng}
                draggable
                onDragEnd={(e) => {
                  setChanged(true);
                  setMapNotSelectedErrMsg(false);
                  setLat(e.lngLat.lat);
                  setLng(e.lngLat.lng);
                }}
              />
              <NavigationControl position="bottom-right" />
              <GeolocateControl
                position="top-left"
                trackUserLocation
                onGeolocate={(e) => {
                  setChanged(true);
                  setMapNotSelectedErrMsg(false);
                  setLat(e.coords.latitude);
                  setLng(e.coords.longitude);
                }}
              />
              <Geocoder />
            </ReactMapGL>
          </div>
          <div className="mt-3 w-1/2 flex">
            <div className="w-7/12">
              <label className=" text-sm text-gray-700">Slot by days</label>
              <div className="flex gap-2 flex-wrap">
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">monday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">tuesday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">wednesday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">thursday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">friday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">saturday</button>
                <button className="p-2 bg-gray-100/50 shadow-inner rounded hover:bg-gray-200 w-24 duration-300">sunday</button>
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                {
                  slots.map(slot=>(
                    <div className="p-0.5">
                      <input type="checkbox" name="00:00-01:00" value={`${slot.start}-${slot.end}`} id="" />
                      <label htmlFor="" className="ml-1">
                        {`${slot.start} - ${slot.end}`}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-5/12">
              <p className=" block text-sm text-gray-700">sports</p>
              {sports.length ? (
                sports.map((sport, key) => (
                  <div className="flex items-center gap-6 p-2 bg-gray-100/50 mt-2 rounded shadow-inner" key={key}>
                    <div className="flex">
                      <input type="checkbox" className="checked:bg-green-600 rounded" id="vehicle1" name="vehicle1" value="football" />
                      <label for="vehicle1" className="text-black ml-1">
                        {sport.sport}
                      </label>
                    </div>
                    <div className="flex">
                      {sport.facilityDetails.map((per, key) => (
                        <div key={key}>
                          <input type="radio" id={per.facility} name={sport.sport} value={per.facility} />
                          <label for={per.facility} className="text-gray-600 m-1">
                            {per.facility}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p> No sports available </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-lg hover:bg-green-600 duration-300 text-white px-2 py-1 mt-2 float-right rounded shadow-md">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default VmVenueAddNew;
