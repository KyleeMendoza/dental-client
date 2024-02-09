import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import contactUsBg from "../../assets/contact-bg.jpg";

function ContactUs() {
  return (
    <div className="h-full ">
      <div className="h-full flex flex-col gap-12 pb-10 items-center  bg-blue-50">
        <div className="flex w-full items-center justify-center relative ">
          <img
            src={contactUsBg}
            alt="Picture"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></div>
          <div className="py-10 w-[70%] flex flex-col gap-5 text-center font-['Poppins'] z-20">
            <p className="text-5xl text-white font-bold">Contact Us</p>
            <p className="text-lg text-white">
              Smile with us! Connect on social media for dental tips, updates,
              and a glimpse into our world. Follow us to stay in the loop and
              schedule your next appointment with ease.
            </p>
            <div>
              <p className="text-sm text-white">
                Unit B 13 Press Drive St, Fourth Estate Subdivision Sucat
                Paranaque
              </p>
              <p className="text-sm text-white">
                Cellphone Number: 09153688986, 09615555587
              </p>
              <p className="text-sm text-white">
                Appointment Hotline: 02-7880978
              </p>
              {/* <p className="text-sm text-white">
                facebook.com/AmbiDentalClinicPh
              </p> */}
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
