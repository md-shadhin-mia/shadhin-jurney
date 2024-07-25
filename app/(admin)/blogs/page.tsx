import { FieldDef } from "pg";
import { blogList } from "./blog-service"
import Table from "@/components/ui/Table";
import THead from "@/components/ui/Table/THead";
import Tr from "@/components/ui/Table/Tr";
import Th from "@/components/ui/Table/Th";
import TBody from "@/components/ui/Table/TBody";
import Td from "@/components/ui/Table/Td";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import DeleteBlog from "./components/delete-blog";

type Props={

}


export default async function (props: Props) {
    const blogs = await blogList();

    return <div>
        <div className="flex justify-between py-2">
            <h3>List of Blogs</h3>
            <Link href={'/blogs/create'} >
                <Button block variant="solid" size="sm" icon={<FaPlus />} >Add New</Button>
            </Link>
        </div>
        <Card>
            <Table>
                <THead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Publish Date</Th>
                        <Th>Actions</Th>
                    </Tr>
                </THead>
                <TBody>
                    {
                        blogs.map((v, i)=> (
                            <Tr key={v.id}>
                                <Td>{v.id}</Td>
                                <Td>{v.title}</Td>
                                <Td>{v.published_at.toDateString()}</Td>
                                <Td>
                                    <div className="flex items-center gap-2">
                                        <Button variant="twoTone" color="yellow-600" size="xs" icon={<FaEdit />} title="Edit" />
                                        <DeleteBlog id={v.id} />
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