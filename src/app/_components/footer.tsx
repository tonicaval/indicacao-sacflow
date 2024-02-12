import { IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="container flex h-fit flex-col items-start justify-between px-8 py-8 md:h-16 md:flex-row md:items-center md:py-0">
      <div className="flex flex-col items-start gap-2 md:flex-row md:gap-8">
        <span className="font-inter">2023 © Sacflow</span>
        <Link className="font-inter hover:underline" href="/">
          Termos de Serviço
        </Link>
        <Link className="font-inter hover:underline" href="/">
          Um produto Hyerdev
        </Link>
        <Link className="font-inter hover:underline" href="/">
          Documentação
        </Link>
      </div>
      <Link href="/" className="flex items-center gap-2 rounded-md py-2 md:py-0">
        <IconBrandInstagram size={32} />
        <span className="flex font-inter md:hidden">Instagram</span>
      </Link>
    </footer>
  );
}

export default Footer;
