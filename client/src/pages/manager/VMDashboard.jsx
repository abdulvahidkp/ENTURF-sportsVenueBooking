import React from 'react'
import VMSideAndNav from '../../components/manager/VMSideAndNav/VMSideAndNav'
import VMDashboardjsx from '../../components/manager/VMDashboard/VMDashboardjsx.jsx'
import VMEditVenue from '../../components/manager/VMEditVenue/VMEditVenue'


import VMProfileEdit from '../../components/manager/VMProfileEdit/VMProfileEdit'

function VMDashboard() {
  return (
    <div>
        <VMSideAndNav/>
        <VMProfileEdit/>

    </div>
  )
}

export default VMDashboard