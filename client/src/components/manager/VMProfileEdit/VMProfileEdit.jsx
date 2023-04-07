import React from "react";
import { useState, useEffect } from "react";
import PreviewImage from "../../user/PreviewImage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { setVmDetails } from "../../../redux/features/vmSlice";

const NUMBER_REGEX = /^[0-9]{10}$/;
const OTP_REGEX = /^[0-9]{6}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const UPDATE_PROFILE = '/vm/profile';

function VMProfileEdit() {
  const [err, setErr] = useState();

  const vm = useSelector((state) => state.vm);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: vm.vmDetails?.name,
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, "name must be 4 character or higher").max(17, "name must be 17 character or lesser").required("Required")
    }),
    onSubmit: async (values, errors) => {
      if(!values.image && values.name === vm.vmDetails?.name ) return
      if (values.image) {
        const formData = new FormData();
        try {
          formData.append("file", values.image);
          formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
          const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
          formik.values.image = data.secure_url;
        } catch (err) {
          console.log(err);
        }
      }
      let token = localStorage.getItem('vm')
      try {
        const {data} = await axios.put(UPDATE_PROFILE, JSON.stringify({...formik.values,rejectUpdate:true}), {
          headers: { 
            "Content-Type": "application/json",
            Authorization:token
           }
        });
        dispatch(setVmDetails({...data}))

      } catch (error) {
        console.log(error)
      }
    },
  });

  return (
    <div class={`${vm.status !== "rejected" && "p-4 sm:ml-64"}`}>
      <div class={`p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ${vm.status !== "rejected" && "mt-14  "}`}>
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-32 sm:px-16 lg:px-32 xl:px-72 ">
          <div className="container">
            <div className="w-full h-45 bg-white shadow-md rounded-md p-8 space-y-6 ">
              <button className="bg-gray-300 rounded p-1 hover:shadow-lg duration-300" onClick={() => navigate("/vm/pending")}>
                Back to Home
              </button>
              <div className="space-y-1">
                <h1 className="font-semibold">
                  {" "}
                  <span className="text-3xl font-roboto font-bold">Edit Profile</span>
                </h1>
              </div>
              <form onSubmit={formik.handleSubmit}>
                {err && <p className="text-red-600 font-bold">{err}</p>}
                <div className="grid sm:grid-cols-2 gap-2">
                  <div>
                    <input type="text" className="input_Field" placeholder="Full Name" name="name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
                    {formik.touched.name && formik.errors.name ? <p className="text-sm text-red-600">{formik.errors.name}</p> : null}
                  </div>
                  
                  <div>
                    <input type="file" className="input_Field" name="image" onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("image", e.target.files[0])} />
                    {formik.touched.image && formik.errors.image ? <p className="text-sm text-red-600">{formik.errors.image}</p> : null}
                  </div>
                  {formik.values.image ? <PreviewImage file={formik.values.image} /> : <img src={vm.vmDetails.document} alt="" className="rw-26 h-28" />}
                  <button type="submit" disabled={!formik.values.image && formik.values.name === vm.vmDetails?.name } className="w-2/4 h-12 ml-auto mt-auto select-none p-2 rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500">
                    Save changes
                  </button>
                </div>
                <div id="recaptcha-container" className="mt-3" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VMProfileEdit;
