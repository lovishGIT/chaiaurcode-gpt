import { z } from 'zod';

export const signInSchemaVerification = z.object({
    identifier: z.string(),
    password: z.string(),
});

