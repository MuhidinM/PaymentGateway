import React from "react";
import { Route, Routes } from "react-router-dom";
import E404 from "./components/error/E404";
import Nav from "./components/user/Nav";
import Home from "./components/user/Home";
import Uapi from "./components/user/Uapi";
import Create from "./components/user/Create";
import Accounts from "./components/user/Accounts";
import Transactions from "./components/user/Transactions";
import Sidebar from "./components/user/Sidebar";
import Profile from "./components/user/Profile";
import Settings from "./components/user/Settings";

function Users() {
  return (
    <>
      <Create />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="items-center drawer-content bg-slate-100">
          {/* <!-- Page content here --> */}
          <Nav />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="uapi" element={<Uapi />}></Route>
            <Route path="transactions" element={<Transactions />}></Route>
            <Route path="accounts" element={<Accounts />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="setting" element={<Settings />}></Route>
            <Route path="*" element={<E404 />}></Route>
          </Routes>
        </div>
        <Sidebar/>
      </div>
    </>
  );
}

export default Users;
