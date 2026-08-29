import React, { useRef } from "react";
import FoodData from "../data/foodData.json";
import categoryData from "../data/categoryData.json";
import MenuNavbar from "../components/MenuNavbar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../components/LanguageChanger";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import CartLink from "../components/CartLink";
import Basket from "../components/Basket";
import clickVoice from "../assets/confirmedVoice.mp3";
import ScrollUpBtn from "../components/ScrollUpBtn";
import SearchResult from "../components/SearchResult";
const Menu = ({
  filteredSelectedLang,
  langSelData,
  langSwitcher,
  setLangSwitcher,
  selectedLang,
  setSelectedLang,
}) => {
  const { t, i18n } = useTranslation();
  const categoryRefs = useRef({});
  const [selectedCat, setSelectedCat] = useState(null);
  const [inputVal, setInputVal] = useState(""); // input value saxlayan
  const [gridSel, setGridSel] = useState("Grid2"); // productlar grid-cols-1 ve ya grid-cols-2 olmasini deyisen
  const [basketStatus, setBasketStatus] = useState(false); // basketin aciq olub-olmamasinin yoxlayan
  const [basketEl, setBasketEl] = useState([]); // basket icine elave edilen elementleri saxlayan array
  const [totalBasket, setTotalBasket] = useState(0); //basket icindeki element saylari
  const [totalBasketPrice, setTotalBasketPrice] = useState(0); // cemi odenilecek mebleg
  const [showBtn, setShowBtn] = useState(false);
  const [confirm, setConfirm] = useState();
  const [menuLength, setMenuLength] = useState(0);
  const handleConfirm = (id) => {
    setConfirm(id);

    setTimeout(() => {
      setConfirm();
    }, 1000);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToBasket = (product, price) => {
    setBasketEl((prev) => {
      const foundingProduct = prev.find((item) => item.id === product.id);

      if (foundingProduct) {
        return prev.map((item) => {
          return item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
    setTotalBasket(totalBasket + 1);
    setTotalBasketPrice(totalBasketPrice + price);
  };

  const changeCount = (id, amount, price) => {
    if (amount > 0) {
      setTotalBasket(totalBasket + 1);
      setTotalBasketPrice(totalBasketPrice + price);
    } else {
      setTotalBasket(totalBasket - 1);
      setTotalBasketPrice(totalBasketPrice - price);
    }
    setBasketEl((prevBasket) =>
      prevBasket
        .map((item) => {
          if (item.id === id) {
            const newCount = item.count + amount;

            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const deleteItemInBasket = (index, price) => {
    setBasketEl((prev) => prev.filter((item) => item.id != index));
    setTotalBasketPrice(totalBasketPrice - price);
  };

  const handleTabClick = (index, event) => {
    setActiveTab(index);

    event.currentTarget.scrollIntoView({
      behavior: "smooth", // Hamar scroll animasiyası
      inline: "center", // Horizonal scroll-da elementi mərkəzə gətirir
      block: "nearest", // Şaquli (vertical) scroll-a təsir etmir
    });
  };
  return (
    <div className="flex flex-col w-full items-center justify-center overflow-x-hidden relative page-fade">
      {langSwitcher && (
        <>
          <div className="fixed inset-0 bg-black/50 z-25"></div>
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
        categoryRefs={categoryRefs}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
        setMenuLength={setMenuLength}
        gridSel={gridSel}
        setGridSel={setGridSel}
        inputVal={inputVal}
        setInputVal={setInputVal}
        filteredSelectedLang={filteredSelectedLang}
        selectedLang={selectedLang}
        setLangSwitcher={setLangSwitcher}
      />
      <div className="flex items-center justify-center gap-2 py-2 border-b border-[#EBECED] w-full">
        <BsFillInfoCircleFill className="text-[#E2D8B7]" />
        <p className="text-[#495057] font-normal text-center text-[14.4px]">
          {t("menu:serviceFeeDescription")}
        </p>
        <BsFillInfoCircleFill className="text-[#E2D8B7]" />
      </div>
      {inputVal && <SearchResult menuLength={menuLength} inputVal={inputVal} />}

      {categoryData.categories
        .slice(1, 16)
        .filter((cat) =>
          FoodData.products.some(
            (item) =>
              item.categoryId === cat.id &&
              item.name[selectedLang]
                ?.toLowerCase()
                .includes(inputVal.toLowerCase()),
          ),
        )
        .map((cat) => {
          const filteredProducts = FoodData.products.filter(
            (item) =>
              item.categoryId === cat.id &&
              item.name[selectedLang]
                ?.toLowerCase()
                .includes(inputVal.toLowerCase()),
          );

          return (
            <div
              key={cat.id}
              ref={(el) => {
                categoryRefs.current[cat.title[selectedLang]] = el;
              }}
              className="flex flex-col items-center justify-center gap-8 w-full  mb-15 px-5 sm:px-10 scroll-mt-14"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <h2 className="mt-6 mb-4 text-[20px] w-full text-[#212529] font-bold sm:text-[28.8px]">
                  {cat.title[selectedLang]}
                </h2>
                <div
                  className={`grid ${
                    gridSel === "Grid1" ? "grid-cols-1" : "grid-cols-2"
                  } gap-3 justify-items-center w-full md:gap-8`}
                >
                  {filteredProducts.map((item) => (
                    <div
                      key={item.id || item.name[selectedLang]}
                      className="flex flex-col items-start justify-start w-full h-full bg-white shadow-md rounded-[10px] cursor-pointer transition duration-200 transform hover:-translate-y-1 overflow-hidden md:w-85  lg:w-full hover:shadow-lg"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name["az"]}
                        className={`w-full ${gridSel === "Grid1" ? "h-70" : "h-33.5"} object-cover sm:h-64 lg:h-140`}
                      />
                      <div className="flex flex-col items-center justify-between gap-6 w-full p-4  transition duration-200 ">
                        <h2 className="text-[14.4px] w-full leading-4.25 text-[#212529] font-semibold">
                          {item.name[selectedLang]}
                        </h2>
                        <div className="flex items-center justify-between w-full mt-auto">
                          <span className="font-bold text-[16px] text-[#e2d8b7]">
                            {item.price} ₼
                          </span>

                          {confirm && item.id === confirm ? (
                            <span
                              onClick={() => {
                                addToBasket(item, item.price);
                                handleConfirm();
                              }}
                              className="w-9 h-9 rounded-full bg-[#e2d8b7] flex items-center justify-center cursor-pointer transform group transition duration-200 hover:scale-110 bg-[linear-gradient(45deg,rgb(40,167,69),rgb(32,201,151),rgb(40,167,69))]"
                            >
                              <FaCheck className="text-white" />
                            </span>
                          ) : (
                            <span
                              onClick={() => {
                                addToBasket(item, item.price);
                                handleConfirm(item.id);
                              }}
                              className={`w-9 h-9 rounded-full bg-[#e2d8b7] flex items-center justify-center cursor-pointer transform group transition duration-200 hover:scale-110 hover:bg-[linear-gradient(45deg,rgb(40,167,69),rgb(32,201,151),rgb(40,167,69))] `}
                            >
                              <CgMathPlus
                                size={17}
                                className="text-white transition duration-200 transform group-hover:rotate-22"
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

      <CartLink
        totalBasketPrice={totalBasketPrice}
        setTotalBasketPrice={setTotalBasketPrice}
        totalBasket={totalBasket}
        setTotalBasket={setTotalBasket}
        basketStatus={basketStatus}
        setBasketStatus={setBasketStatus}
      />
      {basketStatus && (
        <>
          <div className="fixed inset-0 bg-black/50 z-25"></div>
          <Basket
            changeCount={changeCount}
            basketEl={basketEl}
            setBasketEl={setBasketEl}
            basketStatus={basketStatus}
            setBasketStatus={setBasketStatus}
            totalBasket={totalBasket}
            setTotalBasket={setTotalBasket}
            totalBasketPrice={totalBasketPrice}
            setTotalBasketPrice={setTotalBasketPrice}
            selectedLang={selectedLang}
            deleteItemInBasket={deleteItemInBasket}
          />
        </>
      )}
      {showBtn && <ScrollUpBtn />}
    </div>
  );
};

export default Menu;
