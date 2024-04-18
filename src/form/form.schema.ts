import { z } from 'zod';

export const schema = z.object({
  username: z.string().trim().min(1, 'Name is required'),
  planet: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .refine(val => val !== 'Hoth', { message: "You cnnot select 'Hoth'" }),
});
