import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { setAdminLoggedIn } from '../../redux/features/adminSlice'

const LOGIN_URL = "/admin/signin";

function AdminLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const nameInput = useRef();

  const dispatch = useDispatch();
  const admin = useSelector(state=>state.admin)

  const navigate = useNavigate();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(()=>{
    setErrMsg('')
  },[name,password])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        LOGIN_URL,
        JSON.stringify({ name, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      localStorage.setItem('admin',data.accessToken)
      setName('');
      setPassword('')
      dispatch(setAdminLoggedIn());
    } catch (error) {
      if (!error?.response) {
        setErrMsg("no server response");
      } else if (error.repsonse?.status === 400) {
        setErrMsg("missing mobile or password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("login failed");
      }
    }
  };

  return (
    <>
    {admin.isLoggedIn && <Navigate to='/admin' replace/>}
    <div className="bg-gradient-to-r h-screen from-emerald-50 to-emerald-100">
      <div className="p-4">
        <span className="text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none">
          ENTURF!
        </span>
      </div>
      <div className="">
        <form onSubmit={handleLogin}>
          <div className="grid place-items-center py-16 sm:py-32">
            <div className="h-45 rounded-md md:px-28 lg:px-16 space-y-6">
              <div className="bg-white w-80 sm:w-96 shadow-md p-8">
                <div className="space-y-1">
                  <h1 className="text-3xl font-roboto font-bold">
                    Admin Login
                  </h1>
                </div>
                <div className="mt-2 space-y-3">
                  {errMsg && <p className="text-red-600">{errMsg}</p>}
                  <input
                    type="text"
                    className="input_Field"
                    placeholder="Name"
                    ref={nameInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input_Field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="duration-300 select-none p-2 mt-2 w-full rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500"
                  >
                    Sign in
                  </button>
                  {/* <p className="font-semibold text-emerald-600 font-roboto cursor-pointer hover:underline">
                  Forgot password?
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default AdminLogin;
