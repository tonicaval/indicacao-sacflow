import Image from 'next/image';
import star1 from '/public/star1.svg';

function HowSection() {
  const inputClassName =
    'mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 border-2';

  const labelTextInput = 'font-inter text-base font-medium text-black';

  return (
    <section className="flex h-fit justify-center bg-white px-6 py-12 md:p-12 ">
      <div className="flex max-w-[800px] flex-col items-center justify-start gap-10">
        <div className="text-center font-prompt text-5xl font-bold leading-[56px] text-black">
          Como funciona?
        </div>
        <div className="flex gap-6">
          <div className="h-12 w-12 rounded-2xl bg-black">
            <span className="flex select-none items-center justify-center font-inter text-2xl font-bold leading-loose text-white">
              1
            </span>
          </div>
          <div className="leading-2 shrink grow basis-0 font-inter text-xl text-black">
            Preencha o formulário de indicação abaixo fornecendo os detalhes de indivíduos ou
            empresas que você acha que encontrariam valor em nossos serviços.
          </div>
        </div>
        <div className="flex gap-6">
          <div className="h-12 w-12 rounded-2xl bg-black">
            <span className="flex select-none items-center justify-center font-inter text-2xl font-bold leading-loose text-white">
              2
            </span>
          </div>
          <div className="leading-2 shrink grow basis-0 font-inter text-xl text-black">
            Assim que a indicação for enviada, nossa equipe entrará em contato imediatamente com a
            parte indicada. Se um negócio bem-sucedido for fechado, você terá direito a uma
            recompensa.
          </div>
        </div>
        <div className="flex gap-6">
          <div className="h-12 w-12 select-none rounded-2xl bg-black">
            <span className="flex items-center justify-center font-inter text-2xl font-bold leading-loose text-white">
              3
            </span>
          </div>
          <div className="leading-2 shrink grow basis-0 font-inter text-xl text-black">
            Você vai receber o pix de R$ 400 reais direto na sua conta, 30 dias após o primeiro
            pagamento do cliente.
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-200">
            <Image src={star1} alt="illustration" width={0} height={24} />
          </div>
          <div className="leading-2 shrink grow basis-0 font-inter text-xl text-black">
          Depois de fazer sua primeira recomendação, te enviaremos o material de divulgação 😉
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowSection;
