import { z } from 'zod';

export const userValidationSchemma = z.object({
  password: z.string({invalid_type_error:"Password must be string"}).max(20,{message : 'password cannot be more than 20 characters'}),
  needsPasswordChange: z.boolean().default(true),
});