import React from "react";
import { Route, Routes } from "react-router-dom";
import First from "./pages/auth/First";
import Login from "./pages/auth/Login";
import Recovery from "./pages/auth/Recovery";
import Registration from "./pages/auth/Registration";
// import CheckOutPage from "./pages/auth/multi-step/CheckoutPage/CheckOutPage";
import E404 from "./pages/error/E404";
function auth() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="registration" element={<Registration />}></Route>
        <Route path="first" element={<First />}></Route>
        <Route path="recover" element={<Recovery />}></Route>
        <Route path="*" element={<E404 />}></Route>
      </Routes>
    </>
  );
}

export default auth;
