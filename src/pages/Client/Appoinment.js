import React, { useState, useEffect } from "react";
import ServiceDropDown from "../../components/ServiceDropDown";
import TimePicker from "../../components/TimePicker";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import appointmentImg from "../../assets/booking.jpg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//Date picker
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import services from "../../services/services.service";
import appointment from "../../services/appointment.service";
import user from "../../services/user.service";

function Appoinment() {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token
  const [serviceData, setServiceData] = useState([]);
  const [addServiceData, setAddServiceData] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [availableTime, setAvailableTime] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    start_time: "",
    service_name: "",
    tooth_name: "",
    additional_service: [],
    client_note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service_name") {
      setSelectedService(value);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeAdditional = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [value],
    });
  };

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    setFormData({
      ...formData,
      date: formattedDate,
    });
  };

  const handleTimeChange = (time) => {
    setFormData({
      ...formData,
      start_time: time.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const requiredFields = ["phone", "date", "start_time", "service_name"];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      toast.error(`Please fill in all required fields.`);
      return;
    }

    // Validate phone number to contain only numbers
    const phoneNumber = formData["phone"];
    if (!/^\d+$/.test(phoneNumber)) {
      toast.error(`Phone number can only contain numbers.`);
      return;
    }

    console.log(formData);

    // const result = await appointment.book(formData);
    // if (result) {
    //   console.log(result);
    //   toast.success("Successful Booking.");
    //   navigate("/");
    // }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (token) {
        const result = await user.userInfo(token);
        if (result) {
          const { name } = result.findUser;
          setFormData({
            ...formData,
            name: name,
          });
        }
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      const result = await services.serviceList();
      if (result) {
        setServiceData(result.FindAllServices);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchTime = async () => {
      if (formData.date) {
        const selectedDate = new Date(formData.date);
        const currentDate = new Date();

        const isCurrentDate =
          selectedDate.toDateString() === currentDate.toDateString();

        if (isCurrentDate) {
          const result = await appointment.availableTime(formData.date);
          if (result) {
            const currentTime = new Date().toLocaleTimeString("en-US", {
              hour12: false,
            });
            const currentTimeIndex = result.availableTimeSlots.findIndex(
              (time) => time > currentTime
            );

            // Filter time slots that are not in the past
            const futureTimeSlots =
              currentTimeIndex !== -1
                ? result.availableTimeSlots.slice(currentTimeIndex)
                : [];

            console.log("Future Time: ", futureTimeSlots);
            setAvailableTime(futureTimeSlots);
          }
        } else {
          const result = await appointment.availableTime(formData.date);
          if (result) {
            setAvailableTime(result.availableTimeSlots);
          }
        }
      }
    };
    fetchTime();
  }, [formData.date]);

  useEffect(() => {
    if (selectedService) {
      setAddServiceData(
        serviceData.filter(
          (service) => service.service_name !== selectedService
        )
      );
    } else {
      setAddServiceData(serviceData);
    }
  }, [serviceData, selectedService]);

  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex justify-center items-center ">
        <div className="w-[85%] h-[80%] flex justify-center items-center ">
          <div
            className="img-container h-full flex-1  rounded-xl"
            style={{
              backgroundImage: `url(${appointmentImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="form-container h-full w-[45%] px-10 flex flex-col gap-5">
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
                serviceData={serviceData}
              />
              <TextField
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="phone"
                label="09** *** ****"
                name="phone"
                autoComplete="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="flex items-center gap-1 ">
                <div className="flex-1">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Pick a Date"
                      slotProps={{ textField: { fullWidth: true } }}
                      onChange={handleDateChange}
                      minDate={dayjs()} // Set minDate to the current date
                      name=""
                    />
                  </LocalizationProvider>
                </div>
                <div className="flex-1 mt-2">
                  <TimePicker
                    label="Pick a time"
                    name={"start_time"}
                    value={formData.start_time}
                    handler={handleTimeChange}
                    serviceData={availableTime}
                  />
                </div>
              </div>
              {selectedService && (
                <ServiceDropDown
                  label="Add Service"
                  name={"additional_service"}
                  value={formData.additional_service}
                  handler={handleChangeAdditional}
                  serviceData={addServiceData}
                />
              )}
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
