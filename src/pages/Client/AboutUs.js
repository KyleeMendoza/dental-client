import React from "react";
import aboutBg from "../../assets/about-hero.webp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="h-full relative bg-blue-50">
      <div className="h-full flex justify-center items-center ">
        <div className="w-[75%] h-[75%] flex justify-center items-center">
          <div className="flex flex-col justify-center gap-5 font-['Poppins']">
            <p className=" text-5xl font-bold text-cyan-500">About Us</p>
            <p className=" text-3xl font-bold">Discover Our Dental Expertise</p>
            <p className=" text-md w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              risus sed vulputate odio ut enim. Dictum varius duis at
              consectetur lorem donec massa. Aliquam nulla facilisi cras
              fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit
              eget gravida cum sociis natoque penatibus et. Tellus in hac
              habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl
              nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat
              interdum varius sit amet mattis vulputate.
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
          <img src={aboutBg} alt="Picture" className="h-[30rem] rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
