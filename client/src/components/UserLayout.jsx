import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from './user/UserNavbar'
import UserFooter from './user/UserFooter'

function UserLayout() {
  return (
    <div>
        <UserNavbar/>
        <Outlet context={{hello:'world'}}/>
        <UserFooter/>
    </div>
  )
}

export default UserLayout