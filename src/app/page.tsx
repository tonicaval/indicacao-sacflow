import FaqSection from './_components/faq-section';
import FormSection from './_components/form-section';
import HeroSection from './_components/hero-section';
import HowSection from './_components/how-section';
import MaterialSection from './_components/material-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowSection />
      <FormSection />
      <FaqSection />
      <MaterialSection />
    </>
  );
}
