'use server'
import 'server-only'
import {cookies} from 'next/headers'
import { permanentRedirect, redirect } from 'next/navigation';
import dayjs from 'dayjs';

export type SignInTypes={
    username_email: string,
    password: string
}
export async function signIn(values: SignInTypes) {
    cookies().set('user', "shadhin", {
        // expires:dayjs().add(1,"day").get("millisecond")
    });
    permanentRedirect("/dashboard");
}

export async function SignOut() {
    cookies().delete('user');
    permanentRedirect("/signin");
}