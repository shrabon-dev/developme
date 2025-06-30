import Image from 'next/image'
import React from 'react'

export default function Button({ img, icon, txt, mode,isScroll }) {
  // Define color classes based on mode
  const isDark = mode === 'dark'

  const borderColor = mode === 'dark' ? 'border-theme-light-brdr !border-r-theme-main' : 'border-theme-brdr '
  const textColor = mode === 'dark' ? 'text-white' : 'text-theme-text'
  const hoverTextColor = mode === 'dark' ? 'hover:text-black' : 'hover:text-theme-hvr-txt'
  const hoverBgColor = mode === 'dark' ? 'hover:bg-white' : 'hover:bg-theme-bg'
  const iconHoverBg = mode === 'dark' ? 'group-hover:bg-white' : 'group-hover:bg-theme-hvr-bg'
  const iconHoverBorder = mode === 'dark' ? 'group-hover:border-white' : 'group-hover:border-theme-hvr-brdr'
  const iconHoverText = mode === 'dark' ? 'group-hover:text-black' : 'group-hover:text-theme-text'

  return (
    <a
      className={`inline-flex cursor-pointer items-center border-2 gap-2 ${borderColor} pr-4 py-2 bg-transparent ${textColor} rounded-full 
        ${hoverBgColor} after:z-[-1] after:opacity-0  hover:after:opacity-100 after:w-0 group hover:after:w-full 
        after:h-full after:content-[''] after:duration-700 relative after:absolute after:top-0 after:left-0 
        overflow-hidden ${hoverTextColor} transition-colors duration-700`}
    >
      {img && (
        <div className={`img border-2 ${isScroll? 'group-hover:bg-theme-bg': iconHoverBg} ${iconHoverBorder} duration-300 ${borderColor} rounded-full p-2`}>
     
          <Image src={img} alt="icon" className={`${isScroll && '-rotate-180'} w-5 h-5`} />
        </div>
      )}
      {icon && (
        <span className={`img border-2 ${iconHoverBg} ${iconHoverBorder} ${iconHoverText} duration-300 ${borderColor} rounded-full p-2 text-2xl`}>
          {icon}
        </span>
      )}
      <span className="font-sportR font-normal text-base">{txt}</span>
    </a>
  )
}
