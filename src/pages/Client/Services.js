import React from "react";
import extraction from "../../assets/tooth-extraction.webp";
import pasta from "../../assets/tooth-pasta.webp";
import cleaning from "../../assets/tooth-cleaning.webp";
import { Button } from "@mui/material";
import PriceModal from "../../components/PriceModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import serviceHeroBg from "../../assets/serviceHero-bg.webp";

function Services({ handleOpen }) {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token

  const serviceList = [
    {
      service: "Tooth Extraction",
      description:
        "Our skilled dental professionals are committed to providing compassionate care throughout the tooth extraction process. Whether addressing problematic wisdom teeth, severely damaged teeth, or part of a comprehensive treatment plan, we prioritize your comfort and well-being. Utilizing the latest techniques, we ensure a gentle and precise extraction experience. We take the time to discuss your case thoroughly, addressing any concerns and providing clear post-extraction care instructions for optimal healing. Trust J.V. Ambi Dental Clinic for expert tooth extractions that prioritize your comfort and contribute to your ongoing oral health journey.",
      price: "₱500",
      caption:
        "Experience compassionate and expert tooth extractions at J.V. Ambi Dental Clinic, where precision meets comfort. Trust our skilled professionals to prioritize your well-being, making the process gentle and worry-free.",
    },
    {
      service: "Pasta Filing",
      description:
        "We prioritize your oral well-being with our advanced dental filling services. Our experienced team utilizes state-of-the-art materials and techniques to provide durable and aesthetically pleasing solutions for tooth restoration. Whether addressing cavities, minor fractures, or other dental concerns, our dental fillings seamlessly blend with your natural teeth, ensuring a comfortable fit and long-lasting results. Trust us to deliver personalized care, preserving the integrity of your smile while promoting optimal oral health. Experience the confidence of a restored and healthy smile with our precision-crafted dental fillings at J.V. Ambi Dental Clinic.",
      price: "₱500",
      caption:
        "Elevate your oral health with our advanced dental fillings at J.V. Ambi Dental Clinic. Crafted with precision and using cutting-edge materials, our fillings seamlessly restore teeth, ensuring lasting results and a confident smile.",
    },
    {
      service: "Teeth Cleaning",
      description:
        "Our professional teeth cleaning services are designed to rejuvenate your oral health and leave you with a radiant, confident smile. Our skilled dental hygienists employ the latest techniques and advanced tools to meticulously remove plaque, tartar, and surface stains, ensuring a thorough cleaning experience. Beyond the surface, we focus on preventive care, offering insights and personalized tips for maintaining optimal oral hygiene between visits. With our gentle yet effective approach, you can expect a refreshing and comfortable teeth cleaning session that contributes to the longevity of your smile. Elevate your oral care routine with J.V. Ambi Dental Clinic and rediscover the joy of a revitalized, sparkling smile.",
      price: "₱500",
      caption:
        "Revitalize your smile at J.V. Ambi Dental Clinic with our professional teeth cleaning services. Meticulously removing plaque and stains, our skilled hygienists provide a refreshing and comfortable experience, promoting long-term oral health.",
    },
  ];

  const serviceImg = [extraction, pasta, cleaning];

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
                        handleOpen();
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
