import { Routes, Route } from "react-router-dom";

import UserRoutes from "./routes/UserRoutes";
import VmRoutes from "./routes/VmRoutes";
import AdminRoutes from "./routes/AdminRoutes"

//notfound page
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes >
      <Route path="/*" element={<UserRoutes />} />
      <Route path="/vm/*" element={<VmRoutes/>} />
      <Route path='/admin/*' element={<AdminRoutes/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
