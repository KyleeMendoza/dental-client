import React from "react";
import aboutBg from "../../assets/about.jpg";
import team from "../../assets/our-team.jpg";
import mission from "../../assets/our-mission.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex flex-col justify-center items-center gap-24 py-20">
        <div className="w-[75%] flex justify-center items-start">
          <div className="flex flex-col justify-center gap-5 font-['Poppins'] ">
            <p className=" text-5xl font-bold text-cyan-500">About Us</p>
            <p className=" text-3xl font-bold">Discover Our Dental Expertise</p>
            <p className=" text-md w-[80%]">
              J.V. Ambi Dental Clinic in Paranaque, Providing Quality Dental
              Services to our patients for almost 28 years, We are committed to
              providing our patients with high quality, friendly professional
              service and the opportunity to seek high standard dental treatment
              at an affordable price. Our dental practitioner strives to provide
              patients with treatment options suitable to their individual
              needs. We develop this by listening to their concerns and working
              with them to help achieve a healthy mouth and attractive smile.
            </p>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#06b6d4" }}
                onClick={() => navigate("/Services")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <img
            src={aboutBg}
            alt="Picture"
            className="h-[30rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
        </div>
        <div className="bg-cyan-500 w-full flex justify-center items-center">
          <div className="text-center my-10 w-[80%]">
            <p className="font-[Poppins] text-4xl font-bold text-white">
              We build long lasting relationship by exceeding our patients
              expectation, create value for dentistry through education and
              enhance lives.
            </p>
          </div>
        </div>
        {/* <div className="w-[75%] flex flex-row-reverse justify-center items-start gap-20">
          <div className="flex flex-col justify-center gap-5 font-['Poppins']">
            <p className=" text-5xl font-bold text-cyan-500">Our Mission</p>
            <p className=" text-md w-[80%]">
              We build long lasting relationship by exceeding our patients
              expectation, create value for dentistry through education and
              enhance lives.
            </p>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#06b6d4" }}
                onClick={() => navigate("/Services")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <img
            src={aboutBg}
            alt="Picture"
            className="h-[30rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
        </div> */}
        {/* <div className="w-[75%] flex justify-center items-start">
          <div className="flex flex-col justify-center gap-5 font-['Poppins'] ">
            <p className=" text-5xl font-bold text-cyan-500">Our Team</p>
            <p className=" text-md w-[80%]">
              Our mission at J.V. Ambi Dental Clinic is to provide exceptional
              and individualized dental care that transcends traditional
              expectations. We are committed to delivering the highest quality
              of services, leveraging cutting-edge technology, and staying at
              the forefront of dental advancements. J.V. Ambi Dental Clinic aims
              to cultivate a patient-centric approach, ensuring each individual
              receives tailored treatments that address their unique needs. Our
              mission extends beyond routine procedures; we seek to educate and
              empower our community on the importance of proactive oral health
              practices. Through unwavering dedication, continuous learning, and
              a genuine passion for our craft, J.V. Ambi Dental Clinic is
              dedicated to enhancing lives one smile at a time.
            </p>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#06b6d4" }}
                onClick={() => navigate("/Services")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <img
            src={aboutBg}
            alt="Picture"
            className="h-[30rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
        </div> */}
        <div className="w-[75%] flex flex-col justify-center items-center gap-16 font-[Poppins]">
          <p className=" text-5xl font-bold text-cyan-500 ">Our Team</p>
          <div className="flex justify-center items-center gap-10">
            <img
              src={team}
              alt="Picture"
              className="h-[25rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            <img
              src={mission}
              alt="Picture"
              className="h-[25rem] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
          </div>
          <div className="flex flex-col gap-10  w-full justify-center items-center">
            <div className="flex flex-col  text-center">
              <p className="text-3xl font-bold text-cyan-500">
                Dr. Juliet Villavieja Ambi{" "}
              </p>
              <p>
                General Dentistry, Orthodontics, Cosmetic Dentistry, Oral
                Surgery, TMJ Neuro Muscular Dentistry
              </p>
            </div>
            <div className=" flex justify-around items-center gap-2 w-full">
              <div className="flex flex-col  text-center">
                <p className="text-2xl font-bold text-cyan-500">Gary Ambi</p>
                <p>Dental technician</p>
              </div>
              <div className="flex flex-col  text-center">
                <p className="text-2xl font-bold text-cyan-500">
                  Maria Lheonilyn Perillo-Seron{" "}
                </p>
                <p>Staff</p>
              </div>
              <div className="flex flex-col  text-center">
                <p className="text-2xl font-bold text-cyan-500">
                  Danielle Gulle
                </p>
                <p>Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
