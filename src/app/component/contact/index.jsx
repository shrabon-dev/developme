import React from 'react'
import Title from '../util/Title'
import contact from '@/app/assets/images/contact.png';
import Button from '../util/Button';
import { IoCall } from "react-icons/io5";
import ContactForm from '../util/ContactForm';
import TextScale from '../animations/TextScale';
import TextFadeUp from '../animations/TextFadeUp';
import PTextFadeUp from '../animations/PTextFadeUp';
import { motion } from 'framer-motion';


export default function Contact() {
          const styles = {
            backgroundImage: `url(${contact.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
       
  return (
    <>
        <section className='contact pt-20 pb-30 overflow-visible' style={styles}>
            <div className="container px-10 mx-auto">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/2">
                        <Title mode={'dark'}  text={'Contact'} />
                        <h3 className='text-2xl sm:text-6xl lg:text-4xl xl:text-6xl font-sportB font-bold text-theme-text leading-[1.6]'> <TextScale text="Interested in" /> 
                        <span className='block'> <TextFadeUp text="work"/>   
                         <span className='bg-theme-bg ml-5 inline-block text-theme-light-text py-1 px-3 rounded-2xl'><TextFadeUp text="together?"/>
                         </span></span></h3>
                        <p className='ttext-sm leading-6 sm:text-lg font-sportR text-theme-text text-left my-5 sm:my-10'><PTextFadeUp text={'We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action..'}/></p>
                        <Button icon={<IoCall/>} txt={'Schedule a Call'}/>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="mt-10 lg:mt-0 lg:pl-5 xl:pl-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </>
  )
}
