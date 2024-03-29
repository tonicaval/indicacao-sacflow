import type { Metadata } from 'next';
import { Inter, Prompt } from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Footer from './_components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const prompt = Prompt({
  weight: ['500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-prompt'
});

export const metadata: Metadata = {
  title: 'Ganhe recomendando o Sacflow',
  description: 'Você pode ganhar R$400 por cada indicação'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br" className={`${inter.variable} ${prompt.variable} scroll-smooth scroll-pt-16`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
