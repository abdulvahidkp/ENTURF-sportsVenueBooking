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


import turfImage from './assets/turfImage.jpeg'
import { ShareIcon } from './assets/ShareIcon'
import { LocationIcon,GetDirection,PercentageRound } from './assets/LocationIcon'
import { Cricket,Football } from './assets/Sports'
import { EmptyCart } from './assets/CartIcon'

import { DocsIcon,BookingCancel } from './assets/DescriptionIcon'
import Profile from './pages/user/Profile'






function App() {

  return (
    <div className='bg-gradient-to-r from-emerald-50 to-emerald-100'> 
      <div className='container'>
        <div className='grid grid-cols-2'>
          <div className='bg-white'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
