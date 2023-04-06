import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import entruflogo from "../../assets/entruflogo.jpg";
import { userLogout } from "../../redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function UserNavbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {isLoggedIn} = useSelector((state) => state.user);

  return (
    <div className="fixed w-full z-10 top-0 bg-white">
      <nav className="px-2 py-2.5 shadow-md ">
        <div className="w-screen sm:mt-0 sm:container flex flex-wrap justify-between items-center mx-auto">
          <div className="" onClick={()=>navigate('/')}>
            <span className="text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none">
              ENTURF!
            </span>
          </div>
          <div className="items-center">
            <Link to='/profile' className="text-xs sm:text-lg cursor-pointer hover:text-green-500 duration-500">
              MY ACCOUNT
            </Link>
            {isLoggedIn ? (
              <button
                className="bg-green-500/70 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-green-700 rounded "
                onClick={() => dispatch(userLogout())}
              >
                LOGOUT
              </button>
            ) : (
              <button
                className="bg-[#276221] text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-green-700 rounded "
                onClick={() => navigate('/signin')}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
