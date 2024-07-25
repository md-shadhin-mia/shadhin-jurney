import Link from "next/link";
import { userList } from "./user-service";
import Button from "@/components/ui/Button";
import { FaEdit, FaPlus } from "react-icons/fa";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";
import THead from "@/components/ui/Table/THead";
import Tr from "@/components/ui/Table/Tr";
import Th from "@/components/ui/Table/Th";
import TBody from "@/components/ui/Table/TBody";
import Td from "@/components/ui/Table/Td";
import { cache } from "react";


type Props={

}


export default async function (props: Props) {
    const users =await userList();

    return <div>
        <div className="flex justify-between py-2">
            <h3>List of users</h3>
            <Link href={'/users/create'} >
                <Button block variant="solid" size="sm" icon={<FaPlus />} >Add New</Button>
            </Link>
        </div>
        <Card>
            <Table>
                <THead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Name</Th>
                        <Th>Username</Th>
                        <Th>Email</Th>
                        <Th>Date</Th>
                        <Th>Actions</Th>
                    </Tr>
                </THead>
                <TBody>
                    {
                        users.map((user, i)=> (
                            <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.username}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.created_at?.toString()}</Td>
                                <Td>
                                    <div className="flex items-center gap-2">
                                        <Button variant="twoTone" color="yellow-600" size="xs" icon={<FaEdit />} title="Edit" />
                                        {/* <DeleteBlog id={v.id} /> */}
                                    </div>
                                </Td>
                            </Tr>
                        ))
                    }
                </TBody>
            </Table>
        </Card>
    </div>

}