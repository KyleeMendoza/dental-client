import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./layouts/NavBar";
import Home from "./pages/Client/Home";
import AboutUs from "./pages/Client/AboutUs";
import Services from "./pages/Client/Services";
import ContactUs from "./pages/Client/ContactUs";
import Appoinment from "./pages/Client/Appoinment";
import Profile from "./pages/Client/Profile";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Route path="Appointment" element={<Appoinment />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
