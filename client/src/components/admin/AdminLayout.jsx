import SideAndNav from './SideAndNav'
import { Outlet,useLocation } from 'react-router-dom'

function AdminLayout() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/admin/signin' && <SideAndNav/>}
      <Outlet/>
    </div>
  )
}

export default AdminLayout;