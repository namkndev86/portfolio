import { z } from 'zod';

export const commonSchemas = {
  email: z
    .string()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please enter a valid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' }),
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' }),
  phone: z
    .string()
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, {
      message: 'Please enter a valid phone number.',
    })
    .optional()
    .or(z.literal('')),
  url: z
    .string()
    .url({ message: 'Please enter a valid URL.' })
    .optional()
    .or(z.literal('')),
};
