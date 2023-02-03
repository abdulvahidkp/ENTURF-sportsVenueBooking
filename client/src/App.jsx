import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useState } from 'react'

//user imports
import Landing from './pages/user/Landing'
import Signin from './pages/user/Signin' 
import Signup from './pages/user/Signup' 
import VenuesPage from './pages/user/VenuesPage'
import SingleVenue from './pages/user/SingleVenue'
import Profile from './pages/user/Profile';
import ManagerSignup from './pages/user/ManagerSignup'

//vm imports
import VMLogin from './pages/manager/VMLogin'
import VMDashboard from './pages/manager/VMDashboard'
import VMAllbookingsPage from './pages/manager/VMAllBookingsPage'
import VMVenue from './pages/manager/VMVenueDisplay';
import VMVenueAdd from './pages/manager/VMVenueAdd';
import VMEditVenue from './pages/manager/VMEditVenue';
import VMProfileEditPage from './pages/manager/VMProfileEditPage';


//super admin imports
import AdminLogin from './pages/admin/adminLogin'
import Dashboard from './pages/admin/Dashboard'
import SportsManage from './pages/admin/SportsManage'
import TurfManage from './pages/admin/TurfManage'
import VMManage from './pages/admin/VMManage'
import UsersManage from './pages/admin/UsersManage'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* user */}
        <Route path='/' element={<Landing/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/venues' element={<VenuesPage/>} />
        <Route path='/singleVenue' element={<SingleVenue/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/managerSignup' element={<ManagerSignup/>} />

        {/* venue manager */}
        <Route path='/vm/signin' element={<VMLogin/>} />
        <Route path='/vm' element={<VMDashboard/>} />
        <Route path='/vm/venues' element={<VMVenue/>} />
        <Route path='/vm/venues/add' element={<VMVenueAdd/>} />
        <Route path='/vm/venues/edit' element={<VMEditVenue/>} />
        <Route path='/vm/profile' element={<VMProfileEditPage />} />
        <Route path='/vm/bookings' element={<VMAllbookingsPage/>} />  
        
           
        <Route path='/admin/signin' element={<AdminLogin/>} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/admin/sports' element={<SportsManage/>} />
        <Route path='/admin/turfs' element={<TurfManage/>} />
        <Route path='/admin/vm' element={<VMManage/>} />
        <Route path='/admin/users' element={<UsersManage/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
