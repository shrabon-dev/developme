import React from 'react'
import Title from '../util/Title'
import contact from '@/app/assets/images/contact.png';
import Button from '../util/Button';
import { IoCall } from "react-icons/io5";


export default function Contact() {
          const styles = {
            backgroundImage: `url(${contact.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
  return (
    <>
        <section className='contact py-10 overflow-visible' style={styles}>
            <div className="container px-10 mx-auto">
                <Title mode={'dark'}  text={'Contact'} />
                <div className="flex">
                    <div className="w-1/2">
                        <h3 className='text-6xl font-sportB font-bold text-theme-text leading-[1.6]'>Interested in   <span className='block'> work <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'> together?</span></span></h3>
                        <p className='text-lg font-sportR text-theme-text text-left my-10'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action..</p>
                        <Button icon={<IoCall/>} txt={'Schedule a Call'}/>
                    </div>
                    <div className="w-1/2">
                        <div className=" ">
                            <form className='max-w-2/3'>
                                <input type="text" placeholder='Your Name' className='w-full p-4 mb-4 border border-gray-300 rounded-lg' />
                                <input type="email" placeholder='Your Email' className='w-full p-4 mb-4 border border-gray-300 rounded-lg' />
                                <textarea placeholder='Your Message' className='w-full p-4 mb-4 border border-gray-300 rounded-lg h-32'></textarea>
                                <button type='submit' className='bg-theme-bg text-theme-light-text py-3 px-6 rounded-lg'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </>
  )
}
