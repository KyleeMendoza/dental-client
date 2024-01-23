import React from "react";
import extraction from "../../assets/tooth-extraction.png";
import pasta from "../../assets/tooth-pasta.png";
import cleaning from "../../assets/tooth-cleaning.png";
import { Button } from "@mui/material";
import PriceModal from "../../components/PriceModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Services() {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token

  const serviceList = [
    {
      service: "Tooth Extraction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
      price: "₱500",
      caption:
        "Teeth are examined, anesthetized, and extracted using specialized tools. Gauze controls bleeding, and post-extraction care instructions are given. Follow-up appointments monitor healing, with tooth replacement options discussed if necessary.",
    },
    {
      service: "Pasta Filing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
      price: "₱500",
      caption:
        "Dental pasta filling involves the careful mixing of materials to fill gaps or cavities in teeth. The filled area is then treated and cured, restoring the tooth's integrity and preventing further decay.",
    },
    {
      service: "Teeth Cleaning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
      price: "₱500",
      caption:
        "Teeth cleaning, a routine dental procedure, entails thorough removal of plaque and tartar. Using specialized tools, the dentist or dental hygienist cleans and polishes the teeth, promoting oral health and a brighter smile.",
    },
  ];

  const serviceImg = [extraction, pasta, cleaning];

  return (
    <div className="h-full border-2 border-red-600">
      <div className="h-full flex flex-col gap-20 pb-10 items-center border-2 border-green-600">
        <div className="flex w-full items-center justify-center bg-cyan-500 ">
          <div className="py-10 w-[70%] flex flex-col gap-5 text-center font-['Poppins'] ">
            <p className="text-5xl text-white font-bold">Services</p>
            <p className="text-lg text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              risus sed vulputate odio ut enim. Dictum varius duis at
              consectetur lorem donec massa. Aliquam nulla facilisi cras
              fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit
              eget gravida cum sociis natoque penatibus et. Tellus in hac
              habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl
              nunc
            </p>
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-20 ">
          {serviceList.map((service, index) => (
            <div
              className="service-item flex justify-center items-center "
              key={index}
            >
              <div className="flex flex-col justify-center gap-5 font-['Poppins']">
                <p className="text-2xl font-bold">{service.service}</p>
                <p className="text-sm w-[80%]">{service.description}</p>
                <div className="flex gap-2">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#06b6d4" }}
                    onClick={() => {
                      if (token) {
                        navigate("/Appointment");
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Book
                  </Button>
                  <PriceModal service={service} />
                </div>
              </div>
              <img
                src={serviceImg[index]}
                alt="Picture"
                className="w-[25rem] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
