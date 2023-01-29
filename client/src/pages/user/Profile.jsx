import React from 'react'
import ProfileAndBooking from '../../components/user/ProfileAndBooking'
import UserFooter from '../../components/user/UserFooter'
import UserNavbar from '../../components/user/UserNavbar'

function Profile() {
  return (
    <div>
      <UserNavbar/>
      <ProfileAndBooking/>
      <UserFooter/>
    </div>
  )
}

export default Profile
