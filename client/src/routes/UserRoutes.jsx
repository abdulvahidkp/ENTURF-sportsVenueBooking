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
import ConfirmationPage from "../pages/user/Confirmation";
import CancellationPolicy from "../pages/user/CancellationPolicy";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route index element={<Landing />} />
        <Route path="forgotPwd" element={<ForgotPwd />} />
        <Route path="signin" element={<UnAuthenticatedRoute><Signin /></UnAuthenticatedRoute>} />
        <Route path="signup" element={<Signup />} />
        <Route path="managerSignup" element={<ManagerSignup />} />
        <Route path="venues/:place" element={<VenuesPage />} />
        <Route path="venue/:id" element={<SingleVenue />} />
        <Route path="profile" element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />
        <Route path="confirmation" element={<AuthenticatedRoute><ConfirmationPage/></AuthenticatedRoute>} />
        <Route path="cancellation" element={<CancellationPolicy/>} />
        {/* <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default UserRoutes;
