import React, { useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import restaurantLogo from "../assets/RestaurantLogo.png";
import HomeInterierNavbar from "../components/HomeInterierNavbar";
import LinkToMenu from "../components/LinkToMenu";
import { GiRoundStar } from "react-icons/gi";
import ContactUs from "../components/ContactUs";
import LanguageChanger from "../components/LanguageChanger";
const HomeInterier = () => {
  const { t, i18n } = useTranslation();
  const [langSwitcher, setLangSwitcher] = useState(false);
  return (
    <>
      <Helmet>
        <title>Gülüstan Garden - Menu, Prices & Restaurant</title>
        <meta
          name="description"
          content="Gülüstan Garden · SƏHƏR YEMƏKLƏRİ · SOYUQ QƏLYANALTILAR · MƏZƏLƏR · ŞORBALAR · SALATLAR · TAVA YEMƏKLƏRİ · QAZAN YEMƏKLƏRİ · KABABLAR ..."
        />
      </Helmet>
      <div className="flex flex-col items-center w-full justify-center overflow-x-hidden relative">
        {langSwitcher && (
          <>
            <div className="fixed inset-0 bg-black/50 z-20"></div>
            <LanguageChanger langSwitcher={langSwitcher} setLangSwitcher={setLangSwitcher}/>
          </>
        )}
        <div className="flex flex-col items-center justify-center w-full">
          <HomeInterierNavbar langSwitcher={langSwitcher} setLangSwitcher={setLangSwitcher}/>
          <div className="flex flex-col items-center justify-center  w-[50%] -mt-4 z-10 ">
            <div className="w-25 h-25 border-2 border-white rounded-full overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
              <img
                src={restaurantLogo}
                className="flex rounded-full overflow-hidden object-cover"
              />
            </div>
            <h2 className="font-bold text-[28px] text-center text-[#212529]">
              {t(`restaurantName`)}
            </h2>
            <p className="text-[16px] font-normal text-[#908e8e] text-center my-1">
              {t(`welcomeDescription`)}
            </p>
            <div className="flex flex-col items-center justify-center w-full gap-3 my-3">
              <div className="flex items-center justify-center gap-2">
                <GiRoundStar className="text-[#FFD700] w-9 h-9 cursor-pointer" />
                <GiRoundStar className="text-[#FFD700] w-9 h-9 cursor-pointer" />
                <GiRoundStar className="text-[#FFD700] w-9 h-9 cursor-pointer" />
                <GiRoundStar className="text-[#FFD700] w-9 h-9 cursor-pointer" />
                <GiRoundStar className="text-[#FFD700] w-9 h-9 cursor-pointer" />
              </div>
              <p className="font-medium text-[16px] text-center text-[#212529]">
                {t(`rateUs`)}
              </p>
            </div>
          </div>
          <LinkToMenu />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default HomeInterier;
