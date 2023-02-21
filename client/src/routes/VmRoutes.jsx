import { Route, Routes } from "react-router-dom"
import VMLogin from "../pages/manager/VMLogin"
import VMDashboard from "../pages/manager/VMDashboard"
import VMAllBookingsPage from "../pages/manager/VMAllBookingsPage"
import VMVenue from "../pages/manager/VMVenueDisplay"
import VMLayout from "../components/manager/VMLayout"
import VMProfileEdit from "../components/manager/VMProfileEdit/VMProfileEdit"
import VMEditVenue from "../pages/manager/VMEditVenue"
import VMVenueAdd from "../pages/manager/VMVenueAdd"


function VmRoutes() {
  return (
    <Routes>
        <Route element={<VMLayout/>}>
            <Route index element={<VMDashboard />} />
            <Route path="signin" element={<VMLogin />} />
            <Route path="venues" element={<VMVenue />} />
            <Route path="venues/add" element={<VMVenueAdd />} />
            <Route path="venues/edit" element={<VMEditVenue />} />
            <Route path="profile" element={<VMProfileEdit />} />
            <Route path="bookings" element={<VMAllBookingsPage />} />
        </Route>
    </Routes>
  )
}

export default VmRoutes