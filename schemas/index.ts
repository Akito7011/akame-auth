import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(1, {
        message: "Please enter your password"
    }),
})

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(8, {
        message: "minimum 8 characters"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    })
})