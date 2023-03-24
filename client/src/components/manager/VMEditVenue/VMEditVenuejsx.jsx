import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const NUMBER_REGEX = /^[0-9]{10}$/;
import PreviewImage from "../../user/PreviewImage";
import axios from "../../../api/axios";
const GET_SPORTS = "/vm/sports";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl, useControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import toast, { Toaster } from "react-hot-toast";
import VMSlots from "../VMVenueAdd/VMSlots";



import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import VMdaysButton from "../VMVenueAdd/VMdaysButton";

function VMVenueAddjsx() {

 

  const [sports, setSports] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState([]);
  const [changed, setChanged] = useState(false);
  const [mapNotSelectedErrMsg, setMapNotSelectedErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const [lat, setLat] = useState(10.45);
  const [lng, setLng] = useState(76.6);
  const [zoom, setZoom] = useState(7);
  const Geocoder = () => {
    const ctrl = new MapboxGeocoder({
      accessToken: import.meta.env.VITE_MAP_TOKEN,
      marker: false,
      collapsed: true,
    });
    useControl(() => ctrl);
    ctrl.on("result", (e) => {
      console.log("e", e);
      const coords = e.result.geometry.coordinates;
      console.log("coords" + coords);
      console.log("coords[0]" + coords[0]);
      console.log("coords[1]", coords[1]);
      setLng(coords[0]);
      setLat(coords[1]);
    });
    return null;
  };
  const mapRef = useRef();

  useEffect(() => {
    try {
      axios.get(GET_SPORTS).then(({ data }) => {
        setSports(data.response);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      venueName: "",
      mobile: "",
      district: "",
      image: "",
      description: "",
      actualPrice: "",
      sellingPrice: "",
      document: "",
      sport: "football",
      facility: "",
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
    validationSchema: Yup.object({
      venueName: Yup.string().min(4, "name must be 4 character or higher").max(17, "name must be 17 character or lesser").required("Required"),
      mobile: Yup.string().matches(NUMBER_REGEX, "Phone number is not valid").required("Required"),
      district: Yup.string().required("district is required"),
      image: Yup.mixed().required("document is required"),
      place: Yup.string().required("Required"),
      description: Yup.string().min(4, "Description must be 12 character or higher").max(150, "Descriptioin must be 150 character or lesser").required("Required"),
      actualPrice: Yup.number().required("Required"),
      sellingPrice: Yup.number()
        .required("Required")
        .test("is-less", "Selling price must be less than actual price", function (value) {
          const { actualPrice } = this.parent;
          return value < actualPrice;
        }),
      sport: Yup.string().required("sport is required"),
      facility: Yup.string().required("facility is required"),
      document: Yup.mixed()
        .required("document is required")
        .test("FILE_SIZE", "Too big!", (value) => value && value.size < 1024 * 1024)
        .test("FILE_TYPE", "invalid", (value) => value && ["image/png", "image/jpeg"].includes(value.type)),
    }),
    onSubmit: async (values) => {
      if (!changed) {
        return setMapNotSelectedErrMsg(true);
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("file", values.image);
      formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
      try {
        var { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
        values.image = data.secure_url;

        formData.append("file", values.document);
        formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
        var { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
        values.document = data.secure_url;
      } catch (error) {
        console.log(error.message);
      }

      let _id = localStorage.getItem("vm");
      try {
        const response = await axios.post("/vm/turf/add", JSON.stringify({ ...values, lng, lat }), {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${_id}`,
          },
          withCredentials: true,
        });
        console.log(response);
        toast.success(`Turf added successfully!`);
      } catch (error) {
        toast.error("There was an occured when adding turf");
        console.log(error.message);
      } finally {
        formik.resetForm();
        setLoading(false);
      }
    },
  });

  const handleSportChange = (event) => {
    const sport = event.target.value;
    setSelectedFacility(sports.find((perSport) => perSport.sport === sport)?.facilityDetails || []);
    formik.setFieldValue("sport", sport);
    formik.setFieldValue("facility", "");
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4  border-dashed rounded-lg dark:border-gray-700 mt-14">
        <Toaster position="top-right" />
        {loading ? (
          <div role="status" className="flex justify-center h-screen items-center  ">
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
          </div>
        ) : (
          <>
            <h1 className="text-gray-700 text-2xl font-light font-roboto drop-shadow-sm shadow-black ">NEW VENUE</h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="grid grid-cols-2 gap-4 mb-4 mt-8">
                <div>
                  <div class="relative">
                    <input
                      type="text"
                      id="venueName"
                      name="venueName"
                      onBlur={formik.handleBlur}
                      value={formik.values.venueName}
                      onChange={formik.handleChange}
                      class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      for="venueName"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Venue Name
                    </label>
                    {formik.touched.venueName && formik.errors.venueName ? <p className="text-sm text-red-600">{formik.errors.venueName}</p> : null}
                  </div>
                  <div className="grid grid-cols-2 space-x-2 py-3 ">
                    <div class="relative">
                      <input
                        type="number"
                        id="venueMobile"
                        name="mobile"
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="venueMobile"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Venue Mobile
                      </label>
                      {formik.touched.mobile && formik.errors.mobile ? <p className="text-sm text-red-600">{formik.errors.mobile}</p> : null}
                    </div>
                    <div class="relative">
                      <input
                        type="text"
                        name="place"
                        onBlur={formik.handleBlur}
                        value={formik.values.place}
                        onChange={formik.handleChange}
                        id="venueLocation"
                        class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="venueLocation"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Venue Place
                      </label>
                      {formik.touched.place && formik.errors.place ? <p className="text-sm text-red-600">{formik.errors.place}</p> : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-2 ">
                    <div class="relative">
                      <select
                        id="countries"
                        name="district"
                        value={formik.values.district}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a District</option>
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
                      {formik.touched.district && formik.errors.district ? <p className="text-sm text-red-600">{formik.errors.district}</p> : null}
                    </div>
                    <div className="relative -mt-2">
                      <label htmlFor="docVenue " className="text-xs  text-gray-500">
                        Venue Document
                      </label>
                      <input
                        type="file"
                        id="docVenue"
                        name="document"
                        onBlur={formik.handleBlur}
                        onChange={(e) => formik.setFieldValue("document", e.target.files[0])}
                        className="file-input text-gray-400  file-input-ghost w-full max-w-xs"
                      />
                      {formik.touched.document && formik.errors.document ? <p className="text-sm text-red-600">{formik.errors.document}</p> : null}
                    </div>
                  </div>
                  <div className="grid space-x-2 ">
                    <textarea
                      id="message"
                      rows="4"
                      name="description"
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      class="block p-2.5 mt-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Description about Venue..."
                    />
                    {formik.touched.description && formik.errors.description ? <p className="text-sm text-red-600">{formik.errors.description}</p> : null}
                  </div>
                </div>
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

                <div className="relative block -mt-2">
                  <div>
                    <label htmlFor="docVenue " className="text-xs  text-gray-500">
                      Venue Photos
                    </label>
                  </div>
                  <input
                    type="file"
                    id="docVenue"
                    name="image"
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                      formik.setFieldValue("image", e.currentTarget.files[0]);
                    }}
                    className="file-input text-gray-400  file-input-ghost w-full max-w-xs"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                  {formik.touched.image && formik.errors.image ? <p className="text-sm text-red-600">{formik.errors.image}</p> : null}
                </div>
                    <VMdaysButton formik={formik} />
                    
                <div>
                  <div className="grid grid-cols-3 gap-2">
                    {formik?.values?.image && <PreviewImage file={formik.values.image} />}
                    {/* <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div>
                <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div>
                <div className="border mt-3 border-dashed bg-gray-50 rounded-lg h-56 w-full"></div> */}
                  </div>
                  <div className="grid grid-cols-2 space-x-2 py-3 ">
                    <div class="relative">
                      <input
                        type="number"
                        id="venueMobile"
                        name="actualPrice"
                        onBlur={formik.handleBlur}
                        value={formik.values.actualPrice}
                        onChange={formik.handleChange}
                        class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="venueMobile"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Actual Price (perhour)
                      </label>
                      {formik.touched.actualPrice && formik.errors.actualPrice ? <p className="text-sm text-red-600">{formik.errors.actualPrice}</p> : null}
                    </div>
                    <div class="relative">
                      <input
                        type="number"
                        id="venueMobile"
                        name="sellingPrice"
                        onBlur={formik.handleBlur}
                        value={formik.values.sellingPrice}
                        onChange={formik.handleChange}
                        class="block border px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        for="venueMobile"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Selling Price (perhour)
                      </label>
                      {formik.touched.sellingPrice && formik.errors.sellingPrice ? <p className="text-sm text-red-600">{formik.errors.sellingPrice}</p> : null}
                    </div>
                    {sports.length ? (
                      <div className="grid grid-cols-2 space-x-2 py-3 ">
                        <div className="relative">
                          <select
                            id="sport"
                            name="sport"
                            value={formik.values.sport}
                            onChange={handleSportChange}
                            onBlur={formik.handleBlur}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option selected value="">
                              Select a Sport
                            </option>
                            {sports.map((perSport) => (
                              <option key={perSport._id} value={perSport.sport}>
                                {perSport.sport}
                              </option>
                            ))}
                          </select>
                          {formik.touched.sport && formik.errors.sport ? <p className="text-sm text-red-600">{formik.errors.sport}</p> : null}
                        </div>

                        <div className="relative">
                          {formik.values.sport && (
                            <>
                              <select
                                id="countries"
                                name="facility"
                                value={formik.values.facility}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option selected value="">
                                  Select a Facility
                                </option>
                                {selectedFacility.map((PerSelected, key) => (
                                  <option key={key} value={PerSelected.facility}>
                                    {PerSelected.facility}
                                  </option>
                                ))}
                              </select>
                              {formik.touched.sport && formik.errors.sport ? <p className="text-sm text-red-600">{formik.errors.sport}</p> : null}
                            </>
                          )}
                        </div>
                      </div>
                    ) : (
                      <p>Sports not available</p>
                    )}
                  </div>
                </div>
              </div>
              {mapNotSelectedErrMsg && <p className="text-red-700">Map not selected</p>}
              <div className="mt-8 gap-x-2 flex">
                <div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
                    submit
                  </button>
                </div>
                <div>
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white p-2 rounded" onClick={() => formik.resetForm()}>
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default VMVenueAddjsx;
