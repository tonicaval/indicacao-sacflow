import FaqSection from './_components/faq-section';
import FormSection from './_components/form-section 1';
import HeroSection from './_components/hero-section';
import HowSection from './_components/how-section';
import MaterialSection from './_components/material-section';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <HowSection />
      <FormSection />
      <FaqSection />
      {/* <MaterialSection /> */}
    
    </>
  );
}
