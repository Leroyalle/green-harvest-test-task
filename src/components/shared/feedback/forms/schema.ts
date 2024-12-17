import { z } from 'zod';

export const feedbackFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Не менее 2 символов' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  comment: z.string().max(1024, { message: 'Не более 1024 символов' }).optional(),
});

export type TFormFeedbackValues = z.infer<typeof feedbackFormSchema>;
