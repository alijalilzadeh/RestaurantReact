import React from "react";
import { useState } from "react";
const HomeInterierNavbar = ({langSwitcher, setLangSwitcher,langSelData,filteredSelectedLang}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full overflow-x-hidden relative">
        <div
         style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-bPVLc70PuSCmZ_GoFez2CAehrG4GS93wkHIc7LwBg&s=10")` }}
          className="flex items-end justify-end w-full p-4 h-45 bg-center bg-no-repeat bg-cover rounded-b-[30px] sm:rounded-b-[50%]"
        >
          <div className="flex items-center justify-center absolute top-4 right-4">
            <img
              onClick={()=> setLangSwitcher(true)}
              src={filteredSelectedLang.countryUrl}
              alt={filteredSelectedLang}
              className="flex object-cover w-9 h-9 cursor-pointer border-2 border-[#6c6c6c] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInterierNavbar;
