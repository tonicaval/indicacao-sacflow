import { IComponentsProps } from '@/interfaces/componentProps';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

function FormSection() {
  const inputClassName =
    'mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 border-2';

  const labelTextInput = 'font-[Inter] text-base font-medium text-black';

  const Root = ({ children, className }: IComponentsProps) => (
    <div className={cn('gap-0.25 flex w-full flex-col items-start justify-start', className)}>
      {children}
    </div>
  );

  const Label = ({ children, className }: IComponentsProps) => (
    <label className={cn(' text-[14px] font-inter font-medium text-black', className)}>{children}</label>
  );

  const Input = ({
    className,
    ...rest
  }: Omit<IComponentsProps, 'children'> & ComponentProps<'input'>) => (
    <input
      {...rest}
      className={cn(
        'mt-1 block w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none',
        className
      )}
    />
  );

  const TextArea = ({
    className,
    ...rest
  }: Omit<IComponentsProps, 'children'> & ComponentProps<'textarea'>) => (
    <textarea
      {...rest}
      className={cn(
        'mt-1 block h-[500px] w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none',
        className
      )}
    />
  );

  return (
    <section className="flex h-fit flex-col items-center justify-center bg-white py-12">
      <div className=" flex w-full max-w-[648px] flex-col items-center justify-center gap-6 px-4">
        <h2 className="text-center font-prompt text-[40px] font-bold leading-[48px] text-black">
          Comece agora
        </h2>
        <form className="flex h-fit w-full max-w-[600px] flex-col items-center justify-start gap-5 rounded-[32px] border-b border-indigo-200 bg-indigo-50 p-8 drop-shadow-2xl">
          <Root>
            <Label>Seu nome</Label>
            <Input name="nome" placeholder="Nome completo" />
          </Root>

          <Root>
            <Label>Seu email</Label>
            <Input name="nome" placeholder="E-mail" />
          </Root>

          <Root>
            <Label>Nome do indicado</Label>
            <Input name="nome" placeholder="Nome" />
          </Root>

          <Root>
            <Label>E-mail do indicado</Label>
            <Input name="nome" placeholder="E-mail" />
          </Root>

          <Root>
            <Label>WhatsApp do indicado</Label>
            <Input name="nome" placeholder="WhatsApp" />
          </Root>

          <Root className="max-h-[120px]">
            <Label>Detalhes</Label>
            <TextArea name="nome" placeholder="Indicado"></TextArea>
          </Root>

          <Root className="max-h-[120px]">
            <Label>Como você conhece eles?</Label>
            <TextArea name="nome" placeholder="Indicado"></TextArea>
          </Root>

          <div className="inline-flex items-center justify-start gap-2 self-stretch py-2">
            <Checkbox />
            <span className="font-inter text-base font-medium leading-tight text-black">
              Li e concordo com os{' '}
            </span>
            <Link
              href="/"
              className="font-[Inter] text-base font-medium leading-tight text-black underline"
            >
              termos e condições
            </Link>
          </div>
          <button className="hover:bg-gray-00 inline-flex h-12 items-center justify-center gap-2 self-stretch rounded-3xl bg-black px-4 py-2">
            <span className="text-center font-[Inter] text-base font-semibold text-white">
              Recomendar
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
