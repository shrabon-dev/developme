import React from 'react'
import Title from '../util/Title'
import { DiReact } from "react-icons/di";
import ChooseCard from '../util/ChooseCard';
import Image from 'next/image';
import arrowLight from '@/app/assets/images/arrow_light.png';

export default function WhyChoose() {
  return (
    <>
     <section className='why_choose_me'>
        <div className="container px-10 bg-theme-bg p-10 rounded-4xl mx-auto">
            <Title text={'Why Choose Me'}/>
            <div className="flex">
                <div className="w-1/2">
                    <h4 className='text-4xl text-theme-light-text leading-[1.8] font-sportB font-bold'>My Extensive <br /> List of Skills</h4>
                </div>
                <div className="w-1/2">
                <p className='font-sportR max-w-2/3 ml-auto text-base text-theme-sub-text border-b border-theme-sub-text'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                </div>
            </div>
            <div className="navs_prevs text-end flex justify-end gap-4 mt-10">
                <button className='border border-theme-light-brdr rounded-full w-10 h-10 p-2 cursor-pointer'>
                    <Image className='block' src={arrowLight} alt='arrow light'/>
                </button>
                <button className='border border-theme-light-brdr rounded-full w-10 h-10 p-2  cursor-pointer'>
                    <Image className='-rotate-180 block' src={arrowLight} alt='arrow light'/>
                </button>
            </div>
            <div className="choose_box flex gap-10 mt-10 ">
                <ChooseCard icon={<DiReact/>} title={'HTML & CSS'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/>
                <ChooseCard icon={<DiReact/>} title={'Javascript'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/>
                <ChooseCard icon={<DiReact/>} title={'PHP & Laravel'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/>
                <ChooseCard icon={<DiReact/>} title={'Webflow'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/>
            </div>
        </div>
     </section>
    </>
  )
}
