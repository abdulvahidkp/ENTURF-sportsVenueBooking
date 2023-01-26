import React from 'react'
import UserNavbar from '../../components/user/UserNavbar'
import AllVenues from '../../components/user/AllVenues'
import UserFooter from '../../components/user/UserFooter'

function VenuesPage() {
  return (
    <div>
      <UserNavbar/>
      <AllVenues/>
      <UserFooter/>
    </div>
  )
}

export default VenuesPage;
