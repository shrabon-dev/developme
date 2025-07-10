'use client'
import React from 'react'
import Title from '../util/Title'
import { DiReact } from "react-icons/di";
import WorkProcessCard from '../util/workProcessCard';
import TextScale from '../animations/TextScale';
import { easeInOut, motion, scale } from 'framer-motion';

export default function MyWorkProcess() {
        const container = {
            hidden:{
                y:60,
                opacity:0,
            },
            visible:{
                y:0,
                opacity:1,
                transition: {
                    duration:.8,
                    staggerChildren: 0.05,
                    ease:easeInOut,
                }
            }
        }

        const item = {
            hidden:{
                y:60,
                opacity:0,
            },
            visible:{
                y:0,
                opacity:1,
                transition: {
                    duration:.5,
                }
            }
        }
  return (
    <>
     <section className='why_choose_me'>
        <div className="container sm:px-10 bg-[#141414] p-5 sm:p-10 rounded-4xl mx-auto">
           
            <div className=" lg:flex items-center">
                <div className="w-full lg:w-1/3">
                  <Title text={'My Work Process'}/>
                </div>
                <div className="w-full lg:w-2/3">
                    <h4 className='text-4xl md:text-6xl text-theme-light-text leading-[1.8] font-sportB font-bold'><TextScale text={'My Work Process'}/></h4>
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
            <motion.div variants={container} initial='hidden' whileInView={'visible'} viewport={{once:1,amount:.6}} className="choose_box flex flex-wrap justify-between gap-5 mt-10 ">
                <WorkProcessCard variant={item} icon={<DiReact/>} title={'HTML & CSS'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard variant={item} icon={<DiReact/>} title={'Javascript'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard variant={item} icon={<DiReact/>} title={'PHP & Laravel'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
                <WorkProcessCard variant={item} icon={<DiReact/>} title={'Webflow'} description={"Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success."}/>
            </motion.div>
        </div>
     </section>
    </>
  )
}
