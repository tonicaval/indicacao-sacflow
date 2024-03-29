import Image from 'next/image';

import successCircle from '/src/app/success-circle.svg';
import { ConfettiComponents } from '@/components/confetti';

interface IformSubmitSuccess {
  setSendForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormSubmitSuccess({ setSendForm }: IformSubmitSuccess) {
  return (
    <section className='bg-white flex py-14 items-center justify-center'>
      <ConfettiComponents />
      <div className="flex h-fit w-full max-w-[600px] flex-col items-center justify-start gap-5 rounded-[32px] border-b border-indigo-200 bg-indigo-50 p-8 drop-shadow-2xl">
        <Image src={successCircle} alt="Check" width={88} height={88} />
        <div className="text-center font-prompt text-5xl font-bold leading-[56px] text-black">
          Obrigado!
        </div>
        <div className="self-stretch text-center font-inter text-xl font-normal leading-8 text-black">
          Nossa equipe entrará em contato com o indicado. Se ele contratar o Sacflow, entraremos em
          contato com você para pagar a recompensa.
        </div>
        <button
          className="inline-flex h-12 items-center justify-center gap-2 self-stretch rounded-3xl bg-black px-4 py-2 duration-300 hover:bg-gray-800"
          onClick={() => setSendForm(false)}
        >
          <span className="text-center font-inter text-base font-semibold text-white">
            Nova indicação
          </span>
        </button>
      </div>
    </section>
  );
}

export default FormSubmitSuccess;
