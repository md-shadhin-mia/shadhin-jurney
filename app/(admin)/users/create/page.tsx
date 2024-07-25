"use client"
import UserFrom from "../components/userForm";
import { userCreate, User } from "../user-service";
import toast from "@/components/ui/toast"; 
import Notification from "@/components/ui/Notification";


export default  function CreateUser() {
    const handleSubmit = async (user:User)=>{
        await userCreate(user)
        toast.push(<Notification title="Added" type="success">
            User  '{user.name}' has been created!
        </Notification>);
    }
    return (
        <UserFrom onSubmit={handleSubmit} />
    )
}