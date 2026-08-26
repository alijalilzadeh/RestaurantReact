import React from "react";
import FoodData from "../data/foodData.json";
import categoryData from "../data/categoryData.json";
import MenuNavbar from "../components/MenuNavbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../components/LanguageChanger";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
const Menu = () => {
  const langSelData = [
    {
      shortCase: "az",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/16021/16021914.png",
      country: "Azərbaycanca",
    },
    {
      shortCase: "en",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/8363/8363562.png",
      country: "English",
    },
    {
      shortCase: "ru",
      countryUrl: "https://cdn-icons-png.flaticon.com/128/4628/4628645.png",
      country: "Русский",
    },
  ];

  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("az");
  const filteredSelectedLang = langSelData.find(
    (item) => item.shortCase === selectedLang,
  );
  const [langSwitcher, setLangSwitcher] = useState(false);
  return (
    <div className="flex flex-col w-full items-center justify-center overflow-x-hidden relative">
      {langSwitcher && (
        <>
          <div className="fixed inset-0 bg-black/50 z-20"></div>
          <LanguageChanger
            filteredSelectedLang={filteredSelectedLang}
            langSelData={langSelData}
            langSwitcher={langSwitcher}
            setLangSwitcher={setLangSwitcher}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        </>
      )}
      <MenuNavbar
        filteredSelectedLang={filteredSelectedLang}
        selectedLang={selectedLang}
        setLangSwitcher={setLangSwitcher}
      />
      <div className="flex items-center justify-center gap-2 py-2 border-b border-[#EBECED] w-full">
        <BsFillInfoCircleFill className="text-[#E2D8B7]" />
        <p className="text-[#495057] font-normal text-[14.4px]">
          {t("menu:serviceFeeDescription")}
        </p>
      </div>
      {categoryData.categories.slice(1, 16).map((cat, i) => (
        <div className="flex flex-col items-center justify-center gap-8 w-full px-10">
          <div className="flex flex-col items-start justify-start w-full">
            <h2 className="mt-6 mb-4 text-[28.8px] w-full text-[#212529] font-bold">
              {cat.title[selectedLang]}
            </h2>
            <div className="grid grid-cols-2 gap-8 justify-items-center w-full ">
              {FoodData.products
                .filter((item) => item.categoryId === cat.id)
                .map((item, id) => (
                  <div
                    key={id}
                    className="flex flex-col items-start justify-start w-full  bg-white rounded-[10px]  overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name[selectedLang]}
                      className="w-full h-140 object-cover"
                    />
                    <div className="flex flex-col items-center justify-between gap-6 w-full p-4 shadow-md transition duration-200 hover:shadow-lg">
                      <h2 className="text-[14.4px] w-full text-[#212529] font-semibold">{item.name[selectedLang]}</h2>
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-[16px] text-[#e2d8b7]">{item.price} ₼</span>
                        <span className={`w-9 h-9 rounded-full bg-[#e2d8b7] flex items-center justify-center cursor-pointer tranform group transition duration-200 hover:scale-110 hover:bg-[linear-gradient(45deg,rgb(40,167,69),rgb(32,201,151),rgb(40,167,69))]`}>
                          <CgMathPlus size={17} className="text-white transition duration-200 transform group-hover:rotate-22"/>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}

      {/* <div className="grid grid-cols-2 gap-3 justify-items-center w-full px-10">
                         {FoodData.products.map((item, id) => (
                          <div className="flex flex-col items-center justify-center w-full">
                            <img src={item.imageUrl} className="w-175 h-140 object-cover" />
                           <p>{item.name.az}</p>
                         </div>
                            ))}
                            </div> */}
    </div>
  );
};

export default Menu;
