import React from 'react'
import { useTranslation } from 'react-i18next';
import { VscSearchCompact } from "react-icons/vsc";
const NoResult = () => {
  const {t} = useTranslation()
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <VscSearchCompact size={48} className='text-[#e2d8b7]'/>
      <h2 className='mt-4 mb-2 text-[#333333] font-semibold text-[23px] md:text-[25px] lg:text-[28px]'>{t("menu:notFound")}</h2>
      <p className='text-[#999999] text-[16px] font-normal'>{t("menu:userOtherKeyWords")}</p>
    </div>
  )
}

export default NoResult
