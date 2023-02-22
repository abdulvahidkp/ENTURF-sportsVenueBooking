import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import entruflogo from "../../assets/entruflogo.jpg";

function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { mobile, name } = useSelector((state) => state.user);
  console.log(name)

  return (
    <div className="fixed w-full z-10 top-0 bg-white ">
      <nav className="px-2 py-2.5 shadow-md ">
        <div className="w-screen sm:mt-0 sm:container flex flex-wrap justify-between items-center mx-auto">
          <div className="">
            <span className="text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none">
              ENTURF!
            </span>
          </div>
          <div className="items-center">
            <a className="text-xs sm:text-lg cursor-pointer hover:text-green-500 duration-500">
              CONTACT
            </a>
            {name ? (
              <button
                className="bg-green-400/70 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-green-500 rounded "
                onClick={() => setIsOpen(!isOpen)}
              >
                LOGUT
              </button>
            ) : (
              <button
                className="bg-green-400/70 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 mx-3 sm:mx-4 hover:bg-green-500 rounded "
                onClick={() => setIsOpen(!isOpen)}
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
