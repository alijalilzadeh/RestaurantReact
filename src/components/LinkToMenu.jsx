import React from "react";
import { useTranslation } from "react-i18next";
import { IoBookOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
const LinkToMenu = () => {
  const {t,i18n} = useTranslation()
  return (
    <Link to='/menu' className="flex items-center justify-center rounded-xl p-4 w-140 h-20 mb-8 relative transition duration-200 group shadow-md hover:bg-[#F9EEC9] bg-[#d5c89e] animated" >
      <div className="flex items-center w-9 h-9 justify-center rounded-lg mr-4  backdrop-blur-xs">
        <IoBookOutline className="w-5 h-5 text-white " />
      </div>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-white text-[17px] font-semibold">{t(`enterMenuTitle`)}</h2>
          <p className="text-white text-[13px] font-normal">{t(`enterMenuSubtitle`)}</p>
        </div>
        <SlArrowRight className="flex self-center text-white" />
      </div>
    </Link>
  );
};

export default LinkToMenu;
