import React from "react";

function AdminLogin() {
  return (
    <div className="bg-gradient-to-r h-screen from-emerald-50 to-emerald-100">
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
                  Admin Login
                </h1>
              </div>
              <div className="mt-2 space-y-3">
                <input
                  type="text "
                  className="input_Field"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="input_Field"
                  placeholder="Password"
                />
                <button className="duration-300 select-none p-2 mt-2 w-full rounded-full text-white text-xl font-roboto  font-semibold bg-green-400/70 hover:bg-green-500">
                  Sign in
                </button>
                <p className="font-semibold text-emerald-600 font-roboto cursor-pointer hover:underline">
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
