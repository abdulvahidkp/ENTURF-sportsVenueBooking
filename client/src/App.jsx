import Landing from './pages/user/Landing'
import Confirmation from './pages/user/Confirmation'
import VenuesPage from './pages/user/VenuesPage'
import Signin from './pages/user/Signin' 
import Signup from './pages/user/Signup' 
import { useState } from 'react'
import AllVenues from './components/user/AllVenues'
import UserNavbar from './components/user/UserNavbar'
import UserFooter from './components/user/UserFooter'
import BookingSection from './components/user/BookingSection'
import SingleVenue from './components/user/SingleVenue'
import TurfDetailsPart from './components/user/TurfDetailsPart'
import VenueManagerSignup from './components/user/venueManagerSignup/VenueManagerSignup'
import ManagerSignup from './pages/user/ManagerSignup'
import VMLogin from './pages/manager/VMLogin'
import VMDashboard from './pages/manager/VMDashboard'
import FlowBiteAdminSidebar from './pages/manager/FlowBiteAdminSidebar'




function App() {

  return (
    <div >
      <VMDashboard/>
    </div>
  )
}

export default App;
