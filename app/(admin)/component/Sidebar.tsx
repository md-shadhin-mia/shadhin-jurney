"use client"
import { SignOut } from '@/app/(auth)/signin/signin-service';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import Menu from '@/components/ui/Menu';
import MenuItem from '@/components/ui/MenuItem';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaBlog, FaCogs, FaUserAlt } from 'react-icons/fa'
import { HiLogout } from 'react-icons/hi';
import { MdArticle, MdOutlineArticle, MdPerson } from 'react-icons/md'
import AuthUser from './AuthUser';
const MenuContent = ({ icon, label, href }: { icon: ReactNode, label: string, href?: string }) => {

    return href ? (
        <Link href={href} className="flex items-center gap-2">
            <span className={'text-1.5xl'}>{icon}</span>
            <span>{label}</span>
        </Link>
    ) : (
        <div className="flex items-center gap-2">
            <span className={'text-1.5xl'}>{icon}</span>
            <span>{label}</span>
        </div>

    )

}
type Props={
    username:string
}
function Sidebar(props:Props) {
    return (
        <div className='transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-20 w-48 bg-white border-e border-gray-200 pt-7 pb-10 px-2 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700'>
            <AuthUser {...props} />
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={"calc(-120px + 100vh)"}
                thumbMinSize={30}
                universal={true} >
                    
                <Menu>
                    <Menu.MenuItem eventKey="settings">
                        <MenuContent icon={<FaCogs />} label="Settings" />
                    </Menu.MenuItem>
                    {/* <Menu.MenuItem eventKey="profile">
                        <MenuContent icon={<i className="fa-solid fa-user"></i>} label="Profile" />
                    </Menu.MenuItem> */}
                    <Menu.MenuCollapse eventKey="blogs" label={
                        <MenuContent icon={<MdArticle />} label="Blogs" />
                    }>
                        <Menu.MenuItem eventKey="blogs-list">
                            <MenuContent icon={<i className="fa-solid fa-list"></i>} label="Blogs List" href="/blogs" />
                        </Menu.MenuItem>
                        <Menu.MenuItem eventKey="create-blog">
                            <MenuContent icon={<i className="fa-solid fa-pen-to-square"></i>} label="Create Blog" href='/create-blog' />
                        </Menu.MenuItem>

                    </Menu.MenuCollapse>

                    {/* users */}
                    <Menu.MenuCollapse eventKey="users" label={
                        <MenuContent icon={<MdPerson />} label="users" />
                    }>
                        <Menu.MenuItem eventKey="users">
                            <MenuContent icon={<i className="fa-solid fa-list"></i>} label="User List" href="/users" />
                        </Menu.MenuItem>
                        <Menu.MenuItem eventKey="user/create">
                            <MenuContent icon={<i className="fa-solid fa-pen-to-square"></i>} label="Create Blog" href='/users/create' />
                        </Menu.MenuItem>
                    </Menu.MenuCollapse>
                </Menu>
            </Scrollbars>
        </div>
    )
}

export default Sidebar
