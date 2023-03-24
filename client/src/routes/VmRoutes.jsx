import { Route, Routes } from "react-router-dom"
import VMLogin from "../pages/manager/VMLogin"
import VMDashboard from "../pages/manager/VMDashboard"
import VMAllBookingsPage from "../pages/manager/VMAllBookingsPage"
import VMVenue from "../pages/manager/VMVenueDisplay"
import VMLayout from "../components/manager/VMLayout"
import VMProfileEdit from "../components/manager/VMProfileEdit/VMProfileEdit"
import VMEditVenue from "../pages/manager/VMEditVenue"
import VMVenueAdd from "../pages/manager/VMVenueAdd"

import AuthenticatedRoute from "../util/vm/authenticatedRoute"
import UnAuthenticatedRoute from "../util/vm/unAuthenticatedRoute"
import Pending from "../pages/manager/Pending"
import VmVenueAddNew from "../components/manager/VMVenueAdd/VmVenueAddNew"


function VmRoutes() {
  return (
    <Routes>
        <Route element={<VMLayout/>}>
            <Route index element={<AuthenticatedRoute><VMDashboard /></AuthenticatedRoute>} />
            <Route path="signin" element={<UnAuthenticatedRoute><VMLogin /></UnAuthenticatedRoute>} />
            <Route path="pending" element={<AuthenticatedRoute><Pending/></AuthenticatedRoute>} />
            <Route path="venues" element={<AuthenticatedRoute><VMVenue /></AuthenticatedRoute>} />
            <Route path="venues/addRemoved" element={<AuthenticatedRoute><VMVenueAdd /></AuthenticatedRoute>} />
            <Route path="venues/edit/:id" element={<AuthenticatedRoute><VMEditVenue /></AuthenticatedRoute>} />
            <Route path="venues/add" element={<AuthenticatedRoute><VmVenueAddNew /></AuthenticatedRoute>} />
            <Route path="profile" element={<AuthenticatedRoute><VMProfileEdit /></AuthenticatedRoute>} />
            <Route path="bookings" element={<AuthenticatedRoute><VMAllBookingsPage /></AuthenticatedRoute>} />
        </Route>
    </Routes>
  )
}

export default VmRoutes