import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/home/Landing";
import Intro from "./components/home/Itro";
import Contact from "./components/home/Contact";
import Apidocs from "./components/home/ApiDocs";
import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";
import E404 from "./components/error/E404";

function Home() {
  return (
    <>
    <Nav />
    <Routes>
      <Route index element={<Landing></Landing>}></Route>
      <Route path="intro" element={<Intro></Intro>}></Route>
      <Route path="apidocs" element={<Apidocs></Apidocs>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="*" element={<E404 />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default Home;
