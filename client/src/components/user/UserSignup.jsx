import React, { useState } from 'react'
import Google from '../../assets/Google.png'
import Signup from '../../assets/Signup.png'

function UserSignup() {
  const [passwordHide,hideChange] = useState(false) 

  return (
    <div>
      <div className='pb-0 sm:pb-32'>
        <div className='container mx-auto'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className='hidden sm:block'>
                <img src={Signup} alt="" />
            </div>
            <div className='py-8 sm:pt-40'>
                <div className='rounded-lg shadow-xl w-96 h-auto'>
                <div className='px-4'>
                    <h1 className="text-4xl select-none font-semibold font-roboto ">Sign up</h1>
                    <p className='text-md py-2 font-sans'>Just play. Have fun. Enjoy the game.</p>
                    <div>
                    <input type="text" id="first_name" className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Mobile" required/>
                    <input type="text" id="first_name" className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Name" required/>
                    <div className='flex items-center'>
                        <input type={passwordHide?"text":"password"} id="first_name" className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Password" required/>
                        <p className='text-green-700 -ml-12 cursor-pointer select-none' onClick={()=>hideChange(!passwordHide)}>show</p>
                    </div>
                    <input type="number" id="first_name" className="hidden border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring dark:text-white dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="OTP" required/>
                    </div>
                    <button className='w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800'>Sign up</button>
                    <div className='flex items-center my-4'>
                    <hr className='w-1/2 ' />
                    <p className='mx-3'>or</p>
                    <hr className='w-1/2' />
                    </div>
                    <div>

                    <button className='border-2 select-none bg-white border-slate-300 text-slate-500 hover:bg-[#edf3f2]  rounded-full pl-12 w-full text-xl font-roboto font-semibold  p-3'>
                        Sign in with Google
                    </button>
                    <img src={Google} className="h-6 ml-16 -mt-10 select-none" alt="" s />
                    </div>
                </div>
                    <div className='place-content-center'>
                    <p className='px-16 py-10'>Already have an account?<span className='text-green-800 hover:text-green-900 hover:underline cursor-pointer'> Signin</span></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignup