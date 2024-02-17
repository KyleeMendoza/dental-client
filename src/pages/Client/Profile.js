import React, { useState, useEffect } from "react";
import HistoryTable from "../../layouts/HistoryTable";
import Cookies from "js-cookie";

import user from "../../services/user.service";
import appointment from "../../services/appointment.service";

function Profile() {
  const token = Cookies.get("token"); //user token
  const [userInfo, setUserInfo] = useState({});
  const [appointmentData, setAppointmentData] = useState([]);

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
          console.log(result.appointments);
          setAppointmentData(result.appointments);
        }
      }
    };
    fetchAppointment();
  }, [userInfo]);

  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex flex-col items-center py-10 gap-5 ">
        <div className="info-container w-[75%] font-['Poppins'] flex flex-col gap-2 p-5 rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="text-2xl font-bold">Personal Information</p>
          <div className="px-5 info-sub-container grid grid-cols-2 grid-rows-2 gap-1">
            <p>
              <span className="font-bold">Name:</span> {userInfo.name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {userInfo.email}
            </p>
            <p>
              <span className="font-bold">Contact:</span> {userInfo.phone}
            </p>
            <p>
              <span className="font-bold">Address:</span> {userInfo.address}
            </p>
          </div>
        </div>
        <div className="record-container w-[75%] font-['Poppins'] flex flex-col gap-2 p-5 rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="text-2xl font-bold">Appointment History</p>
          <HistoryTable appointmentData={appointmentData} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
