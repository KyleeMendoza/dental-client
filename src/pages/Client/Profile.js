import React from "react";
import HistoryTable from "../../layouts/HistoryTable";

function Profile() {
  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex flex-col items-center py-10 gap-5 ">
        <div className="info-container w-[75%] font-['Poppins'] flex flex-col gap-2 p-5 rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="text-2xl font-bold">Personal Information</p>
          <div className="px-5 info-sub-container grid grid-cols-2 grid-rows-2 gap-1">
            <p>
              <span className="font-bold">Name:</span> John Doe
            </p>
            <p>
              <span className="font-bold">Email:</span> sample@gmail.com
            </p>
            <p>
              <span className="font-bold">Contact:</span> 09151231213
            </p>
            <p>
              <span className="font-bold">Address:</span> Manila City
            </p>
          </div>
        </div>
        <div className="record-container w-[75%] font-['Poppins'] flex flex-col gap-2 p-5 rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="text-2xl font-bold">Appointment History</p>
          <HistoryTable />
        </div>
      </div>
    </div>
  );
}

export default Profile;
