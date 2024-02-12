import Image from 'next/image';
import illustrationMoney from '/public/illustration-money.png';
import sketch1 from '/public/sketch-1.svg';

function HeroSection() {
  return (
    <section className="h-fit w-full">
      <div className="flex h-fit w-full flex-col items-center justify-center bg-teal-100 py-12">
        <div className="flex w-full max-w-[840px] flex-col items-center justify-center gap-6 px-4">
          <Image
            className="max-h-[302px] max-w-full sm:object-cover"
            src={illustrationMoney}
            alt="illustration"
            width={0}
            height={302}
            placeholder='blur'
          />

          <h2 className="text-center font-prompt text-[40px] font-bold leading-[48px] text-black">
            Indique o Sacflow e ganhe!
          </h2>

          <p className="text-center font-inter text-[24px] leading-9 text-black">
            Você ganhará{' '}
            <span className="font-bold">
              <Image
                className="absolute inline-block h-[19px] translate-x-7 translate-y-6"
                src={sketch1}
                alt="rabisco"
                width={100}
                height={0}
              />
              R$ 400,00
            </span>{' '}
            por cada indicação que contratar o Sacflow para qualquer plano.
          </p>

          <button className="flex h-12 items-center gap-2 rounded-full bg-black px-6 text-[14px] font-semibold text-white hover:bg-gray-800">
            Baixar material
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
