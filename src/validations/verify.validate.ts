import { z } from 'zod';

export const verifySchemaValidation = z.object({
    code: z
        .string()
        .length(6, {
            message: 'Verification code must be 6 digites only',
        }),
});
