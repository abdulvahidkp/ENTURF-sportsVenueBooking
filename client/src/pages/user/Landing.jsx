import React from 'react'
import UserNavbar from '../../components/user/UserNavbar';
import CoverVideoComponent from '../../components/user/CoverVideoComponent';
import UserFooter from '../../components/user/UserFooter';

function Landing() {
  return (
    <div>
        <UserNavbar/>
        <CoverVideoComponent/>
        <UserFooter/>
    </div>
  )
}

export default Landing
