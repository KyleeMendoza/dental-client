import React, { useEffect, useState } from "react";
import extraction from "../../assets/tooth-extraction.webp";
import pasta from "../../assets/tooth-pasta.webp";
import cleaning from "../../assets/tooth-cleaning.webp";
import { Button } from "@mui/material";
import PriceModal from "../../components/PriceModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import serviceHeroBg from "../../assets/serviceHero-bg.webp";

import services from "../../services/services.service";

function Services({ handleOpen }) {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const result = await services.serviceList();
      if (result) {
        setServiceData(result.FindAllServices);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="h-full border-2 border-red-600">
      <div className="h-full flex flex-col gap-20 pb-10 items-center border-2 border-green-600 bg-blue-50 ">
        <div className="flex w-full items-center justify-center relative">
          <img
            src={serviceHeroBg}
            alt="Picture"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          ></div>
          <div className="py-10 w-[85%] flex flex-col gap-5 text-center font-['Poppins'] z-20">
            <p className="text-5xl text-white font-bold">Services</p>
            <p className="text-lg text-white">
              Step into a world of exceptional dental care at J.V. Ambi Dental
              Clinic. Our array of services is designed to cater to your unique
              oral health needs, ensuring a lifetime of confident and healthy
              smiles. From routine check-ups and preventive care to cutting-edge
              cosmetic and restorative treatments, we provide a holistic
              approach to dental well-being. Experience the precision of our
              state-of-the-art technology coupled with the expertise of our
              skilled professionals. Whether you're looking to enhance your
              smile, address dental concerns, or maintain optimal oral health,
              our diverse range of services is tailored to meet your individual
              requirements. Explore the possibilities with J.V. Ambi Dental
              Clinic — your trusted partner on the journey to a brighter,
              healthier smile!
            </p>
          </div>
        </div>

        <div className="w-[70%] flex flex-col gap-20 ">
          {serviceData.map((service, index) => (
            <div className="service-item flex justify-center" key={index}>
              <div
                className={`flex flex-col justify-center gap-5 font-['Poppins'] px-4 py-2 ${
                  index % 2 === 0
                    ? "items-start border-l-4 border-[#06b6d4] rounded-lg"
                    : "items-end border-r-4 border-[#06b6d4] rounded-lg"
                }`}
              >
                <p className="text-4xl font-bold">{service.service_name}</p>
                <p
                  className={`text-lg w-[80%] ${
                    index % 2 === 0 ? "text-start" : "text-end"
                  }`}
                >
                  {service.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#06b6d4" }}
                    onClick={() => {
                      if (token) {
                        navigate("/Appointment");
                      } else {
                        handleOpen();
                      }
                    }}
                  >
                    Book
                  </Button>
                  <PriceModal service={service} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
