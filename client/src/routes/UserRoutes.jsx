import { Routes, Route } from "react-router-dom";
import ManagerSignup from "../pages/user/ManagerSignup";
import Profile from "../pages/user/Profile";
import Signin from "../pages/user/Signin";
import Signup from "../pages/user/Signup";
import SingleVenue from "../pages/user/SingleVenue";
import VenuesPage from "../pages/user/VenuesPage";
import Landing from "../pages/user/Landing";
import UserLayout from "../components/UserLayout";
import RequireAuth from "../components/RequireAuth";
import ForgotPwd from "../pages/user/ForgotPwd";
import AuthenticatedRoute from "../util/authenticatedRoute";
import UnAuthenticatedRoute from "../util/unAuthenticatedRoute";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Landing />} />
        <Route path="forgotPwd" element={<ForgotPwd />} />
        <Route path="signin" element={<UnAuthenticatedRoute><Signin /></UnAuthenticatedRoute>} />
        <Route path="signup" element={<Signup />} />
        <Route path="venues" element={<VenuesPage />} />
        <Route path="managerSignup" element={<ManagerSignup />} />
        <Route path="singleVenue" element={<SingleVenue />} />
        <Route path="profile" element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />
        {/* <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default UserRoutes;
