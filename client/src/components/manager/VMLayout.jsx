import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import VMSideAndNav from './VMSideAndNav/VMSideAndNav'

function VMLayout() {

  const location = useLocation();

  return (
    <div>
        {location.pathname !== '/vm/signin' && location.pathname !== '/vm/pending' && <VMSideAndNav/>}
        <Outlet />
    </div>
  )
}

export default VMLayout
