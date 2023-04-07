import React, { useState, useRef, useEffect } from "react";
import axios from "../../../api/axios";
import { Navigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setVmDetails } from '../../../redux/features/vmSlice'

const VMSIGNIN_URL = '/vm/signin'

function VenueManagerLogin() {

  const mobileRef = useRef();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr] = useState('');


  const dispatch = useDispatch();
  const vm = useSelector(state=>state.vm);

  useEffect(()=>{
    mobileRef.current.focus();
  },[])

  useEffect(()=>{
    setErr('')
  },[mobile,password])

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        VMSIGNIN_URL,
        JSON.stringify({ mobile, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      // localStorage.setItem("user",response.data);
      localStorage.setItem("vm",data.accessToken);
      setMobile("");
      setPassword("");
      dispatch(setVmDetails({mobile,...data}))
    } catch (error) {
      console.log(error);
      console.log(error.message)
      console.log(error.response.data)
      if (error.response.data){
        setErr(error.response.data.message)
      } else if (!error?.response) {
        setErr("no server response");
      } else if (error.repsonse?.status === 400) {
        setErr("missing mobile or password");
      } else if (error.response?.status === 401) {
        setErr("Unauthorized");
      } else if (error.response?.status === 403) {
        setErr("You are Blocked!")
      }  else {
        setErr("login failed");
      }
    }
  }
  return (
    <>
    {vm.isLoggedIn && <Navigate to="/vm" replace/>}
    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="p-4">
        <span className="text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none">
          ENTURF!
        </span>
      </div>
      <div className="">
        <div className="grid place-items-center py-16 sm:py-32">
          <div className="h-45 rounded-md md:px-28 lg:px-16 space-y-6">
            <div className="bg-white w-80 sm:w-96 shadow-md p-8">
              <div className="space-y-1">
                <h1 className="text-3xl font-roboto font-bold">
                  Welcome Back.
                </h1>
              </div>
              <div className="mt-2 space-y-3">
                {err && <p>{err}</p>}
                <form onSubmit={handleSignin}>
                  <input
                    ref={mobileRef}
                    type="Number "
                    className="input_Field"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={e=>setMobile(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className="input_Field"
                    placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    required
                  />
                  <button className="duration-300 select-none p-2 mt-2 w-full rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500">
                    Sign in
                  </button>
                </form>
                <p className="font-semibold text-emerald-600 font-roboto cursor-pointer hover:underline">
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default VenueManagerLogin;
