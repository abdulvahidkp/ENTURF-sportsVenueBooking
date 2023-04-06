import React, { useState } from "react";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAdminLoggedOut } from "../../redux/features/adminSlice";

function SideAndNav() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(setAdminLoggedOut());
  };

  const isLoggedIn = useSelector(state=>state.admin)

  const [aside, asideChange] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#189AB4] border-b border-[#05445E] dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                onClick={() => asideChange(!aside)}
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="">
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/admin" className="flex  ml-2 md:mr-24">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                <span className="self-center text-xl font-semibold sm:text-2xl text-[#D4F1F4] whitespace-nowrap dark:text-white italic">ENTURF!</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <img className="w-8 h-8 rounded-full" src="https://www.w3schools.com/howto/img_avatar.png" alt="user photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-[#189AB4] transition-transform ${!aside && "-translate-x-full"} ${
          aside && "translate-x-0"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/sports"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap ">Sports</span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/vm"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg className="flex-shrink w-6 h-6 text-[#75E6DA] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>{" "}
                <span className="flex-1 ml-3 whitespace-nowrap">Venue Managers</span>
              </NavLink>
            </li>
            {/* <li>
                    <a href="#" className="flex items-center p-4 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </a>
                </li>    */}
            <li>
              <NavLink
                to="/admin/turfs"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Turfs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg className="flex-shrink w-6 h-6 text-[#75E6DA] " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>{" "}
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/bookings"
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#05445E] flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700"
                    : " flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05435e3c] dark:hover:bg-gray-700";
                }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap ">Bookings</span>
                {/* <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </NavLink>
            </li>
            <li>
              <Link to='/admin/signin' onClick={handleSignout} className="flex items-center p-4 text-base font-normal text-[#D4F1F4] rounded-lg dark:text-white hover:bg-[#05445E] dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 rotate-180 text-[#75E6DA] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideAndNav;
