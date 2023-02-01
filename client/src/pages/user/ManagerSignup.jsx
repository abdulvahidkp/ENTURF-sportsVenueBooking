import React from 'react'
import UserFooter from '../../components/user/UserFooter'
import UserNavbar from '../../components/user/UserNavbar'
import VenueManagerSignup from '../../components/user/venueManagerSignup/VenueManagerSignup'

function ManagerSignup() {
  return (
    <div>
      <UserNavbar/>
      <VenueManagerSignup/>
      <UserFooter/>
    </div>
  )
}

export default ManagerSignup
