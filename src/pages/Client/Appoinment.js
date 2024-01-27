import React, { useState } from "react";
import ServiceDropDown from "../../components/ServiceDropDown";
import { Button, TextField } from "@mui/material";
import appointmentImg from "../../assets/dental-appointment.webp";

function Appoinment() {
  const [formData, setFormData] = useState({
    phone: "",
    date: "",
    start_time: "",
    service_name: "",
    tooth_name: "",
    additional_service: "",
    client_note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here, you can handle the form data as needed, e.g., send it to an API
  };

  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex justify-center items-center border-2 border-red-600">
        <div className="w-[80%] h-[80%] flex justify-center items-center ">
          <div
            className="img-container h-full flex-1  rounded-xl"
            style={{
              backgroundImage: `url(${appointmentImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="form-container h-full flex-1 px-10 flex flex-col gap-5">
            <div className="text-container flex flex-col ">
              <p className="text-2xl font-bold font-['Poppins'] capitalize">
                Book an appointment online!
              </p>
              <p className="text-sm text-gray-600 font-['Poppins']">
                Elevate Your Smile with Seamless Dental Appointments Using Our
                User-Friendly Form. Your Oral Health, Your Way!
              </p>
            </div>
            <div className="flex flex-col gap-2 input-container ">
              <ServiceDropDown
                label="Service"
                name={"service_name"}
                value={formData.service_name}
                handler={handleChange}
              />
              <TextField
                required
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="flex justify-center items-center gap-1">
                <TextField
                  required
                  fullWidth
                  inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                  InputLabelProps={{
                    style: { fontFamily: "Poppins, sans serif" },
                  }}
                  id="date"
                  label="Choose Date"
                  name="date"
                  autoComplete="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                  InputLabelProps={{
                    style: { fontFamily: "Poppins, sans serif" },
                  }}
                  id="start_time"
                  label="Choose Time"
                  name="start_time"
                  autoComplete="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                />
              </div>
              <ServiceDropDown
                label="Add Service"
                name={"additional_service"}
                value={formData.additional_service}
                handler={handleChange}
              />
              <TextField
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="client_note"
                label="Write a note"
                name="client_note"
                multiline
                rows={4}
                autoComplete="client_note"
                value={formData.client_note}
                onChange={handleChange}
              />
            </div>
            <div className="button-container flex flex-row-reverse">
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
