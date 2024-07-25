"use client"

import Button from "@/components/ui/Button"
import { FaTrashAlt } from "react-icons/fa"
import { BlogDelete } from "../blog-service"

type Props={
    id:number
}
export default function({id}:Props){
    const handleDelete=()=>{
        BlogDelete(id).then(()=>{
            console.log("blog delted");
        }
        )
    }
    return (
        <Button variant="twoTone" onClick={handleDelete} color="red-600" size="xs" icon={<FaTrashAlt />} title="Delete" />
    )
}