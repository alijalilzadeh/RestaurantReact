import React from "react";
import FoodData from "../data/foodData.json";
import categoryData from "../data/categoryData.json";
import MenuNavbar from "../components/MenuNavbar";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../components/LanguageChanger";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import CartLink from "../components/CartLink";
import Basket from "../components/Basket";
import clickVoice from "../assets/confirmedVoice.mp3";
import ScrollUpBtn from "../components/ScrollUpBtn";
const Menu = ({
  filteredSelectedLang,
  langSelData,
  langSwitcher,
  setLangSwitcher,
  selectedLang,
  setSelectedLang,
}) => {
  const { t, i18n } = useTranslation();
  const [inputVal, setInputVal] = useState(""); // input value saxlayan
  const [gridSel, setGridSel] = useState("Grid2"); // productlar grid-cols-1 ve ya grid-cols-2 olmasini deyisen
  const [basketStatus, setBasketStatus] = useState(false); // basketin aciq olub-olmamasinin yoxlayan
  const [basketEl, setBasketEl] = useState([]); // basket icine elave edilen elementleri saxlayan array
  const [totalBasket, setTotalBasket] = useState(0); //basket icindeki element saylari
  const [totalBasketPrice, setTotalBasketPrice] = useState(0); // cemi odenilecek mebleg
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const addItemToBasket = (item,id,price) => {
    //baskete element elave eden funksiya
    setBasketEl((prev) => [...prev, item]);
    setTotalBasketPrice(totalBasketPrice + price);
  };
  const deleteItemInBasket = (index,price) => {
    // basketden elementleri silen funksiya
    setBasketEl((prev) => prev.filter((item) => item.id != index));
    setTotalBasketPrice(totalBasketPrice - price )
  };
  const calculateBasketPrice = () => {
    //basket price-ni hesablayan funksiya
    
    }
  // const clickAudio = new Audio(clickVoice);

  // const playVoice = () => {
  //   clickAudio.currentTime = 0;
  //   clickAudio.play().catch((error) => {
  //     console.error("Playback failed:", error);
  //   });
  // };
  return (
    <div className="flex flex-col w-full items-center justify-center overflow-x-hidden relative">
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
        <p className="text-[#495057] font-normal text-[14.4px]">
          {t("menu:serviceFeeDescription")}
        </p>
        <BsFillInfoCircleFill className="text-[#E2D8B7]" />
      </div>
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
              className="flex flex-col items-center justify-center gap-8 w-full px-10 mb-15"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <h2 className="mt-6 mb-4 text-[28.8px] w-full text-[#212529] font-bold">
                  {cat.title[selectedLang]}
                </h2>
                <div
                  className={`grid ${
                    gridSel === "Grid1" ? "grid-cols-1" : "grid-cols-2"
                  } gap-8 justify-items-center w-full`}
                >
                  {filteredProducts.map((item) => (
                    <div
                      key={item.id || item.name[selectedLang]}
                      className="flex flex-col items-start justify-start w-full bg-white rounded-[10px] cursor-pointer transition duration-200 transform hover:-translate-y-1 overflow-hidden"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name[selectedLang]}
                        className="w-full h-140 object-cover"
                      />
                      <div className="flex flex-col items-center justify-between gap-6 w-full p-4 shadow-md transition duration-200 hover:shadow-lg">
                        <h2 className="text-[14.4px] w-full text-[#212529] font-semibold">
                          {item.name[selectedLang]}
                        </h2>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-[16px] text-[#e2d8b7]">
                            {item.price} ₼
                          </span>
                          <span
                            onClick={() => {
                              setTotalBasket(totalBasket + 1);
                              addItemToBasket(item,item.id,item.price);
                              // playVoice();
                            }}
                            className="w-9 h-9 rounded-full bg-[#e2d8b7] flex items-center justify-center cursor-pointer transform group transition duration-200 hover:scale-110 hover:bg-[linear-gradient(45deg,rgb(40,167,69),rgb(32,201,151),rgb(40,167,69))]"
                          >
                            <CgMathPlus
                              size={17}
                              className="text-white transition duration-200 transform group-hover:rotate-22"
                            />
                          </span>
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
