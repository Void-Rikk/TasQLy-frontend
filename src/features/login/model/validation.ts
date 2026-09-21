import { z } from "zod";


export const loginValidationSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})