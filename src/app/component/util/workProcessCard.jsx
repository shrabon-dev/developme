'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrowLight from '@/app/assets/images/arrow_light.png'
import arrow from '@/app/assets/images/arrow.png'
import { motion } from 'framer-motion'

export default function WorkProcessCard({icon, title, description,variant}) {
  return (
    <>
    <motion.div variants={variant} className="w-full md:w-[48%] lg:w-[48%] group hover:bg-theme-main duration-300  hover:rotate-[5deg] ease-in-out transition-all card bg-theme-bg p-5 lg:p-10 rounded-3xl flex flex-col items-start justify-start gap-4 ">
       <div className="title flex items-center justify-between w-full pb-5 lg:pb-10">
        <h5 className='text-[10px] sm:text-xs lg:text-lg font-sportB text-theme-text bg-theme-secondary rounded-full px-4 py-1 group-hover:bg-theme-bg duration-300 ease-in-out transition-colors group-hover:text-theme-light-text'>{title}</h5>
        <div className="flex gap-2 items-center">
          <Image className='-rotate-180 w-6 lg:w-10 duration-300 ease-in-out transition-all block group-hover:hidden' src={arrowLight} alt='icon image'/>
          <Image className='-rotate-180 w-6 lg:w-10 duration-300 ease-in-out transition-all hidden group-hover:block' src={arrow} alt='icon image'/>
          <Link className='text-[8px] sm:text-xs lg:text-lg font-sportR text-theme-light-text border-b border-theme-light-brdr duration-300 transition-colors group-hover:border-theme-brdr group-hover:text-theme-text' href="/"> Read More</Link>
        </div>
      </div>
      <p className='font-sportR text-xs leading-6 lg:text-base group-hover:text-theme-text/60 duration-300 ease-in-out transition-colors text-theme-sub-text'>{description}</p>
    </motion.div>
    </>
  )
}
