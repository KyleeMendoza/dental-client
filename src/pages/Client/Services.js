import React from "react";
import extraction from "../../assets/tooth-extraction.png";
import { Button } from "@mui/material";

function Services() {
  const serviceList = [
    {
      service: "Tooth Extraction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
    },
    {
      service: "Pasta Filing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
    },
    {
      service: "Teeth Cleaning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis risus sed vulputate odio ut enim. Dictum varius duis at consectetur lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis hendrerit dolor magna eget. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tempor id eu nisl nunc. Aliquam purus sit amet luctus. Proin libero nunc consequat interdum varius sit amet mattis vulputate.",
    },
  ];
  return (
    <div className="h-full border-2 border-red-600">
      <div className="h-full flex flex-col gap-20 py-10 items-center border-2 border-green-600">
        <div className="w-[85%] flex flex-col gap-2 text-center font-['Poppins'] ">
          <p className="text-5xl font-bold">Services</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            risus sed vulputate odio ut enim. Dictum varius duis at consectetur
            lorem donec massa. Aliquam nulla facilisi cras fermentum. Mi quis
            hendrerit dolor magna eget. Pellentesque elit eget gravida cum
            sociis natoque penatibus et. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Tempor id eu nisl nunc
          </p>
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
                  <Button variant="contained">Book</Button>
                  <Button variant="outlined">Learn More</Button>
                </div>
              </div>
              <img
                src={extraction}
                alt="Picture"
                className="w-[25rem] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              />
            </div>
          ))}
          {/* <div className="service-item flex justify-center items-center border-2 border-red-600">
            <div className="flex flex-col justify-center gap-5 font-['Poppins'] ">
              <p className=" text-3xl font-bold">Tooth Extraction</p>
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
              <div className="flex gap-2">
                <Button variant="contained">Book</Button>
                <Button variant="outlined">Learn More</Button>
              </div>
            </div>
            <img
              src={extraction}
              alt="Picture"
              className="w-[30rem] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Services;
