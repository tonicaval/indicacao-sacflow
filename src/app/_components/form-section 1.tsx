'use client';

const formatTelefone = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formatação desejada
};

import { IComponentsProps } from '@/interfaces/componentProps';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';

const regex = new RegExp('^[0-9]{2}-([0-9]{8}|[0-9]{9})');

const maskPhoneNumber = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata o número
};

const referFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  referName: z.string().min(3),
  referWhatsapp: z
    .string()
    .min(15)
    .transform((referWhatsapp) => {
      return referWhatsapp.replace(/\D/g, '');
    }),
  referEmail: z.string().email({ message: 'E-mail inválido' }),
  referInfo: z.string().max(512, { message: 'Permitido no máximo 512 caracteres' }),
  howYouKnow: z.string().max(512, { message: 'Permitido no máximo 512 caracteres' })
});

type ReferFormSchema = z.infer<typeof referFormSchema>;

function FormSection() {
  const { register, handleSubmit, setValue } = useForm<ReferFormSchema>({
    resolver: zodResolver(referFormSchema)
  });

  const submitRefer = (data: any) => {
    console.log(data);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  };

  const inputClassName =
    'mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 border-2';
  const labelTextInput = 'font-inter text-base font-semibold text-black';

  const Root = ({ children, className }: IComponentsProps) => (
    <div className={cn('gap-0.25 flex w-full flex-col items-start justify-start', className)}>
      {children}
    </div>
  );

  const Label = ({ children, className }: IComponentsProps) => (
    <label className={cn(' font-inter text-[14px] font-medium text-black', className)}>
      {children}
    </label>
  );

  const Input = ({
    className,
    nameInput,
    ...rest
  }: Omit<IComponentsProps, 'children'> &
    ComponentProps<'input'> & { nameInput: keyof ReferFormSchema }) => (
    <input
      {...register(`${nameInput}`)}
      {...rest}
      className={cn(
        'mt-1 block w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none',
        className
      )}
    />
  );

  const TextArea = ({
    className,
    nameInput,
    ...rest
  }: Omit<IComponentsProps, 'children'> &
    ComponentProps<'textarea'> & { nameInput: keyof ReferFormSchema }) => (
    <textarea
      {...register(`${nameInput}`)}
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
        <form
          onSubmit={handleSubmit(submitRefer)}
          className="flex h-fit w-full max-w-[600px] flex-col items-center justify-start gap-5 rounded-[32px] border-b border-indigo-200 bg-indigo-50 p-8 drop-shadow-2xl"
        >
          <Root>
            <Label>Seu nome</Label>
            <Input type="text" nameInput="name" placeholder="Nome completo" />
          </Root>

          <Root>
            <Label>Seu email</Label>
            <Input type="email" nameInput="email" placeholder="E-mail" />
          </Root>

          <Root>
            <Label>Nome do indicado</Label>
            <Input type="text" nameInput="referName" placeholder="Nome" />
          </Root>

          <Root>
            <Label>E-mail do indicado</Label>
            <Input type="email" nameInput="referEmail" placeholder="E-mail" />
          </Root>

          <Root>
            <Label>WhatsApp do indicado</Label>
            <InputMask
              mask="(99) 99999-9999"
              {...register('referWhatsapp')}
              className={cn(
                'mt-1 block w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none'
              )}
            />
          </Root>

          <Root className="max-h-[120px]">
            <Label>Detalhes</Label>
            <TextArea nameInput="referInfo" placeholder="Indicado"></TextArea>
          </Root>

          <Root className="max-h-[120px]">
            <Label>Como você conhece eles?</Label>
            <TextArea nameInput="howYouKnow" placeholder="Indicado"></TextArea>
          </Root>

          <div className="inline-flex items-center justify-start gap-2 self-stretch py-2">
            <Checkbox required />
            <div className="">
              <span className="font-inter text-base font-medium leading-tight text-black">
                Li e concordo com os
              </span>
              <Link
                href="/"
                className="font-inter text-base font-medium leading-tight text-black underline"
              >
                termos e condições
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="hover:bg-gray-00 inline-flex h-12 items-center justify-center gap-2 self-stretch rounded-3xl bg-black px-4 py-2"
          >
            <span className="text-center font-inter text-base font-semibold text-white">
              Recomendar
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
