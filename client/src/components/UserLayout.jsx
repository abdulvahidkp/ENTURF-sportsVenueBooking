import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import UserNavbar from './user/UserNavbar'
import UserFooter from './user/UserFooter'

function UserLayout() {
  const location = useLocation();
  return (
    <div>
        {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/forgotPwd' && <UserNavbar/> }
        <Outlet context={{hello:'world'}}/>
        {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/forgotPwd' && <UserFooter/> }
    </div>
  )
}

export default UserLayout