import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import swal from 'sweetalert'
import toast,{ Toaster } from "react-hot-toast";

const GET_USERS = '/admin/users'
const CHANGE_BLOCK = '/admin/users/blockStatus'

function UsersManagejsx() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
     axios.get(GET_USERS).then(({data})=>{
      setUsers(data.userDatas)
    }).catch(err=>{
      console.log(err.message)
  })
  },[])

  const handleBlock = (id,status)=> {
      swal({
        title: `${status?"Unblock user?":"Block user?"}`,
        text: `Are you sure you want to ${status?"Unblock":"Block"} this user?`,
        icon: 'warning',
        buttons: ['Cancel', `${status?"Unblock":"Block"}`],
        dangerMode: status?false:true,
      })
      .then((confirm) => {
        if (confirm) {
          // Perform block action
            axios.put(CHANGE_BLOCK+`/${id}`).then(response=>{
              setUsers(users.map(user=>(user._id === id ? {...user,blockStatus:!user.blockStatus} : user)))
              toast.success(`User ${status?"unblocked":"blocked"} successfully!`);
            }).catch(err=>{
              console.log(err.message)
          })
        }
      })
  }

  return (
    <div className={`p-4 sm:ml-64 bg-[#05445E] ${users.length?"h-screen":"h-screen"} `}>
      <Toaster position="top-right" />
      <div className="p-4 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-[#D4F1F4] dark:text-blue-100">
            <thead class="text-xs text-[#D4F1F4] uppercase bg-[#05445E] dark:text-white">
              <p className="text-lg m-1 capitalize">Manage Users</p>
              <tr className="border border-[#189AB4]">
                <th scope="col" class="px-6 py-3">
                  User name
                </th>
                <th scope="col" className="px-6 py-3">
                  contact information
                </th>
                {/* <th scope="col" class="px-6 py-3">
                  email
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length? users.map((user,key)=> 

              <tr className="bg-[#189AB4] border-b border-[#05445E]" id={key}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-[#D4F1F4] whitespace-nowrap dark:text-[#D4F1F4]"
                >
                {user.name}
                </th>
                <td class="px-6 py-4">{user.mobile ? user.mobile: user.email}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    onClick={()=>handleBlock(user._id,user.blockStatus)}
                    className={`font-medium ${user.blockStatus?"bg-green-600 ":"bg-red-600"} p-2  `}
                  >
                    { user.blockStatus?"Unblock":"Block"}
                  </a>
                </td>
              </tr>
              )
              : <div className=" p-4">No users available</div>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersManagejsx;
