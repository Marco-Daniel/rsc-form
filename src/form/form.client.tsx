'use client';

import { ReactNode, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './form.schema';
import { Provider } from './form.context';
import { useFormState } from 'react-dom';
import { z } from 'zod';

export type FormClientProps = {
  children: ReactNode;
  formAction: (prevState: z.infer<typeof schema>, formData: FormData) => Promise<z.infer<typeof schema>>;
};

export default function FormClientCompnent({ children, formAction }: FormClientProps) {
  const [_formState, action] = useFormState(formAction, {
    username: '',
    planet: '',
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: _formState,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return (
    <Provider value={control}>
      <form ref={formRef} action={action} onSubmit={handleSubmit(() => formRef.current?.submit())}>
        {children}
      </form>
      {Object.keys(formState.errors).length > 0 && <pre>{JSON.stringify(formState.errors, null, 2)}</pre>}
    </Provider>
  );
}
