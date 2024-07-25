"use client"

import { SignOut } from "@/app/(auth)/signin/signin-service"
import Button from "@/components/ui/Button"
import Dialog from "@/components/ui/Dialog"
import { Fragment, useState } from "react"
import { FaUserAlt } from "react-icons/fa"
import { HiLogout } from "react-icons/hi"
import ThemeToggol from "./ThemeToggol"

type Props={
    username:string
}
export default function AuthUser(props:Props){
    const [isOpenDialog, setOpenDialog] = useState<boolean>(false);
    const [singingOut, setSigninOut] = useState<boolean>(false);
    return (
        <Fragment>
        <div className='flex items-center mb-4 bg-slate-200 p-2 hover:bg-slate-100 cursor-pointer' onClick={()=>setOpenDialog(!isOpenDialog)}>
                        <div className='rounded-full overflow-hidden'>
                            {/* <Image src={''} alt={''} style={{height:36, width:36}} /> */}
                            <FaUserAlt size={'36px'} />
                        </div>
                        <div className='p-2'>
                            <p className='font-bold'>{props.username}</p>
                        </div>
                    </div>
                    <Dialog 
                        isOpen={isOpenDialog}
                        onClose={()=>setOpenDialog(false)}
                        onRequestClose={()=>setOpenDialog(false)}
                    >
                        <div className='flex flex-col items-center gap-4'>
                            <FaUserAlt size={'96px'} />
                            <h4 >{props.username}</h4>
                            <Button variant='twoTone' type='button' icon={<HiLogout />} color='red-600' loading={singingOut} onClick={async ()=>{
                                setSigninOut(true)
                                await SignOut()
                            }}>
                                Logout
                            </Button>

                            <ThemeToggol />
                        </div>
                    </Dialog>
        </Fragment>
    )
}