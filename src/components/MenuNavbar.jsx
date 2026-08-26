import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { VscSearchCompact } from "react-icons/vsc";
import category from "../data/categoryData.json";
const MenuNavbar = ({
  setLangSwitcher,
  filteredSelectedLang,
  selectedLang,
}) => {
  const { t, i18n } = useTranslation();
  const [selectedCat, setSelectedCat] = useState(null);
  return (
    <div className="flex flex-col items-center justify-center w-full relative ">
      <div className="flex items-center justify-between w-full bg-[#F8F9FA] p-4 ">
        <div className="flex items-center gap-3 justify-center">
          <Link
            to="/"
            reloadDocument
            className="flex items-center justify-center rounded-full w-10 h-10 bg-[#EBECED] transition duration-200 hover:bg-[#DFE0E1]"
          >
            <BsArrowLeft size={16} className="text-[#212529]" />
          </Link>
          <img
            src="https://monyo.az/v4/uploads/a_2253_logo.png?x=1750108022"
            alt="Gulustan Garden Logo"
            className="rounded-full w-9 h-9 flex object-cover shadow-md"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center relative">
            <VscSearchCompact
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E2DDD5]"
            />
            <input
              type="text"
              placeholder={t("menu:inputPlaceholder")}
              className="bg-white rounded-[50px] px-10 py-3 focus:outline-[#EBE3CC] placeholder:text-[15px] placeholder:font-normal placeholder:text-[#757575]"
            />
          </div>

          <img
            onClick={() => setLangSwitcher(true)}
            src={filteredSelectedLang.countryUrl}
            alt={filteredSelectedLang}
            className="flex object-cover w-9 h-9 cursor-pointer border-2 border-[#DFE0E1] rounded-full"
          />
          <div className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 bg-[#EBECED] transition duration-200 hover:bg-[#DFE0E1]">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto scrollbar-none p-3 border-t border-[#EBECED] shadow-[0_6px_10px_rgba(0,0,0,0.2)]">
        <div className="flex w-max items-center gap-2">
          {category.categories.map((item, id) => (
            <span
              onClick={() => setSelectedCat(item.title[selectedLang])}
              key={id}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-[50px] cursor-pointer text-[15px] font-medium ${selectedCat === item.title[selectedLang] ? "text-white bg-[#E2D8B7]" : "text-[#212529] "}`}
            >
              {item.title[selectedLang]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
