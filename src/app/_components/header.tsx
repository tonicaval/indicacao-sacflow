'use client';
import Image from 'next/image';
import logo from '/public/logo.svg';
import { IconBrandWhatsapp, IconWheel } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    <header
      className={`sticky top-0 z-10 h-[72px] w-full bg-white ${scrolled ? 'border-b border-slate-200 bg-white/60 shadow-xl shadow-slate-900/5 backdrop-blur transition-colors' : ''}`}
    >
      <div className={`container flex h-full items-center justify-between px-8`}>
        <Link href="/">
          {' '}
          <Image src={logo} height={0} width={0} id="logo" alt="Logo Sacflow" />{' '}
        </Link>

        <div className="flex gap-4">
          <Link
            href="https://wa.me/556239323632"
            target="_blank"
            className="hidden h-10 items-center gap-2 rounded-full border-2 border-black px-4 font-inter duration-300 hover:bg-gray-200 sm:flex"
          >
            <IconBrandWhatsapp /> Fale com a gente
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://sacflow.com.br/"
            className="flex h-10 items-center gap-2 rounded-full bg-black px-4 font-inter text-white duration-300 hover:bg-slate-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
