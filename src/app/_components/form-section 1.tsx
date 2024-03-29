'use client';

const formatTelefone = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formatação desejada
};

import { IComponentsProps } from '@/interfaces/componentProps';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ComponentProps, useRef, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { boolean, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import FormSubmitSuccess from './form-submit-sucess';
import { IconLoader2 } from '@tabler/icons-react';

const referFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  whatsapp: z
    .string()
    .min(15, { message: 'Número de WhatsApp inválido' })
    .transform((referWhatsapp) => {
      return referWhatsapp.replace(/\D/g, '');
    }),
  referName: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  referWhatsapp: z
    .string()
    .min(15, { message: 'Número de WhatsApp inválido' })
    .transform((referWhatsapp) => {
      return referWhatsapp.replace(/\D/g, '');
    }),
  referEmail: z.string().email({ message: 'E-mail inválido' }),
  referInfo: z.string().max(512, { message: 'Permitido no máximo 512 caracteres' }),
  howYouKnow: z.string().max(512, { message: 'Permitido no máximo 512 caracteres' }),
  termsAndConditions: z.boolean().optional()
});

type ReferFormSchema = z.infer<typeof referFormSchema>;

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
  error,
  message,
  register,
  ...rest
}: Omit<IComponentsProps, 'children'> &
  ComponentProps<'input'> & {
    nameInput: keyof ReferFormSchema;
    error?: boolean;
    message?: string;
    register: any;
  }) => {
  return (
    <>
      <input
        {...register(`${nameInput}`)}
        {...rest}
        className={cn(
          `mt-1 block w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none ${error ? 'border-red-500 invalid:border-red-500 invalid:text-red-600 focus:border-red-500 focus:invalid:border-2 focus:invalid:border-red-500' : ''}`,
          className
        )}
      />
      {error && <span className="text-sm text-red-500">{message}</span>}
    </>
  );
};

const TextArea = ({
  className,
  nameInput,
  error,
  message,
  register,
  ...rest
}: Omit<IComponentsProps, 'children'> &
  ComponentProps<'textarea'> & {
    nameInput: keyof ReferFormSchema;
    error?: boolean;
    message?: string;
    register: any;
  }) => (
  <>
    <textarea
      {...register(`${nameInput}`)}
      {...rest}
      className={cn(
        `mt-1 block w-full rounded-lg border-2 border-slate-300 bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none ${error ? 'border-red-500 invalid:border-red-500 invalid:text-red-600 focus:border-red-500 focus:invalid:border-2 focus:invalid:border-red-500' : ''}`,
        className
      )}
    />
    {error && <span className="text-sm text-red-500">{message}</span>}
  </>
);

function FormSection() {
  const targetSectionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const checkboxRef = React.useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ReferFormSchema>({
    resolver: zodResolver(referFormSchema),
    mode: 'onBlur'
  });

  const errorEmail = errors.email;
  const [sendForm, setSendForm] = useState(false);

  const submitRefer = async (data: any) => {
    setIsLoading(true);

    await fetch('/api/send-text', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // toast({
    //   title: 'You submitted the following values:',
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   )
    // });
    setSendForm(true);

    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // ou 'end' para rolar para o final da seção
      });
    }
    reset();
  };

  // const inputClassName =
  //   'mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 border-2';
  // const labelTextInput = 'font-inter text-base font-semibold text-black';

  return (
    <section
      ref={targetSectionRef}
      id="form"
      className="flex h-fit flex-col items-center justify-center bg-white py-12"
    >
      <div className=" flex w-full max-w-[648px] flex-col items-center justify-center gap-6 px-4">
        {sendForm ? (
          <FormSubmitSuccess setSendForm={setSendForm} />
        ) : (
          <>
            <h2 className="text-center font-prompt text-[40px] font-bold leading-[48px] text-black">
              Comece agora
            </h2>
            <form
              onSubmit={handleSubmit(submitRefer)}
              className="flex h-fit w-full max-w-[600px] flex-col items-center justify-start gap-5 rounded-3xl border-b border-indigo-200 bg-indigo-50 p-6 drop-shadow-2xl 
              sm:rounded-[32px] sm:p-8"
            >
              <Root>
                <Label>Seu nome</Label>
                <Input
                  type="text"
                  register={register}
                  nameInput="name"
                  placeholder="Nome completo"
                  error={Boolean(errors?.name)}
                  message={errors?.name?.message}
                />
              </Root>

              <Root>
                <Label>Seu email</Label>
                <Input
                  type="email"
                  register={register}
                  nameInput="email"
                  placeholder="E-mail"
                  error={Boolean(errors?.email)}
                  message={errors?.email?.message}
                />
              </Root>

              <Root>
                <Label>Seu WhatsApp</Label>
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(99) 99999-8888"
                  {...register('whatsapp')}
                  className={cn(
                    `mt-1 block w-full rounded-lg border-2 border-slate-300 ${errors?.referWhatsapp ? 'border-red-500 invalid:border-red-500 invalid:text-red-600 focus:border-red-500 focus:invalid:border-2 focus:invalid:border-red-500' : ''} bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none`
                  )}
                />
                {errors?.referWhatsapp && (
                  <span className="text-sm text-red-500">{errors?.referWhatsapp?.message}</span>
                )}
              </Root>

              <Root>
                <Label>Nome do indicado</Label>
                <Input
                  type="text"
                  register={register}
                  nameInput="referName"
                  placeholder="Nome"
                  error={Boolean(errors?.referName)}
                  message={errors?.referName?.message}
                />
              </Root>

              <Root>
                <Label>E-mail do indicado</Label>
                <Input
                  type="email"
                  register={register}
                  nameInput="referEmail"
                  placeholder="E-mail"
                  error={Boolean(errors?.referEmail)}
                  message={errors?.referEmail?.message}
                />
              </Root>

              <Root>
                <Label>WhatsApp do indicado</Label>
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(99) 99999-8888"
                  {...register('referWhatsapp')}
                  className={cn(
                    `mt-1 block w-full rounded-lg border-2 border-slate-300 ${errors?.referWhatsapp ? 'border-red-500 invalid:border-red-500 invalid:text-red-600 focus:border-red-500 focus:invalid:border-2 focus:invalid:border-red-500' : ''} bg-white px-3 py-3 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none`
                  )}
                />
                {errors?.referWhatsapp && (
                  <span className="text-sm text-red-500">{errors?.referWhatsapp?.message}</span>
                )}
              </Root>

              <Root className="max-h-[120px]">
                <Label>Detalhes</Label>
                <TextArea
                  nameInput="referInfo"
                  register={register}
                  placeholder="Diga algo que precisamos saber sobre esta empresa..."
                  error={Boolean(errors?.referInfo)}
                  message={errors?.referInfo?.message}
                ></TextArea>
              </Root>

              <Root className="max-h-[120px]">
                <Label>Como você conhece eles?</Label>
                <TextArea
                  nameInput="howYouKnow"
                  register={register}
                  placeholder="Sobre a sua relação com essa empresa..."
                  error={Boolean(errors?.howYouKnow)}
                  message={errors?.howYouKnow?.message}
                ></TextArea>
              </Root>

              <label
                className="inline-flex items-center justify-start gap-2 self-stretch py-2"
                htmlFor="politica"
              >
                <Checkbox id="politica" />
                <div>
                  <span className="font-inter text-base font-medium leading-tight text-black">
                    Li e concordo com os{' '}
                  </span>
                  <Link
                    href="https://sacflow.io/politica-de-privacidade-e-termos-de-uso"
                    target='_blank'
                    className="font-inter text-base font-medium leading-tight text-black underline"
                  >
                    termos e condições
                  </Link>
                </div>
              </label>

              <Button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 items-center justify-center gap-2 self-stretch rounded-3xl bg-black px-4 py-2 duration-300 hover:bg-gray-800"
              >
                {isLoading ? (
                  <IconLoader2 className="h-6 w-6 animate-spin" />
                ) : (
                  <span className="text-center font-inter text-base font-semibold text-white ">
                    Recomendar
                  </span>
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

export default FormSection;
