import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Client/Home";
import AboutUs from "./pages/Client/AboutUs";
import Services from "./pages/Client/Services";
import ContactUs from "./pages/Client/ContactUs";
import Appoinment from "./pages/Client/Appoinment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<ProtectedRoute />} /> */}
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<ContactUs />} />
          <Route path="Appointment" element={<Appoinment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
