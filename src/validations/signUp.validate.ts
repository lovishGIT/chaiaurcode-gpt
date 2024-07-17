import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(4, 'Username must be at least 4 characters')
    .max(12, 'Username cant be more than 12 characters')
    .regex(
        /^[a-zA-Z0-9_.]+$/,
        'Username must not contain special characters except . and _'
    );

export const signUpSchemaValidation = z.object({
    username: usernameValidation,
    email: z.string().email({ message: 'Invalid Email Address.' }),
    password: z
        .string()
        .min(6, { message: 'Password must be atleast 6 chars.' }),
});
