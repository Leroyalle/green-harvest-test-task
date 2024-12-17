import { z } from 'zod';

export const feedbackFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Не менее 2 символов' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  comment: z.string().min(5, { message: 'Не менее 5 символов' }),
});

export type TFormFeedbackValues = z.infer<typeof feedbackFormSchema>;
