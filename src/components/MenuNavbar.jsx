import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { VscSearchCompact } from "react-icons/vsc";
import { IoGridOutline } from "react-icons/io5";
import category from "../data/categoryData.json";
import FoodData from "../data/foodData.json";

const SCROLL_THRESHOLD = 80;

const MenuNavbar = ({
  gridSel,
  setGridSel,
  setLangSwitcher,
  filteredSelectedLang,
  selectedLang,
  inputVal,
  setInputVal,
  setMenuLength,
  setSelectedCat,
  selectedCat,
  categoryRefs,
}) => {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [catHeight, setCatHeight] = useState(0);
  const catRef = useRef(null);
  const ticking = useRef(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const measure = () => {
      if (catRef.current && !isFixed) {
        setCatHeight(catRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isFixed, selectedLang]);

  useEffect(() => {
    const update = () => {
      setIsFixed(window.scrollY > SCROLL_THRESHOLD);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    update(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full relative">
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
      `}</style>

      <div
        className={`flex items-center justify-between w-full bg-[#F8F9FA] p-4 transition-opacity duration-300 ${
          isFixed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-3 justify-center">
          <Link
            to="/"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e2d8b7]"
            />
            <input
              value={inputVal}
              onChange={(e) => {
                const currentValue = e.target.value;
                setInputVal(currentValue);

                const filteredProducts = FoodData.products.filter((item) =>
                  item.name[selectedLang]
                    .toLowerCase()
                    .includes(currentValue.toLowerCase())
                );

                setMenuLength(filteredProducts.length);
              }}
              type="text"
              placeholder={t("menu:inputPlaceholder")}
              className="bg-white rounded-[50px] focus:outline-[#EBE3CC] placeholder:text-[14px] placeholder:self-start placeholder:font-normal placeholder:text-[#757575] indent-10 lg:placeholder:text-[15px] w-36.5 h-11 sm:w-59.25 sm:h-11 lg:w-64.75 lg:h-12.5"
            />
          </div>

          <img
            onClick={() => setLangSwitcher(true)}
            src={filteredSelectedLang.countryUrl}
            alt="language"
            className="flex object-cover w-9 h-9 cursor-pointer border-2 border-[#DFE0E1] rounded-full"
          />

          <div
            onClick={() => setGridSel(gridSel === "Grid2" ? "Grid1" : "Grid2")}
            className="flex items-center justify-center cursor-pointer rounded-full w-10 h-10 bg-[#EBECED] transition duration-200 hover:bg-[#DFE0E1]"
          >
            {gridSel === "Grid2" ? <RxHamburgerMenu /> : <IoGridOutline />}
          </div>
        </div>
      </div>

      {isFixed && <div style={{ height: catHeight }} className="w-full" />}

      <div
        ref={catRef}
        style={isFixed ? { animation: "navSlideDown 0.3s ease-out" } : undefined}
        className={`w-full overflow-x-auto z-30 bg-[#F8F9FA] px-3 py-1.5 border-t border-[#EBECED] shadow-[0_6px_10px_rgba(0,0,0,0.2)] ${
          isFixed ? "fixed top-0 left-0 right-0" : ""
        }`}
      >
        <div className="flex w-max items-center gap-2">
          {category.categories.map((item, id) => (
            <span
              onClick={() => {
                if (id === 0) handleScrollToTop();
                const title = item.title[selectedLang];
                setSelectedCat(title);
                categoryRefs.current[title]?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              key={id}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-[50px] cursor-pointer text-[15px] font-medium ${
                selectedCat === item.title[selectedLang]
                  ? "text-white bg-[#E2D8B7]"
                  : "text-[#212529]"
              }`}
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