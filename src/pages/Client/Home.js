import React from "react";
import bgHero from "../../assets/bg-hero.webp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TeethChart from "../../components/TeethChart";

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
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      ></div>
      <div className="h-full flex justify-center items-center ">
        <div className="w-[80%] h-[80%] flex flex-col items-center justify-center gap-5 ">
          <p className=" text-5xl font-bold text-cyan-500 font-[Poppins]">
            Your Trusted Partner for Exceptional Dental Care
          </p>
          <p className=" text-lg w-[80%] text-center text-white font-[Poppins]">
            At J.V. Ambi Dental Clinic, we believe in crafting more than just
            beautiful smiles; we're dedicated to fostering lasting oral health.
            Our team of experienced professionals is committed to providing you
            with personalized and exceptional dental care. From routine
            check-ups to advanced treatments, we prioritize your well-being,
            ensuring a comfortable and stress-free experience at every visit.
            Trust us to be your partners on the journey to a radiant, healthy
            smile.
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
