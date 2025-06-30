import React from 'react'
import Title from '../util/Title'
import { DiReact } from "react-icons/di";
import Image from 'next/image';
import arrowLight from '@/app/assets/images/arrow_light.png';
import WorkProcessCard from '../util/workProcessCard';

export default function MyWorkProcess() {
  return (
    <>
     <section className='why_choose_me'>
        <div className="container px-10 bg-[#141414] p-10 rounded-4xl mx-auto">
           
            <div className="flex items-center">
                <div className="w-1/3">
                  <Title text={'My Work Process'}/>
                </div>
                <div className="w-2/3">
                    <h4 className='text-6xl text-theme-light-text leading-[1.8] font-sportB font-bold'>My Work Process</h4>
                </div>
            </div>
            {/* <div className="navs_prevs text-end flex justify-end gap-4 mt-10">
                <button className='border border-theme-light-brdr rounded-full w-10 h-10 p-2 cursor-pointer'>
                    <Image className='block' src={arrowLight} alt='arrow light'/>
                </button>
                <button className='border border-theme-light-brdr rounded-full w-10 h-10 p-2  cursor-pointer'>
                    <Image className='-rotate-180 block' src={arrowLight} alt='arrow light'/>
                </button>
            </div> */}
            <div className="choose_box flex flex-wrap justify-between gap-5 mt-10 ">
                <WorkProcessCard icon={<DiReact/>} title={'HTML & CSS'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard icon={<DiReact/>} title={'Javascript'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard icon={<DiReact/>} title={'PHP & Laravel'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard icon={<DiReact/>} title={'Webflow'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
            </div>
        </div>
     </section>
    </>
  )
}
