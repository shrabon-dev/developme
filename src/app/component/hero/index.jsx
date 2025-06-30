import React from 'react'
import Button from '../util/Button'
import { IoCallSharp } from "react-icons/io5";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter,FaInstagram } from "react-icons/fa6";
import hero from '@/app/assets/images/hero.png';
export default function Hero() {
  const styles = {
    backgroundImage: `url(${hero.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div className='hero pt-32' style={styles}>
      <div className="container px-10 mx-auto">
        <div className="py-20">
          <h1 className='text-7xl font-sportB font-bold text-left text-theme-text leading-[2.2]'>Trusted <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>Partner</span> for <span className='block'> Your Website <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>Develop.</span></span></h1>
           <div className="flex mt-14">
            <div className="w-1/5">
                <div className="mini_scle relative -left-20 -rotate-90 pl-10">
                  <p className='text-sm font-sportB text-theme-text'>@williamrey</p>
                  <div className="icons flex items-center gap-2 mt-2">
                    <span className='block w-10 h-[1px] bg-theme-bg rounded-full'></span>
                    <Link className='text-2xl' href={'/'}><FaFacebook/></Link>
                    <Link className='text-2xl' href={'/'}><FaTwitter/></Link>
                    <Link className='text-2xl' href={'/'}><FaInstagram/></Link>
                  </div>
                </div>
            </div>
            <div className="w-4/5">
            <p className='font-sportR font-normal mb-5 text-lg text-theme-text max-w-2/3 '>Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
             <Button icon={<IoCallSharp/>} txt={'Schedule a Call'}/>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}
