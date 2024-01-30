import React from "react";
import aboutBg from "../../assets/about-hero.webp";
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
              Welcome to the rich narrative of Smile Dental Clinic, a journey
              that commenced decades ago within the walls of a modest clinic
              founded by the pioneering Dr. Emily Johnson. In the early chapters
              of our story, Dr. Johnson, a visionary dentist with a passion for
              transformative smiles, envisioned the creation of a center of
              excellence in oral health. Fueled by a profound commitment to
              patient well-being, precision dentistry, and personalized
              attention, she set the cornerstone for what would evolve into the
              distinguished Smile Dental Clinic. From those humble beginnings,
              our clinic has woven its narrative through the fabric of time,
              growing and adapting to the evolving landscape of dental care.
              Today, Smile Dental Clinic stands as a testament to Dr. Johnson's
              dream, a beacon of oral health where passion, proficiency, and the
              unique needs of each individual converge in harmonious excellence.
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
        <div className="w-[75%] flex flex-row-reverse justify-center items-start gap-20">
          <div className="flex flex-col justify-center gap-5 font-['Poppins']">
            <p className=" text-5xl font-bold text-cyan-500">Our Mission</p>
            {/* <p className=" text-3xl font-bold">Discover Our Dental Expertise</p> */}
            <p className=" text-md w-[80%]">
              At Smile Dental Clinic, our vision is to be the forefront of
              dental excellence, redefining oral healthcare by fostering vibrant
              smiles and optimal well-being. We aspire to create an environment
              where innovation, compassion, and personalized care converge
              seamlessly, setting the standard for comprehensive dental
              services. Smile Dental envisions a future where every patient
              experiences the transformative power of a healthy, beautiful
              smile, supported by a dedicated team committed to excellence.
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
        <div className="w-[75%] flex justify-center items-start">
          <div className="flex flex-col justify-center gap-5 font-['Poppins'] ">
            <p className=" text-5xl font-bold text-cyan-500">Our Vision</p>
            {/* <p className=" text-3xl font-bold">Discover Our Dental Expertise</p> */}
            <p className=" text-md w-[80%]">
              Our mission at Smile Dental is to provide exceptional and
              individualized dental care that transcends traditional
              expectations. We are committed to delivering the highest quality
              of services, leveraging cutting-edge technology, and staying at
              the forefront of dental advancements. Smile Dental aims to
              cultivate a patient-centric approach, ensuring each individual
              receives tailored treatments that address their unique needs. Our
              mission extends beyond routine procedures; we seek to educate and
              empower our community on the importance of proactive oral health
              practices. Through unwavering dedication, continuous learning, and
              a genuine passion for our craft, Smile Dental is dedicated to
              enhancing lives one smile at a time.
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
      </div>
    </div>
  );
}

export default AboutUs;
