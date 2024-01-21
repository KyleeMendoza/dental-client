import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "../layouts/NavBar";
import Home from "./Client/Home";
import AboutUs from "./Client/AboutUs";
import Services from "./Client/Services";
import ContactUs from "./Client/ContactUs";

function ProtectedRoute() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route path="/" element={token ? <NavBar /> : <Navigate to="/login" />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<AboutUs />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default ProtectedRoute;
