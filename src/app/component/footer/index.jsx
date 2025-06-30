import Image from 'next/image'
import React from 'react'
import footerLogo from '@/app/assets/images/footer_logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
        <div className="container px-10 bg-theme-bg rounded-4xl p-5 mx-auto my-20">
            <div className="flex justify-between items-top py-10">
                <div className="w-2/5">
                    <Image src={footerLogo} alt='footer logo'/>
                </div>
                <div className="w-3/5">
                   <h3 className='font-sportB text-6xl text-theme-light-text font-bold'>As you can</h3>
                    <div className="flex flex-wrap mt-20">
                        <div className="menu_box w-1/3">
                            <h6 className='font-sportB text-theme-sub-text font-bold text-base'>Say hello</h6>
                            <ul className='flex flex-col gap-5 mt-5'>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>HELLO@DEVLOP.ME.COM</a></li>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>MAHBUBUL@ME.COM</a></li> 
                            </ul>
                        </div>
                        <div className="menu_box w-1/3 pl-10">
                            <h6 className='font-sportB text-theme-sub-text font-bold text-base'>Menu</h6>
                            <ul className='flex flex-col gap-5 mt-5'>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>Home</a></li>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>About</a></li>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>Portfolio</a></li>
                                <li><a className='font-sportR font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>Blog</a></li>
                            </ul>
                        </div>
                        <div className="menu_box w-1/3">
                            <h6 className='font-sportB text-theme-sub-text font-bold text-base'>Social</h6>
                            <ul className='flex flex-col gap-5 mt-5'>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>TWITTER</a></li>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>INSTAGRAM</a></li>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>FACEBOOK</a></li>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>BEHANCE</a></li>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>DRIBBBLE</a></li>
                            </ul>
                        </div>
                        <div className="menu_box w-1/3">
                            <h6 className='font-sportB text-theme-sub-text font-bold text-base'>Call</h6>
                            <ul className='flex flex-col gap-5 mt-5'>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>+784549 4981 00</a></li>
                                <li><a className='font-sportB font-normal text-base text-theme-sub-light-text uppercase' href={'/'}>+8845 0100 211</a></li> 
                            </ul>
                        </div>
                    </div>
                     
                </div>
            </div>
            <div className="flex pt-10">
                <div className="w-1/3">
                    <p className='font-sportB text-2xl  font-extrabold text-theme-light-text uppercase'>BESNIK</p>
                </div>
                <div className="w-1/3">
                    <p  className='font-sportR text-base text-center font-normal text-theme-sub-text uppercase'>© devlop.me 2025 </p>
                </div>
                <div className="w-1/3 text-end">
                    <p  className='font-sportR text-base text-end font-normal text-theme-sub-text uppercase'><Link href={'/'}>PRIVACY</Link> - <Link href={'/'}>TERMS</Link> </p>
                </div>
            </div>
        </div>
    </footer>
  )
}
