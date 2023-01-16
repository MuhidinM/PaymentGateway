import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import E404 from "./pages/error/E404";
import Nav from "./pages/admin/Nav";
import Sidebar from "./pages/admin/Sidebar";
import Footer from "./components/Footer";
import Sites from "./pages/admin/Sites";
import Banks from "./pages/admin/Banks";
import Messages from "./pages/admin/Messages";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Activate from "./pages/admin/Activate";
function Admin() {
  return (
    <>
      <Create />
      <Edit />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Nav />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="sites" element={<Sites />}></Route>
            <Route path="banks" element={<Banks />}></Route>
            <Route path="activate" element={<Activate />}></Route>
            <Route path="messages" element={<Messages />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
            <Route path="*" element={<E404 />}></Route>
          </Routes>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Admin;
