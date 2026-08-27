import React from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { BsBasket2 } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
const Basket = ({
  basketStatus,
  setBasketStatus,
  basketEl,
  setBasketEl,
  totalBasket,
  setTotalBasket,
  totalBasketPrice,
  setTotalBasketPrice,
  selectedLang,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${basketStatus ? "translate-x-0 flex" : "translate-x-full"} transition-all duration-500  flex-col items-start justify-between bg-white z-28 fixed top-0 right-0 h-screen w-[25vw] `}
    >
      <div className="flex items-start justify-between w-full px-6 py-5 bg-[#F8F9FA] border-b border-[#e9ecef]">
        <h2 className="text-[24px] text-[#212529] font-bold">
          {t(`menu:basket`)}
        </h2>
        <span
          onClick={() => setBasketStatus(false)}
          className="flex items-center justify-center rounded-full w-9 h-9 cursor-pointer bg-[#EBECED] transition duration-200 hover:bg-[#DFE0E1] group"
        >
          <IoClose
            size={16}
            className="transition duration-200 transform group-hover:rotate-22"
          />
        </span>
      </div>

      {basketEl.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 w-full py-16 px-8">
          <BsBasket2 size={48} className="text-[#B5BABE]" />
          <h2 className="text-[17.6px] text-[#B5BABE] font-normal">
            {t(`menu:emptyBasket`)}
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-start justify-start w-full gap-2 p-4 overflow-y-auto">
          {basketEl.map((item, id) => (
            <div
              key={id}
              className="flex items-start justify-between p-4 border-b rounded-lg border-b-[#e9ecef] w-full transition duration-200 hover:bg-[#F8F9FA]"
            >
              <div className="flex items-start justify-start gap-4 w-full">
                <img
                  src={item.imageUrl}
                  className="w-17 h-17 rounded-lg flex object-cover self-center"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <h2 className="text-[16.8px] font-semibold text-[#212529]">
                    {item.name[selectedLang]}
                  </h2>
                  <span className="font-bold text-[17.6px] text-[#e2d8b7]">
                    {item.price} ₼
                  </span>
                </div>
                <div className="flex items-center justify-center relative group">
                  <span className="bg-[#F2D2D6] w-9 h-9 rounded-full z-1 absolute -top-1/2 transition duration-200 transform scale-0 group-hover:scale-105"></span>
                  <BsTrash
                    size={19}
                    className="flex items-center justify-center self-center z-10 text-[#DC3545] cursor-pointer transition duration-200 transform  group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-start justify-start w-full p-6  bg-[#F8F9FA] border-t border-[#e9ecef]">
        <div className="flex items-center justify-between w-full pb-3 border-b border-[#e9ecef]">
          <h2 className="text-[#495057] text-[16px] font-medium">
            {t(`menu:subTotal`)}
          </h2>
          <span className="text-[16px] font-bold text-[#212529]">
            {totalBasketPrice.toFixed(2)} ₼
          </span>
        </div>
        <div className="flex items-center justify-between pt-4 w-full ">
          <h2 className="text-[#495057] text-[19.2px] font-bold">
            {t(`menu:total`)}
          </h2>
          <span className="text-[19.2px] font-bold text-[#e2d8b7]">
            {totalBasketPrice.toFixed(2)} ₼
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket;
