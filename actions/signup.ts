"use server";
import * as z from 'zod';
import { SignUpSchema } from '@/schemas';


export const signup = async (values: z.infer<typeof SignUpSchema>) => { 
    const validation = SignUpSchema.safeParse(values);
    if (!validation.success) {
        return { error: "Invalid fields!" };
    }
    return {success: "Logged in!"}
}