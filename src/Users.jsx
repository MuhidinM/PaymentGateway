import React from "react";
import { Route, Routes } from "react-router-dom";
import E404 from "./components/error/E404";
import Nav from "./components/user/Nav";
import Home from "./components/user/Home";
import Uapi from "./components/user/Uapi";
import Create from "./components/user/Create";
import Accounts from "./components/user/Accounts";
import Transactions from "./components/user/Transactions";

function Users() {
  return (
    <>
    <Create />
    <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="uapi" element={<Uapi />}></Route>
        <Route path="transactions" element={<Transactions />}></Route>
        <Route path="accounts" element={<Accounts />}></Route>
        <Route path="*" element={<E404 />}></Route>
      </Routes>
    </>
  );
}

export default Users;
