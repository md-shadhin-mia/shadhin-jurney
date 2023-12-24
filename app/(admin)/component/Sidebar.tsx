"use client"
import Menu from '@/components/ui/Menu';
import React, { ReactNode } from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
const MenuContent = ({ icon, label }: { icon: ReactNode, label: string }) => {

    return (

        <div className="flex items-center gap-2">

            <span className={'text-2xl'}>{icon}</span>

            <span>{label}</span>

        </div>

    )

}
function Sidebar() {
    return (
        <div className='transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-48 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700'>
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={200}
                thumbMinSize={30}
                universal={true} >
                <Menu>

                    <Menu.MenuItem eventKey="settings">
                        <MenuContent icon={<i className="fa-solid fa-gear"></i>} label="Settings" />
                    </Menu.MenuItem>
                    <Menu.MenuItem eventKey="profile">
                        <MenuContent icon={<i className="fa-solid fa-user"></i>} label="Profile" />
                    </Menu.MenuItem>



                </Menu>

            </Scrollbars>
        </div>
    )
}

export default Sidebar
