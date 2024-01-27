import React from "react";
import bgHero from "../../assets/bg-hero.webp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-full relative">
      <img
        src={bgHero}
        alt="Picture"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>
      <div className="h-full flex justify-center items-center ">
        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center gap-5">
          <p className=" text-5xl font-bold text-cyan-500">
            Lorem ipsum dolor sit amet
          </p>
          <p className=" text-lg w-[80%] text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            risus sed vulputate odio ut enim. Dictum varius duis at consectetur
            lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis
            hendrerit dolor magna eget. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet
            luctus. Proin libero nunc consequat interdum varius sit amet mattis
            vulputate.
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#06b6d4" }}
            onClick={() => navigate("/Services")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
