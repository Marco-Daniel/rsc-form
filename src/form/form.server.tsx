import Form from './form.client';
import UserNameField from './username.field.client';
import Submit from './submit.client';
import PlanetsServerSelect from './planets.server';
import { z } from 'zod';
import { schema } from './form.schema';

export default function FormServerComponent() {
  const submitAction = async (prevState: z.infer<typeof schema>, formData: FormData) => {
    'use server';
    console.log(Object.fromEntries(formData));

    return Object.fromEntries(formData) as z.infer<typeof schema>;
  };

  return (
    <Form formAction={submitAction}>
      <UserNameField />
      <PlanetsServerSelect />
      <Submit />
    </Form>
  );
}
