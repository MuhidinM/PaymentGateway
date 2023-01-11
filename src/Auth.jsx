import React from 'react'
import { Route, Routes } from "react-router-dom";
import First from './components/auth/First';
import Login from "./components/auth/Login";
import Recovery from './components/auth/Recovery';
import Registration from "./components/auth/Registration";
// import CheckOutPage from "./components/auth/multi-step/CheckoutPage/CheckOutPage";
import E404 from "./components/error/E404";
function auth() {
  return (
    <>
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path="registration" element={<Registration />}></Route>
      <Route path="first" element={<First />}></Route>
      <Route path="recover" element={<Recovery />}></Route>
      {/* <Route path="registration2" element={<CheckOutPage />}></Route> */}
      <Route path="*" element={<E404 />}></Route>
    </Routes>
    </>
  )
}

export default auth