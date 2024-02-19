import React, { useState, useEffect } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

import NavBar from "./layouts/NavBar";
import Home from "./pages/Client/Home";
import AboutUs from "./pages/Client/AboutUs";
import Services from "./pages/Client/Services";
import ContactUs from "./pages/Client/ContactUs";
import Appoinment from "./pages/Client/Appoinment";
import Profile from "./pages/Client/Profile";

import user from "./services/user.service";
import appointment from "./services/appointment.service";

function App() {
  const token = Cookies.get("token");
  const [display, setDisplay] = React.useState("login");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDisplay("login");
  };
  const [userInfo, setUserInfo] = useState({});
  const [notifData, setNotifData] = React.useState();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (token) {
        const result = await user.userInfo(token);
        if (result) {
          setUserInfo(result.findUser);
        }
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchAppointment = async () => {
      if (userInfo.name) {
        const result = await appointment.userAppointment(userInfo.name);
        if (result) {
          // console.log(result.appointments);
          const today = new Date();
          const notifData = result.appointments.filter(
            (item) =>
              item.approval === "accepted" ||
              (item.approval === "rejected" &&
                new Date(item.appointment_start) >= today)
          );
          setNotifData(notifData);
        }
      }
    };
    fetchAppointment();
  }, [userInfo]);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
              display={display}
              setDisplay={setDisplay}
              notifData={notifData}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="About" element={<AboutUs />} />
          <Route
            path="Services"
            element={<Services handleOpen={handleOpen} />}
          />
          <Route path="Contact" element={<ContactUs />} />
          <Route
            path="Appointment"
            element={token ? <Appoinment /> : <Navigate to="/" />}
          />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
