'use client'
import Image from 'next/image'
import React from 'react'
import footerLogo from '@/app/assets/images/footer_logo.png'
import Link from 'next/link'
import { motion, } from 'framer-motion';
import TextScale from '../animations/TextScale';

export default function Footer() {
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
    <footer className='bg-gradient-to-tr to-[#CBFF0A] from-[#ffffff] from-50% to-100% via-60% via-theme-secondary pb-10'>
        <div className="container px-10 bg-theme-bg rounded-4xl p-5 mx-auto ">
            <div className="lg:flex justify-between items-top py-10">
                <div className="lg:w-2/5">
                    <Image src={footerLogo} alt='footer logo'/>
                </div>
                <div className="lg:w-3/5">
                   <h3 className='font-sportB text-2xl mt-5 lg:pt-0 lg:text-6xl text-theme-light-text font-bold'><TextScale text={'As you can'}/></h3>
                    <div className="sm:flex flex-wrap mt-10 md:mt-20">
                        <div className="menu_box w-1/2 md:w-1/3">
                            <h6 className='font-sportB text-theme-sub-text font-bold  text-[8px] sm:text-xs  md:text-base '><TextScale text={'Say hello'}/></h6>
                            <motion.ul variants={container} initial="hidden" whileInView={'visible'} viewport={{once:1,amount:.4}} className='flex flex-col gap-1 sm:gap-5 sm:mt-5'>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>HELLO@DEVLOP.ME.COM</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>MAHBUBUL@ME.COM</Link></motion.li> 
                            </motion.ul>
                        </div>
                        <div className="menu_box  w-1/2 md:w-1/3 sm:pl-10 mt-5 sm:mt-0">
                            <h6 className='font-sportB text-theme-sub-text font-bold  text-[8px] sm:text-xs  md:text-base '><TextScale text={'Menu'}/></h6>
                            <motion.ul variants={container} initial="hidden" whileInView={'visible'} viewport={{once:1,amount:.4}} className='flex flex-col gap-1 sm:gap-5 sm:mt-5'>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>Home</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>About</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>Portfolio</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportR font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>Blog</Link></motion.li>
                            </motion.ul>
                        </div>
                        <div className="menu_box  w-1/2 md:w-1/3 mt-5 sm:mt-0">
                            <h6 className='font-sportB text-theme-sub-text font-bold  text-[8px] sm:text-xs  md:text-base '><TextScale text={'Social'}/></h6>
                            <motion.ul variants={container} initial="hidden" whileInView={'visible'} viewport={{once:1,amount:.4}} className='flex flex-col gap-1 sm:gap-5 sm:mt-5'>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>TWITTER</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>INSTAGRAM</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>FACEBOOK</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>BEHANCE</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>DRIBBBLE</Link></motion.li>
                            </motion.ul>
                        </div>
                        <div className="menu_box  w-1/2 md:w-1/3 mt-5 sm:mt-0">
                            <h6 className='font-sportB text-theme-sub-text font-bold  text-[8px] sm:text-xs  md:text-base '><TextScale text={'Call'}/></h6>
                            <motion.ul variants={container} initial="hidden" whileInView={'visible'} viewport={{once:1,amount:.4}} className='flex flex-col gap-1 sm:gap-5 sm:mt-5'>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>+784549 4981 00</Link></motion.li>
                                <motion.li variants={item}><Link className='font-sportB font-normal  text-[8px] sm:text-xs  md:text-base  text-theme-sub-light-text uppercase' href={'/'}>+8845 0100 211</Link></motion.li> 
                            </motion.ul>
                        </div>
                    </div>
                     
                </div>
            </div>
            <motion.div variants={container} initial="hidden" whileInView={'visible'} viewport={{once:1,amount:.4}} className="flex pt-10 items-center">
                <motion.div variants={item} className="w-1/3">
                    <p className='font-sportB text-base lg:text-2xl  font-extrabold text-theme-light-text uppercase'>BESNIK</p>
                </motion.div>
                <motion.div variants={item} className="w-1/3">
                    <p  className='font-sportR  text-[8px]  md:text-base  text-center font-normal text-theme-sub-text uppercase'>© devlop.me 2025 </p>
                </motion.div>
                <motion.div variants={item} className="w-1/3 text-end">
                    <p  className='font-sportR  text-[8px]  md:text-base  text-end font-normal text-theme-sub-text uppercase'><Link href={'/'}>PRIVACY</Link> - <Link href={'/'}>TERMS</Link> </p>
                </motion.div>
            </motion.div>
        </div>
    </footer>
  )
}
