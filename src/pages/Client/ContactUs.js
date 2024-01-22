import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function ContactUs() {
  return (
    <div className="h-full border-2 border-red-600">
      <div className="h-full flex flex-col gap-12 pb-10 items-center border-2 border-green-600">
        <div className="flex w-full items-center justify-center bg-cyan-500 ">
          <div className="py-10 w-[70%] flex flex-col gap-5 text-center font-['Poppins'] ">
            <p className="text-5xl text-white font-bold">Contact Us</p>
            <p className="text-lg text-white">
              Smile with us! Connect on social media for dental tips, updates,
              and a glimpse into our world. Follow us to stay in the loop and
              schedule your next appointment with ease.
            </p>
            <div>
              <p className="text-sm text-white">
                123 Smile Street, Makati City, Metro Manila, Philippines
              </p>
              <p className="text-sm text-white">
                Main Clinic Line: +63 2 1234 5678
              </p>
              <p className="text-sm text-white">
                Appointment Hotline: +63 2 9876 5432
              </p>
              <p className="text-sm text-white">
                facebook.com/SmileCareManilaPH
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-20">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2 rounded-lg p-5 font-['Poppins'] border-2 border-blue-600 text-center">
              <LocationOnIcon style={{ fontSize: "3rem", color: "#06b6d4" }} />
              <p className="text-2xl font-bold">Location</p>
              <p>
                Visit us in person! Find our address here and let's make your
                dental care journey a personal experience.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg p-5 font-['Poppins'] border-2 border-blue-600 text-center">
              <AlternateEmailIcon
                style={{ fontSize: "3rem", color: "#06b6d4" }}
              />
              <p className="text-2xl font-bold">Social Media</p>
              <p>
                Stay connected and informed! Follow us on social media for
                updates, dental tips, and a dose of positivity. Let's build a
                community that smiles together!
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg p-5 font-['Poppins'] border-2 border-blue-600 text-center">
              <PhoneInTalkIcon style={{ fontSize: "3rem", color: "#06b6d4" }} />
              <p className="text-2xl font-bold">Phone Number</p>
              <p>
                Talk to us directly! Reach out via phone for appointments,
                questions, or just to chat. Your smile is our priority, and
                we're just a call away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
