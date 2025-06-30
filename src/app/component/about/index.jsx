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
             <h3 className='text-7xl font-sportB text-center font-bold text-theme-text leading-[2.2]'>I’ve been   <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>Developing</span>   <span className='block'> Websites since  <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'>2013</span></span></h3>

            <p className='text-lg font-sportR text-theme-text text-center max-w-2/3 mx-auto'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action..</p>
            <div className="flex mt-20">
                <div className="w-1/4">
                <h5 className='text-2xl font-sportB text-center font-bold text-theme-text leading-[2.2]'>PREVIOUSLY <br /> WORKED ON</h5>
                </div>
                <div className="w-3/4">
                <div className="works flex flex-wrap gap-10">
                      <div className="item  rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>Facebook</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>AWWWWARDS</Link>
                      </div>
                      <div className="item -rotate-6 ">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>AUTODESK</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>NOTHING AI</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>Facebook</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>AWWWWARDS</Link>
                      </div>
                      <div className="item rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>AUTODESK</Link>
                      </div>
                      <div className="item -rotate-6">
                       <Link className='px-10 py-2 text-xl font-sportB font-bold text-theme-text border border-theme-brdr rounded-full' href={'/'}>NOTHING AI</Link>
                      </div>
                </div>
                </div>
            </div>
 
            </div>
        </section>
    </>
  )
}
