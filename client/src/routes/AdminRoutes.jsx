import React from "react";
import AdminLayout from "../components/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AdminLogin from "../pages/admin/adminLogin";
import SportsManage from "../pages/admin/SportsManage";
import TurfManage from "../pages/admin/TurfManage";
import VMManage from "../pages/admin/VMManage";
import UsersManage from "../pages/admin/UsersManage";
import { Route, Routes } from "react-router-dom";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="signin" element={<AdminLogin />} />
        <Route path="sports" element={<SportsManage />} />
        <Route path="turfs" element={<TurfManage />} />
        <Route path="vm" element={<VMManage />} />
        <Route path="users" element={<UsersManage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
