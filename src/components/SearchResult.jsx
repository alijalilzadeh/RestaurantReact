import React from "react";
import { useTranslation } from "react-i18next";
import NoResult from "./NoResult";

const SearchResult = ({ menuLength, inputVal }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex  items-center justify-center w-full bg-[#F6F6F4] py-4 px-6 my-4">
        <span className="text-[#e2d8b7] text-[16px] font-semibold">
          {menuLength} {t("menu:searchResult")} "{inputVal}"
        </span>
      </div>
      {menuLength === 0 && <NoResult />}
    </div>
  );
};

export default SearchResult;
