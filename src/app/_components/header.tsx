'use client'
import Image from 'next/image';
import logo from '/public/logo.svg';
import { IconBrandWhatsapp, IconWheel } from '@tabler/icons-react';
import { useState,useEffect } from 'react';


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
  
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-10 h-[72px] w-full px-8  bg-white flex items-center justify-between ${scrolled ? "border-b border-gray-200 shadow-xl shadow-slate-900/5" : ""}`}>
      <Image src={logo} height={0} width={0} id="logo" alt='Logo Sacflow'/>
      <div className='flex gap-4'>
        <button className='hidden sm:flex items-center gap-2 border-2 border-black px-4 h-10 rounded-full font-inter hover:bg-gray-100'> 
          <IconBrandWhatsapp/> Fale com a gente
        </button>
        <button className='flex items-center gap-2 bg-black px-4 h-10 rounded-full text-white font-inter hover:bg-slate-800'> 
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
