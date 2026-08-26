import React from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdClose } from "react-icons/io";
const LanguageChanger = ({langSwitcher, setLangSwitcher,langSelData,filteredSelectedLang,selectedLang,setSelectedLang}) => {
  const {t,i18n} = useTranslation()
  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }
  return (
    <div className={`${langSwitcher ? " -translate-y-1/2 opacity-100 pointer-events-auto " : "opacity-0 -translate-y-3/5  pointer-events-none"} fixed top-1/2 left-1/2 -translate-x-1/2 z-25 transition-all duration-250 flex-col items-center justify-center bg-white w-125 h-auto rounded-[20px]`}>
      <div className="flex items-center justify-between border-b py-4 border-b-[#dee2e6] w-full">
        <h2 className='text-[20px] font-medium text-[#212529] pl-4'>{t(`selectLanguage`)}</h2>
        <IoMdClose onClick={()=> setLangSwitcher(false)} size={26} className='mr-4 text-[#818486] transition duration-200 hover:text-[#404040] cursor-pointer'/>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2 p-4">
        {
          langSelData.map((item,id) => (
          <div onClick={()=>{setSelectedLang(item.shortCase);setLangSwitcher(false);changeLang(item.shortCase)}} className={`${item.shortCase === selectedLang ? "bg-[#e9ecef]" : "bg-white"} flex items-start justify-start w-full px-3.75 py-2.5 gap-3 cursor-pointer rounded-lg transition duration-200 hover:bg-[#f8f9fa]`}>
            <img src={item.countryUrl} alt={item.shortCase} className='w-6 h-6 flex object-cover'/>
            <h2 className='text-[16px] text-[#212529] font-medium'>{item.country}</h2>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default LanguageChanger
