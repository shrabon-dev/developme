import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrowLight from '@/app/assets/images/arrow_light.png'
import arrow from '@/app/assets/images/arrow.png'

export default function WorkProcessCard({icon, title, description}) {
  return (
    <>
    <div className="w-[49%] group hover:bg-theme-main duration-300  hover:rotate-[5deg] ease-in-out transition-all card bg-theme-bg p-10 rounded-3xl flex flex-col items-start justify-start gap-4 ">
       <div className="title flex items-center justify-between w-full pb-10">
        <h5 className='text-lg font-sportB text-theme-text bg-theme-secondary rounded-full px-4 py-1 group-hover:bg-theme-bg duration-300 ease-in-out transition-colors group-hover:text-theme-light-text'>{title}</h5>
        <div className="flex gap-2 items-center">
          <Image className='-rotate-180 duration-300 ease-in-out transition-all block group-hover:hidden' src={arrowLight} alt='icon image'/>
          <Image className='-rotate-180 duration-300 ease-in-out transition-all hidden group-hover:block' src={arrow} alt='icon image'/>
          <Link className='text-lg font-sportR text-theme-light-text border-b border-theme-light-brdr duration-300 transition-colors group-hover:border-theme-brdr group-hover:text-theme-text' href="/"> Read More</Link>
        </div>
      </div>
      <p className='font-sportR text-base group-hover:text-theme-text/60 duration-300 ease-in-out transition-colors text-theme-sub-text'>{description}</p>
    </div>
    </>
  )
}
