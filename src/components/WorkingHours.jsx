import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsShare } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
const WorkingHours = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date());
  const [openOrCLose, setOpenOrClose] = useState(false);
  const [workingPeriod,setWorkingPeriod] = useState("8:00/23:30")
  useEffect(() => {
    const timer = setInterval(() => {
      const hour = time.getHours();

      if (hour >= 8 && hour < 23) {
        setOpenOrClose(true);
      } else {
        setOpenOrClose(false);
      }

      setTime(new Date());
      // console.log(time)
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-[90%] h-auto rounded-xl bg-white p-4 shadow-[0px_4px_26px_0px_rgba(0,0,0,0.1)]  mb-4 sm:w-140">
      <div className="flex items-center justify-between w-full mb-3">
        <div className="flex items-center justify-start w-full gap-3 ">
          <GoClock size={22} className="text-[#e2d8b7] " />
          <h2 className="text-[#212529] text-[16px] font-semibold">
            {t("common:workingHours")}
          </h2>
        </div>
        <div
          className={`w-2 h-2 ${openOrCLose ? "bg-[#32CD32]" : "bg-[#ff0000]"}  rounded-full flex items-center justify-center statusBar`}
        ></div>
      </div>

      <div className="flex items-center justify-center flex-col w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-normal text-[#212529]">
            {t("common:openHours")}
          </span>
          <span className="text-[14px] font-medium text-[#212529]">
            {workingPeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
