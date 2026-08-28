import React from "react";
import { useTranslation } from "react-i18next";
import { BsShare } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const socialNetData = [
    {
      link: "https://www.instagram.com/gulustangarden?igsh=NTc4MTIwNjQ2YQ%3D%3D",
    },
    {
      link: "https://www.tiktok.com/@gulustangarden?_t=ZS-8xGMTWHj4Ce&_r=1",
    },
    {
      link: "https://api.whatsapp.com/send/?phone=994505995050&text=Salam+Monyodan+yaz%C4%B1ram%2C+",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[90%] h-auto rounded-xl bg-white p-4 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.1)] mb-15 sm:w-140" >
      <div className="flex items-center justify-start w-full gap-3 mb-3">
        <BsShare size={20} className="text-[#e2d8b7] " />
        <h2 className="text-[#212529] text-[16px] font-semibold">
          {t(`contactUs`)}
        </h2>
      </div>
      <div className="inline-flex items-center justify-center my-4 w-fit gap-3">
        <Link
          target="_blank"
          to={socialNetData[0].link}
          className={`flex items-center w-10 h-10 justify-center rounded-[50%] transition-all duration-400 bg-[#F0F0F0] group hover:bg-[#e2d8b7] hover:-translate-y-1.5`}
        >
          <FaInstagram
            size={16}
            className="text-[#666666] transition duration-200 group-hover:text-white"
          />
        </Link>
        <Link
          target="_blank"
          to={socialNetData[1].link}
          className={`flex items-center w-10 h-10 justify-center rounded-[50%] transition-all duration-400 bg-[#F0F0F0] group hover:bg-[#e2d8b7] hover:-translate-y-1.5`}
        >
          <IoLogoTiktok
            size={16}
            className="text-[#666666] transition duration-200 group-hover:text-white"
          />
        </Link>
        <Link
          target="_blank"
          to={socialNetData[2].link}
          className={`flex items-center w-10 h-10 justify-center rounded-[50%] transition-all duration-400 bg-[#F0F0F0] group hover:bg-[#e2d8b7] hover:-translate-y-1.5`}
        >
          <FaWhatsapp
            size={20}
            className="text-[#666666] transition duration-200 group-hover:text-white"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-normal text-[#212529]">
            {t(`phone`)}
          </span>
          <Link to='tel:+994505995050' className="text-[14px] font-normal text-[#212529] cursor-pointer transition duration-200 hover:underline">
            +994505995050
          </Link>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-normal text-[#212529]">
            {t(`address`)}
          </span>
          <Link to="https://www.google.com/maps/place/," className="text-[14px] font-normal text-[#212529] cursor-pointer transition duration-200 hover:underline">
            Bakıxanov qəsəbəsi,Ramiz Qəmbərov küçəsi / 1
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
