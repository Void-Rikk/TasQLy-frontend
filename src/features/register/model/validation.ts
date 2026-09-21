import { z } from "zod";


export const registerValidationSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(6),
})