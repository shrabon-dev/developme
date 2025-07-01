'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '@/app/assets/images/logo.png';
import logoLight from '@/app/assets/images/footer_logo.png';
import arrow from '@/app/assets/images/arrow.png';
import arrowLight from '@/app/assets/images/arrow_light.png';
import Link from 'next/link';
import Button from '../util/Button';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; // for hamburger

export default function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`navbar bg-transparent ${scrollNav ? 'fixed' : 'absolute'} transition-all duration-300 ease-linear top-0 left-0 right-0 z-50`}>
      <div className={`container px-5 md:px-10 mx-auto rounded-b-[50px] ${scrollNav ? 'bg-theme-bg shadow-lg border-b-2 border-theme-main' : 'bg-transparent shadow-none'}`}>
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="w-2/4 md:w-1/4">
            <Image src={scrollNav ? logoLight : logo} alt="logo image" className="w-28 md:w-54" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-3/4 text-end justify-end items-center gap-10">
            <ul className="flex justify-end items-center gap-10">
              {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    className={`menu_style ${item == 'Home' && 'after:!w-full'} ${scrollNav ? 'text-white' : 'text-black'}`}
                    href="/"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="btn">
              <Button
                isScroll={scrollNav}
                img={scrollNav ? arrowLight : arrow}
                txt="Start Project"
                mode={scrollNav ? 'dark' : 'light'}
              />
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden w-2/4 flex justify-end items-center">
            <button onClick={toggleMenu} className="text-3xl text-theme-main z-50 relative cursor-pointer">
              {mobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-theme-bg z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-10">
          <ul className="flex flex-col gap-6 text-white text-xl">
            {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
              <li key={item}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button img={arrowLight} txt="Start Project" mode="dark" />
          </div>
        </div>
      </div>
    </nav>
  );
}
