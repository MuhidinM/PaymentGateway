import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/admin/Home";
import Profile from "./components/admin/Profile";
import E404 from "./components/error/E404";
import Nav from "./components/admin/Nav";
import Sidebar from "./components/admin/Sidebar";
import Footer from "./components/admin/Footer";
import Sites from "./components/admin/Sites";
import Banks from "./components/admin/Banks";
import Messages from "./components/admin/Messages";
import Edit from "./components/admin/Edit";
import Create from "./components/admin/Create";
import Activate from "./components/admin/Activate";
function Admin() {
  return (
    <>
      <Create />
      <Edit />
      <Nav />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
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
