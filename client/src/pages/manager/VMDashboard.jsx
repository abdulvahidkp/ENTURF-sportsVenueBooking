import React from 'react'
import VMSideAndNav from '../../components/manager/VMSideAndNav/VMSideAndNav'
import VMDashboardjsx from '../../components/manager/VMDashboard/VMDashboardjsx.jsx'
import VMEditVenue from '../../components/manager/VMEditVenue/VMEditVenuejsx'


import VMProfileEdit from '../../components/manager/VMProfileEdit/VMProfileEdit'

function VMDashboard() {
  return (
    <div>
        <VMSideAndNav/>
        <VMDashboardjsx/>
    </div>
  )
}

export default VMDashboard