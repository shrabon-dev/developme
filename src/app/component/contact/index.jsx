import React from 'react'
import Title from '../util/Title'
import contact from '@/app/assets/images/contact.png';
import Button from '../util/Button';
import { IoCall } from "react-icons/io5";
import ContactForm from '../util/ContactForm';


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
                <div className="flex">
                    <div className="w-1/2">
                        <Title mode={'dark'}  text={'Contact'} />
                        <h3 className='text-6xl font-sportB font-bold text-theme-text leading-[1.6]'>Interested in   <span className='block'> work <span className='bg-theme-bg text-theme-light-text py-1 px-3 rounded-2xl'> together?</span></span></h3>
                        <p className='text-lg font-sportR text-theme-text text-left my-10'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action..</p>
                        <Button icon={<IoCall/>} txt={'Schedule a Call'}/>
                    </div>
                    <div className="w-1/2">
                        <div className=" ">
                            <ContactForm />
                           
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </>
  )
}
