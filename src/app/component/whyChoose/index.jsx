'use client'
import React, { useRef } from 'react'
import Title from '../util/Title'
import { DiReact } from "react-icons/di";
import ChooseCard from '../util/ChooseCard';
import Image from 'next/image';
import arrowLight from '@/app/assets/images/arrow_light.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
export default function WhyChoose() {
    const swiperRef = useRef(null);
  return (
    <>
     <section className='why_choose_me'>
        <div className="container px-10 bg-theme-bg p-10 rounded-4xl mx-auto">
            <Title text={'Why Choose Me'}/>
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <h4 className='text-3xl sm:text-4xl text-theme-light-text leading-[1.8] font-sportB font-bold'>My Extensive <br /> List of Skills</h4>
                </div>
                <div className="lg:w-1/2">
                <p className='font-sportR lg:max-w-2/3 ml-auto text-base text-theme-sub-text lg:border-b border-theme-sub-text'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p>
                </div>
            </div>
            <div className="navs_prevs text-end flex justify-end gap-4 mt-10">
                <button onClick={() => swiperRef.current?.slidePrev()} className='border border-theme-light-brdr rounded-full w-10 h-10 p-2 cursor-pointer'>
                    <Image className='block' src={arrowLight} alt='arrow light'/>
                </button>
                <button  onClick={() => swiperRef.current?.slideNext()} className='border border-theme-light-brdr rounded-full w-10 h-10 p-2  cursor-pointer'>
                    <Image className='-rotate-180 block' src={arrowLight} alt='arrow light'/>
                </button>
            </div>
            <div className="choose_box mt-10 ">
                <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                speed={800}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false, 
                }}
                loop={true}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                    1280: {
                    slidesPerView: 4,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'HTML & CSS'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'Javascript'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'PHP & Laravel'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'Webflow'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'Wordpress'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'Shopify'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                <SwiperSlide><ChooseCard icon={<DiReact/>} title={'Webflow'} description={'Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
     </section>
    </>
  )
}
