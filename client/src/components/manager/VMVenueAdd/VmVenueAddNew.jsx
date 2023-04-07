import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl, useControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import axios from "../../../api/axios";
import { Link, useNavigate } from "react-router-dom";
const GET_SPORTS = "/vm/sports";

const availableSlots = [
  "00:00-01:00",
  "01:00-02:00",
  "02:00-03:00",
  "03:00-04:00",
  "04:00-05:00",
  "05:00-06:00",
  "06:00-07:00",
  "07:00-08:00",
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
  "20:00-21:00",
  "21:00-22:00",
  "22:00-23:00",
  "23:00-00:00",
];

function VmVenueAddNew() {
  const [sports, setSports] = useState([]);

  //adding states
  const [venueName, setVenueName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState("");
  const [actualPrice, setActualPrice] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [document, setDocument] = useState("");
  const [lat, setLat] = useState(10.45);
  const [lng, setLng] = useState(76.6);
  const [slots, setSlots] = useState([
    {
      day: "sunday",
      slots: [],
    },
    {
      day: "monday",
      slots: [],
    },
    {
      day: "tuesday",
      slots: [],
    },
    {
      day: "wednesday",
      slots: [],
    },
    {
      day: "thursday",
      slots: [],
    },
    {
      day: "friday",
      slots: [],
    },
    {
      day: "saturday",
      slots: [],
    },
  ]);
  const [sportFacility, setSportFacility] = useState([]);

  const [submitLoad, setSubmitLoad] = useState(false);
  const [day, setDay] = useState("sunday");
  const [slotLoading, setSlotLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setSlotLoading(false);
    }, 500);
  }, [slotLoading]);

  function handleCheckboxChange(slot, indexOf) {
    setSlots((prevDays) => {
      const updatedDays = [...prevDays]; // create a copy of the days array
      const selectedDay = updatedDays[indexOf]; // create a copy of the selected day object
      const slotIndex = selectedDay.slots.indexOf(slot);
      if (slotIndex === -1) {
        let index = selectedDay.slots.findIndex((item) => Number(item.substring(0, 2)) > Number(slot.substring(0, 2)));
        if (index === -1) index = selectedDay.slots.length;
        selectedDay.slots.splice(index, 0, slot);
      } else {
        selectedDay.slots.splice(slotIndex, 1);
      }
      return updatedDays;
    });
  }

  function handleSportsSetting(id, sport, facilityDetails) {
    setSportFacility((prevState) => {
      let allSport = [...prevState];
      const index = allSport.findIndex((obj) => obj.sportId === id);
      if (index === -1) {
        allSport.push({ sportId: id, sport, facility: facilityDetails.facility });
      } else {
        allSport.splice(index, 1);
      }
      return allSport;
    });
  }

  function handleFacility(id, facility) {
    setSportFacility((prevState) => {
      let allSport = [...prevState];
      const index = allSport.findIndex((obj) => obj.sportId === id);
      allSport[index].facility = facility;
      return allSport;
    });
  }

  // function handleCheckboxChange(slot, indexOf) {
  //   setSlots((prevDays) => {
  //     const updatedDays = [...prevDays];
  //     const selectedDay = { ...updatedDays[indexOf] };
  //     const slotIndex = selectedDay.slots.indexOf(slot);
  //     if (slotIndex === -1) {
  //       const newSlots = [...selectedDay.slots, slot];
  //       const updatedDay = { ...selectedDay, slots: newSlots };
  //       updatedDays[indexOf] = updatedDay;
  //     } else {
  //       const newSlots = selectedDay.slots.filter((s) => s !== slot);
  //       const updatedDay = { ...selectedDay, slots: newSlots };
  //       updatedDays[indexOf] = updatedDay;
  //     }
  //     return updatedDays;
  //   });
  // }

  //

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
        setSports(data.response);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("vm");
    let slotsCount = slots.reduce((acc, per) => (acc += per.slots.length), 0);
    let sports = sportFacility.length;
    if (!venueName || !mobile || !district || !place || !actualPrice || !discountPercentage || !description || !image || !document || !slotsCount || !sports || !lat || !lng) return;

    setSubmitLoad(true);
    //formData
    const formData = new FormData();

    try {
      formData.append("file", image);
      formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
      var { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
      var imageUrl = data.secure_url;

      formData.append("file", document);
      formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
      var { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
      var documentUrl = data.secure_url;
    } catch (error) {
      setSubmitLoad(false);
      console.log(error.message);
    }

    try {
      let response = await axios.post(
        "/vm/turf",
        { venueName, mobile, district, place, actualPrice, discountPercentage, description, image: imageUrl, document: documentUrl, slots, sportFacility, lat, lng },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/vm/venues");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitLoad(false);
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <form className="p-4 mt-14" onSubmit={(e) => handleSubmit(e)}>
        <Link to="/vm/venues" className="p-1.5 hover:bg-blue-600 duration-200 bg-blue-500 rounded text-white">
          Back
        </Link>
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
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="mobile" className=" block text-sm text-gray-700">
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              className="bg-gray-100/50 block focus:outline-none rounded focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Enter Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="address" className=" block text-sm text-gray-700">
              Place
            </label>
            <input
              type="text"
              name="address"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Address"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
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
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  name="name"
                  className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner capitalize"
                  required
                >
                  <option selected className="text-gray-400 select-none">
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
                <label htmlFor="price" className=" block text-sm text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
                  placeholder="Price"
                  value={actualPrice}
                  onChange={(e) => setActualPrice(e.target.value)}
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
                  value={discountPercentage}
                  onChange={(e) => setDiscountPercentage(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-3 w-1/2">
                <label htmlFor="image" className="block text-sm text-gray-700">
                  Image
                </label>
                <div className="flex items-center gap-1 ">
                  <label htmlFor="image" className=" cursor-pointer p-2 rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input id="image" name="image" type="file" accept="image/*" className="sr-only" onChange={(e) => setImage(e.target.files[0])} />
                  </label>
                  <p className="truncate">{image.name}</p>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="document" className="block text-sm text-gray-700">
                  Document
                </label>
                <div className="flex items-center gap-1">
                  <label htmlFor="document" className=" cursor-pointer p-2  rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input id="document" name="document" type="file" accept="image/*" className="sr-only" onChange={(e) => setDocument(e.target.files[0])} />
                  </label>
                  <p className="truncate">{document.name}</p>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                class="bg-gray-100/50 focus:outline-none shadow-inner p-2 focus:border-b-2 focus:border-green-600 block w-full border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex w-full h-96 gap-x-4 mt-3">
          <div className="w-1/2 h-auto ">
            <ReactMapGL
              mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
              initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: 6,
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                latitude={lat}
                longitude={lng}
                draggable
                onDragEnd={(e) => {
                  setLat(e.lngLat.lat);
                  setLng(e.lngLat.lng);
                }}
              />
              <NavigationControl position="bottom-right" />
              <GeolocateControl
                position="top-left"
                trackUserLocation
                onGeolocate={(e) => {
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
                {slots.map((per) => (
                  <button
                    type="button"
                    className={`p-2 shadow-inner rounded ${day === per.day ? "bg-gray-200" : " bg-gray-100/50"} hover:bg-gray-200 w-24 duration-300`}
                    onClick={() => {
                      setSlotLoading(true);
                      setDay(per.day);
                    }}
                  >
                    {per.day}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-2 flex-wrap">
                {slotLoading ? (
                  <div role="status " className="mx-auto mt-16">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  availableSlots.map((slot) =>
                    slots.map(
                      (per, indexOf) =>
                        per.day === day && (
                          <div className="p-0.5">
                            <input type="checkbox" name={slot} checked={per.slots.includes(slot)} value={slot} id="" onChange={() => handleCheckboxChange(slot, indexOf)} />
                            <label htmlFor={slot} className="ml-1" onClick={() => handleCheckboxChange(slot, indexOf)}>
                              {slot}
                            </label>
                          </div>
                        )
                    )
                  )
                )}
              </div>
            </div>
            <div className="w-5/12">
              <p className=" block text-sm text-gray-700">sports</p>
              {sports.length ? (
                sports.map((sport, key) => (
                  <div className="flex items-center gap-6 p-2 bg-gray-100/50 mt-2 rounded shadow-inner" key={key}>
                    <div className="flex">
                      <input
                        type="checkbox"
                        className="rounded"
                        id={sport.sport}
                        name={sport.sport}
                        value="football"
                        checked={sportFacility.some((per) => per.sportId === sport._id)}
                        onChange={() => handleSportsSetting(sport._id, sport.sport, sport.facilityDetails[0])}
                      />
                      <label for={sport.sport} className="text-black ml-1">
                        {sport.sport}
                      </label>
                    </div>
                    {sportFacility.some((per) => per.sportId === sport._id) && (
                      <div className="flex">
                        {sport.facilityDetails.map((per, key) => (
                          <div key={key}>
                            <input
                              type="radio"
                              id={per.facility + sport.sport}
                              name={sport.facility + sport.sport}
                              value={per.facility}
                              onChange={(e) => handleFacility(sport._id, e.target.value)}
                              defaultChecked={key === 0}
                            />
                            <label for={per.facility + sport.sport} className="text-gray-600 m-1">
                              {per.facility}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p> No sports available </p>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <button className="bg-green-500 text-lg hover:bg-green-600 duration-300 text-white px-2 py-1 flex justify-center float-right mt-16 w-28 rounded shadow-md " disabled={submitLoad}>
            {submitLoad ? (
              <svg aria-hidden="true" class="w-6 items- h-7 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default VmVenueAddNew;
