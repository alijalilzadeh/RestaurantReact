import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdClose } from "react-icons/io";
const LanguageChanger = ({langSwitcher, setLangSwitcher}) => {
  const {t,i18n} = useTranslation()
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
  return (
    <div className={`${langSwitcher ? "flex" : "hidden"} fixed top-1/2 left-1/2 -translate-x-1/2 z-25 flex-col items-center justify-center bg-white w-125 h-auto  rounded-[20px]`}>
      <div className="flex items-center justify-between border-b py-4 border-b-[#dee2e6] w-full">
        <h2 className='text-[20px] font-medium text-[#212529] p-4'>{t(`selectLanguage`)}</h2>
        <IoMdClose onClick={()=> setLangSwitcher(false)} size={26} className='mr-4 text-[#818486] transition duration-200 hover:text-[#404040] cursor-pointer'/>
      </div>
      <div className="flex items-center justify-center w-full gap-2 p-4">
        {
          langSelData.map((item,id) => (
          <div className={`flex items-center justify-center w-full`}></div>
          ))
        }
      </div>
    </div>
  )
}

export default LanguageChanger
