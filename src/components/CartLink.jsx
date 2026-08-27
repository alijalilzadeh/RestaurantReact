import React from "react";
import { useTranslation } from "react-i18next";
import { FaBasketShopping } from "react-icons/fa6";
const CartLink = ({
  basketStatus,
  setBasketStatus,
  totalBasket,
  setTotalBasket,
  totalBasketPrice,
  setTotalBasketPrice,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex items-center justify-between w-full h-16 bg-[#e2d8b7]/70 backdrop-blur-md fixed bottom-0 left-0 right-0 rounded-t-[10px] px-4 py-3 ">
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-white text-[14.4px] font-normal">
          {t(`menu:basket`)}
        </h2>
        <span className="text-[17.6px] text-white font-bold">
          {totalBasketPrice.toFixed(2)} ₼
        </span>
      </div>
      <div
        onClick={() => setBasketStatus(true)}
        className="flex items-center justify-center relative pr-4 cursor-pointer group transition transform duration-200 hover:scale-105"
      >
        <FaBasketShopping size={24} className="text-white" />
        <span className="absolute -top-3 right-0 shadow-md flex items-center justify-center w-5.5 h-5.5 text-white z-5 bg-[#e2d8b7] rounded-[11px] px-1.5 text-[12.8px] font-semibold">
          {totalBasket}
        </span>
      </div>
    </div>
  );
};

export default CartLink;
