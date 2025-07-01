import React from 'react'
import about from '@/app/assets/images/about.png';
import Title from '../util/Title';
import Link from 'next/link';

export default function About() {
      const styles = {
        backgroundImage: `url(${about.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
  return (
    <>
        <section className='about_me py-28' style={styles}>
            <div className="container px-10 mx-auto">
                <div className="text-end flex justify-end ">
                    <Title mode={'dark'} text={'About'}/>
                </div>
             <h3 className='text-2xl sm:text-3xl lg:text-7xl font-sportB text-center font-bold text-theme-text leading-[2.2]'>I’ve been   <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>Developing</span>   <span className='block'> Websites since  <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>2013</span></span></h3>

            <p className='text-sm md:text-lg leading-6 font-sportR text-theme-text text-center mt-8 md:mt-0 md:max-w-2/3 mx-auto'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action..</p>
            <div className="sm:flex mt-5 md:mt-20">
                <div className="sm:w-1/2 lg:w-1/4">
                <h5 className='text-sm md:text-2xl font-sportB text-center font-bold text-theme-text leading-[2.2]'>PREVIOUSLY <br /> WORKED ON</h5>
                </div>
                <div className="sm:w-1/2 md:w-3/4">
                <div className="works flex flex-wrap gap-4 md:gap-10">
                      <div className="item  rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>Facebook</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>AWWWWARDS</Link>
                      </div>
                      <div className="item -rotate-6 ">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>AUTODESK</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>NOTHING AI</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>Facebook</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>AWWWWARDS</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>AUTODESK</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-5 md:px-10 py-1 md:py-2 text-sm md:text-xl  font-sportB font-bold text-theme-text border border-theme-brdr rounded-full duration-300 transition-all hover:bg-theme-bg hover:text-theme-hvr-txt' href={'/'}>NOTHING AI</Link>
                      </div>
                </div>
                </div>
            </div>
 
            </div>
        </section>
    </>
  )
}
