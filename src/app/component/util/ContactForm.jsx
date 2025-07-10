'use client'
import React from 'react'
import Button from './Button'
import { IoSend } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { motion, } from 'framer-motion';

export default function ContactForm() {
          const container = {
              hidden:{
                  opacity:0,
                  y:60,
              },
              visible:{
                  opacity:1,
                  y:0,
                  transition: {
                      duration:.8,
                      staggerChildren: 0.05
                  }
              }
          }
  
          const item = {
              hidden:{
                  opacity:0,
                  y:60,
                  scale:.1,
              },
              visible:{
                  opacity:1,
                  y:0,
                  scale:1,
                transition: {
                  duration:.8,
                }
              }
          }
  return (
    <>
        <motion.form variants={container} initial='hidden' whileInView={'visible'} viewport={{once:1,amount:.4}} className='xl:max-w-2/3 mx-auto bg-theme-bg p-5 lg:p-10 rounded-4xl '>
            <motion.input variants={item} type="text" placeholder='Write your name ' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text focus:border-theme-main  focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR' />
            <motion.input variants={item} type="email" placeholder='Write your email ' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text focus:border-theme-main focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR' />

            <motion.textarea variants={item} placeholder='Describe project' className='w-full px-4 pl-0 placeholder:text-sm py-2 text-theme-sub-text resize-none focus:border-theme-main h-32 focus:outline-0 mb-4 placeholder:italic placeholder:text-theme-sub-text text-base border-b border-theme-hvr-brdr/50 font-sportR placeholder:font-sportR'></motion.textarea>
            <motion.div variants={item} className="sm:flex items-center gap-1 py-5">
                <Button mode={'dark'} type={'button'} icon={<IoSend/>} txt={'Send'}/> <span className='font-sportR text-theme-light-text text-xl'>or </span>
                <Button mode={'dark'} type={'button'} icon={<IoSend/>} txt={'Contact Me'}/> 
            </motion.div>
                <motion.div variants={item} className="mini_scle  flex gap-2 pt-10 opacity-50 items-center ">
                  <p className='text-sm font-sportB text-theme-light-text'>@williamrey</p>
                  <div className="icons flex items-center gap-2 ">
                    <span className='block w-10 h-[1px] bg-theme-hvr-bg rounded-full'></span>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaFacebook/></Link>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaTwitter/></Link>
                    <Link className='text-lg md:text-2xl text-theme-light-text' href={'/'}><FaInstagram/></Link>
                  </div>
                </motion.div>
        </motion.form>
    </>
  )
}
