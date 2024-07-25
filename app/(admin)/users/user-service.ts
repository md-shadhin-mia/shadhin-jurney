"use server"
import DatabasePool from "@/DatabasePool"
import crypto from "crypto";
import { revalidatePath } from "next/cache";



export type User={
    id?:number
    name?:string
    username:string
    email:string
    password:string
    created_at?:Date
    updated_at?:Date
}


export async function userList() {
    const db =await DatabasePool.getConnection()
    const users = (await db.query<User>("select id, name, username, email, created_at from users")).rows
    return users;
}

export async function userCreate(user:User) {
    user.password = crypto.scryptSync(user.password, "salt", 64).toString("hex");
    await db.query(`insert into users (name, username, email, password, created_at) Values ('${user.name}', '${user.username}', '${user.email}', '${user.password}', Now());`)
    revalidatePath("/users");
}