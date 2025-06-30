'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/app/assets/images/logo.png'
import logoLight from '@/app/assets/images/footer_logo.png'
import arrow from '@/app/assets/images/arrow.png'
import arrowLight from '@/app/assets/images/arrow_light.png'
import Link from 'next/link'
import Button from '../util/Button'
export default function Navbar() {
    const [scrollNav,setScrollNav] =  useState(false);
    useEffect(() => {
        const handleScroll = () => { 
            if (window.scrollY > 200) {
                setScrollNav(true)
            } else {
                setScrollNav(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  return (
    <nav className={`navbar bg-transparent ${scrollNav ? 'fixed':'absolute'}  transition-all duration-300 ease-linear top-0 left-0 right-0 z-50 `}>
        <div className={`container px-10 mx-auto rounded-b-[50px] ${scrollNav ? 'bg-theme-bg shadow-lg border-b-2 border-theme-main' : 'bg-transparent shadow-none'}`}>
            <div className="flex justify-between items-center py-5">
                <div className="w-1/4">
                {
                    scrollNav ? 
                    <Image src={logoLight} alt='logo image' className=''/>
                    :
                    <Image src={logo} alt='logo image' className=''/>
                } 
                </div>
                <div className="w-3/4 text-end flex justify-end items-center gap-20">
                    <div className="menus">
                        <ul className='flex justify-end items-center gap-10'>
                <li><Link className={`font-sportR font-normal text-base ${scrollNav ? 'text-white' : 'text-black'}`} href={'/'}>Home</Link></li>
                <li><Link className={`font-sportR font-normal text-base ${scrollNav ? 'text-white' : 'text-black'}`} href={'/'}>About</Link></li>
                <li><Link className={`font-sportR font-normal text-base ${scrollNav ? 'text-white' : 'text-black'}`} href={'/'}>Portfolio</Link></li>
                <li><Link className={`font-sportR font-normal text-base ${scrollNav ? 'text-white' : 'text-black'}`} href={'/'}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className='btn'>
                        {
                            scrollNav ? 
                            <Button isScroll={true} img={arrowLight} txt={'Start Project'} mode={'dark'}/>
                            :
                            <Button img={arrow} txt={'Start Project'} mode={'light'}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
