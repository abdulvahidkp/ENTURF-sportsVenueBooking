import React, { useState } from 'react'


function  VMManagerModal({ rejectPop,setRejectPop,handleStatus,vmId }) {

    const [reason,setReason] = useState('');
    const [err,setErr] = useState(false)
  
    return (
      <div
        className={`fixed inset-0 z-50 ${!rejectPop && 'hidden'}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg text-black font-medium mb-4">Are you sure you want to reject?</h2>
            <input
              type="text"
              placeholder="Reason for rejection"
              value={reason}
              onChange={e=>{
                setErr(false)
                setReason(e.target.value)
              }}
              className="border text-gray-900 border-gray-400 rounded-lg p-2 mb-4 w-full"
            />
            { err && <p className='text-red-700'>*required</p> }
            <div className="flex justify-end">
              <button
                onClick={()=>{
                  setReason('')
                  setErr(false)
                  setRejectPop(false)
                }}
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={()=>{
                  if(reason === '') return setErr(true)
                  handleStatus(vmId,'rejected',reason)
                }}
                className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default VMManagerModal