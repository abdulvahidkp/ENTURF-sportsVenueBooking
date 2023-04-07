import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VenueManagerSignup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../api/axios";
import setUpRecaptcha from "../../../context/UserAuth";
import jwtDecode from "jwt-decode";
import PreviewImage from "../PreviewImage";
import { setVmDetails } from "../../../redux/features/vmSlice";
import { useDispatch } from "react-redux";

const NUMBER_REGEX = /^[0-9]{10}$/;
const OTP_REGEX = /^[0-9]{6}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const MOBILE_URL = "/vmMobile";
const SIGN_UP = "/vmSignup";

function VenueManagerSignup() {
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      image: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, "name must be 4 character or higher").max(17, "name must be 17 character or lesser").required("Required"),
      mobile: Yup.string().matches(NUMBER_REGEX, "Phone number is not valid").required("Required"),
      image: Yup.mixed()
        .required("document is required")
        .test("FILE_SIZE", "Too big!", (value) => value && value.size < 1024 * 1024)
        .test("FILE_TYPE", "invalid", (value) => value && ["image/png", "image/jpeg"].includes(value.type)),
      password: Yup.string().matches(PWD_REGEX, "Must include uppercase, lowercase letters, number and a special character ! @ # * $ %").required("Required"),
      confirmPassword: Yup.string().test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    }),
    onSubmit: async (values, errors) => {
      try {
        const response = await axios.post(MOBILE_URL, JSON.stringify({ mobile: values.mobile }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        const otpResponse = await setUpRecaptcha("+91" + values.mobile);
        setConfirm(otpResponse);
        setSuccess(true);
        setErr("");
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
        if (error.code === "auth/argument-error") {
          setErr("Mobile Number you entered isn't available");
        } else if (error.response?.status === 409) {
          setErr("mobile already taken");
        } else {
          setErr("complete captcha");
        }
      }
    },
  });

  const formikOTP = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string().matches(OTP_REGEX, "Must be exactly 6 characters").required("Required"),
    }),
    onSubmit: async (values) => {
      const { image } = formik.values;
      const formData = new FormData();

      try {
        formData.append("file", image);
        formData.append("upload_preset", import.meta.env.VITE_uploadPreset);
        const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloudName}/image/upload`, formData);
        formik.values.image = data.secure_url;
        await confirm.confirm(values.otp).then(async () => {
          const {data} = await axios.post(SIGN_UP, JSON.stringify(formik.values), {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          });
          dispatch(setVmDetails(data))
          localStorage.setItem("vm", data.accessToken);
          navigate("/vm/signin");
        });
      } catch (error) {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-verification-code).") {
          setErr("invalid otp");
        } else if (!error?.response) {
          setErr("no server response");
        } else if (error.response?.status === 409) {
          setErr("Mobile already registered");
        } else {
          setErr("registration failed");
        }
      }
    },
  });

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-32 sm:px-16 lg:px-32 xl:px-72 ">
      <div className="container">
        <div className="w-full h-45 bg-white shadow-md rounded-md p-8 space-y-6 ">
          <div className="space-y-1">
            <h1 className="font-semibold">
              hey, <span className="text-3xl font-roboto font-bold">Venue Manager.</span>
            </h1>
            <p>Let's get rolling.</p>
          </div>
          {!success ? (
            <form onSubmit={formik.handleSubmit}>
              {err && <p className="text-red-600 font-bold">{err}</p>}
              <div className="grid sm:grid-cols-2 gap-2">
                <div>
                  <input type="text" className="input_Field" placeholder="Full Name" name="name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
                  {formik.touched.name && formik.errors.name ? <p className="text-sm text-red-600">{formik.errors.name}</p> : null}
                </div>
                <div>
                  <input type="number" className="input_Field" placeholder="Mobile" name="mobile" onBlur={formik.handleBlur} value={formik.values.mobile} onChange={formik.handleChange} />
                  {formik.touched.mobile && formik.errors.mobile ? <p className="text-sm text-red-600">{formik.errors.mobile}</p> : null}
                </div>
                <div>
                  <input type="Password" className="input_Field" placeholder="Password" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} />
                  {formik.touched.password && formik.errors.password ? <p className="text-sm text-red-600">{formik.errors.password}</p> : null}
                </div>
                <div>
                  <input
                    type="Password"
                    className="input_Field"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className="text-sm text-red-600">{formik.errors.confirmPassword}</p> : null}
                </div>
                <div>
                  <p className="opacity-60 ">govt approved doc</p>
                  <input type="file" className="input_Field" name="image" onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue("image", e.target.files[0])} />
                  {formik.touched.image && formik.errors.image ? <p className="text-sm text-red-600">{formik.errors.image}</p> : null}
                </div>
                {<PreviewImage file={formik.values.image} />}
                <button type="submit" className="w-2/4 select-none p-2 rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500">
                  Sign up
                </button>
              </div>
              <div id="recaptcha-container" className="mt-3" />
            </form>
          ) : (
            <form onSubmit={formikOTP.handleSubmit}>
              {err && <p>{err}</p>}
              <div className="flex justify-evenly items-center sm:grid-cols-2 ">
                <div>
                  <input
                    type="text"
                    className="input_Field"
                    placeholder="Enter your OTP that send to your mobile"
                    name="otp"
                    onBlur={formikOTP.handleBlur}
                    value={formikOTP.values.otp}
                    onChange={formikOTP.handleChange}
                  />
                  {formikOTP.touched.otp && formikOTP.errors.otp ? <p className="text-sm text-red-600">{formikOTP.errors.otp}</p> : null}
                </div>
                <button type="submit" className="w-1/4 select-none rounded-full h-12 text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500">
                  confirm
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default VenueManagerSignup;
