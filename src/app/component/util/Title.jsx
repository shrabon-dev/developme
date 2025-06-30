import React from 'react'
import { MdArrowDownward } from "react-icons/md";

export default function Title({text,mode}) {
  return (
    <div className='title flex items-center my-10'>

        <div className={`title-icon w-11 h-11 text-xl border-2 ${mode == 'dark' ? 'border-theme-brdr text-theme-text':'border-theme-light-brdr text-theme-light-text'}  rounded-full flex items-center justify-center`}>
            <MdArrowDownward/>
        </div>
        <h2 className={`text-center border-2 ${mode == 'dark' ? 'border-theme-brdr text-theme-text':'border-theme-light-brdr text-theme-light-text'}  inline-block font-sportR rounded-full px-5 py-2  `}>{text}</h2>
    </div>
  )
}
