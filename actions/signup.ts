"use server";
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import {db} from '@/lib/db';
import { SignUpSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';


export const signup = async (values: z.infer<typeof SignUpSchema>) => { 
    const validation = SignUpSchema.safeParse(values);
    if (!validation.success) {
        return { error: "Invalid fields!" };
    }
    const { email, password, name } = validation.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return { error: "Email already exists!" }
    }
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    
    //Send verification email
    return {success: "User created"}
}