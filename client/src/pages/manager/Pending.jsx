import React, { useEffect } from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import { removeVmDetails } from '../../redux/features/vmSlice';
import { useDispatch,useSelector } from 'react-redux';
import axios from '../../api/axios';
const GET_ISAPPROVED = '/vm/approve'
import { setVmDetails } from '../../redux/features/vmSlice';


function Pending() {

  const dispatch = useDispatch()

  const vm = useSelector(state=>state.vm)

  const navigate = useNavigate()

  useEffect(()=>{
    let token = localStorage.getItem('vm');
    const isApproved = async () => {
      let {data} = await axios.get(GET_ISAPPROVED,{
        headers:{
          Authorization:token
        }
      })
      dispatch(setVmDetails({...data}))
    }
    isApproved();
  },[])

  const handleSignout = ()=>{
    dispatch(removeVmDetails());
  }
  
  return (
    <>
    {vm.status === 'approved' && <Navigate to='/vm' />}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold">Account Approval {vm.status === 'pending'? "Pending" : "Rejected"}</p>
            {
              vm.status === 'pending'?
              (
                <p className="text-gray-700 text-lg mt-2">
              Your manager account is currently pending approval by admin. You will be notified via mobile once your
              account is approved.
            </p>
              )
              :
              <p className="text-red-500 text-lg mt-2"> <span className='font-bold'>Your manager account was rejected for the following reason: </span>{vm.reason}</p> 
            }
        </div>
        <div className="flex justify-center">
          {
            vm.status === 'rejected' &&
            <button onClick={()=>navigate('/vm/profile')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline">
              Edit Credentials
            </button> 

          }
          <button onClick={handleSignout} className="bg-green-500 hover:bg-green-700 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Out
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pending