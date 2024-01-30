import React, { useState } from "react";
import ServiceDropDown from "../../components/ServiceDropDown";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import appointmentImg from "../../assets/dental-appointment.webp";

//Date picker
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

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

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("M/D/YYYY");
    setFormData({
      ...formData,
      date: formattedDate,
    });
  };

  const handleTimeChange = (time) => {
    const formattedTime = dayjs(time).format("HH:mm");
    setFormData({
      ...formData,
      start_time: formattedTime,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const requiredFields = ["phone", "date", "start_time", "service_name"];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      toast.error(`Please fill in all required fields.`);
      return;
    }

    // If all required fields are filled, proceed with form submission
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
              <div className="flex items-center gap-1">
                <div className="flex-1">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Pick a Date"
                        slotProps={{ textField: { fullWidth: true } }}
                        onChange={handleDateChange}
                        name=""
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className="flex-1">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Pick a Time"
                        slotProps={{ textField: { fullWidth: true } }}
                        onChange={handleTimeChange}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
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
