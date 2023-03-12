import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom'
import VMSideAndNav from './VMSideAndNav/VMSideAndNav'

function VMLayout() {
  const vm = useSelector(state=>state.vm)
  const location = useLocation();

  return (
    <div>
        {location.pathname !== '/vm/signin' && location.pathname !== '/vm/pending' && vm.status === 'approved' && <VMSideAndNav/>}
        <Outlet />
    </div>
  )
}

export default VMLayout
