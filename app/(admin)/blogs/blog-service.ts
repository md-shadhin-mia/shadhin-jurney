"use server"
import db from "@/DatabasePool";


type List={id:number, title:string, slug:string, published_at:Date}
export async function blogList(){
    return (await db.query("SELECT id , title, slug, published_at FROM blog_post")).rows as List[]
}

export async function BlogDelete(id:number) {
    await db.query(`Delete From blog_post where id=${id}`)
}