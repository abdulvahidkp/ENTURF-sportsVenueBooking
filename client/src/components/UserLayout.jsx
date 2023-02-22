import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import UserNavbar from './user/UserNavbar'
import UserFooter from './user/UserFooter'

function UserLayout() {
  const location = useLocation();
  return (
    <div>
        {location.pathname !== '/signin' && <UserNavbar/> }
        <Outlet context={{hello:'world'}}/>
        {location.pathname !== '/signin' && <UserFooter/> }
    </div>
  )
}

export default UserLayout