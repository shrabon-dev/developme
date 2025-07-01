import React from 'react'
import Button from './Button'
import { IoSend } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactForm() {
  return (
    <>
        <form className='xl:max-w-2/3 mx-auto bg-theme-bg p-10 rounded-4xl '>
            <input type="text" placeholder='Write your name ' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text focus:border-theme-main  focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR' />
            <input type="email" placeholder='Write your email ' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text focus:border-theme-main focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR' />

            <textarea placeholder='Describe project' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text resize-none focus:border-theme-main h-32 focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR'></textarea>
            <div className="flex items-center gap-1 py-5">
                <Button mode={'dark'} type={'button'} icon={<IoSend/>} txt={'Send'}/> <span className='font-sportR text-theme-light-text text-xl'>or </span>
                <Button mode={'dark'} type={'button'} icon={<IoSend/>} txt={'Contact Me'}/> 
            </div>
                <div className="mini_scle  flex gap-2 pt-10 opacity-50 items-center ">
                  <p className='text-sm font-sportB text-theme-light-text'>@williamrey</p>
                  <div className="icons flex items-center gap-2 ">
                    <span className='block w-10 h-[1px] bg-theme-hvr-bg rounded-full'></span>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaFacebook/></Link>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaTwitter/></Link>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaInstagram/></Link>
                  </div>
                </div>
        </form>
    </>
  )
}
