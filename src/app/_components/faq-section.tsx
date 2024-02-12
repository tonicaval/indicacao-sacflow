import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import Link from 'next/link';

function FaqSection() {
  return (
    <section className="flex h-fit flex-col items-center justify-center bg-white py-24">
      <div className=" flex w-full max-w-[648px] flex-col items-center justify-center gap-6 px-4">
        <h2 className="text-center font-prompt text-[40px] font-bold leading-[48px] text-black">
          Dúvidas frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="select-none text-xl font-semibold text-black hover:no-underline	">
              Como vou receber minha recompensa?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-black hover:no-underline">
              Você receberá um pix na chave que você informar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="select-none text-xl font-semibold text-black hover:no-underline">
              Quanto tempo leva para receber minha recompensa?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-black hover:no-underline">
              Pagaremos após 30 dias da conclusão bem-sucedida do contrato com a indicação.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="select-none text-xl font-semibold text-black hover:no-underline">
              Como saberei se meu indicado fechou negócio?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-black">
              Escreveremos um e-mail para você assim que tivermos um acordo fechado com sua
              indicação. Você também pode entrar em contato conosco a qualquer momento em
              contato@hyerdev.com se tiver alguma dúvida.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4 ">
            <AccordionTrigger className="select-none text-xl font-semibold text-black hover:no-underline">
              Como posso falar do Sacflow?
            </AccordionTrigger>
            <AccordionContent className=" text-base text-black">
              Baixe nosso material abaixo, contendo um PDF e um vídeo de divulgação. Nosso perfil do
              Instagram também pode ajudar:{' '}
              <Link
                className="rounded-sm px-1 py-0.5 underline hover:bg-blue-100"
                target="_blank"
                href="https://www.instagram.com/sacflow.io"
              >
                https://www.instagram.com/sacflow.io
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
