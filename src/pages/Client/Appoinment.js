import React from "react";
import ServiceDropDown from "../../components/ServiceDropDown";
import { Button, TextField } from "@mui/material";
import appointmentImg from "../../assets/dental-appointment.webp";

function Appoinment() {
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
              <ServiceDropDown />
              <TextField
                required
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="number"
                label="Phone Number"
                name="number"
                autoComplete="number"
                autoFocus
              />
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
                autoFocus
              />
              <TextField
                required
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="time"
                label="Choose Time"
                name="time"
                autoComplete="time"
                autoFocus
              />
              <TextField
                //
                fullWidth
                inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
                InputLabelProps={{
                  style: { fontFamily: "Poppins, sans serif" },
                }}
                id="note"
                label="Write a note"
                name="note"
                multiline
                rows={4}
                autoComplete="note"
                autoFocus
              />
            </div>
            <div className="button-container flex flex-row-reverse">
              <Button variant="contained">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
