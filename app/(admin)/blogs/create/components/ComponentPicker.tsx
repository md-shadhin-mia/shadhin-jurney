"use client"
import Dialog from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
// import Dialog from '@/components/ui/Dialog';
import { motion } from 'framer-motion';
import React from 'react'
import type { MouseEvent } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa';

function ComponentPicker() {
    const [open, setOpen] = React.useState(false);
    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setOpen(false);
    }
    const openDialog = () => {
        setOpen(true)
    }

    return (
        <>
            <motion.button onClick={() => openDialog()} className='w-full bg-slate-300 py-2 flex justify-center hover:bg-slate-200' whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <FaPlus />
            </motion.button>
            <Dialog
                isOpen={open}
                width={'512px'}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <div className='p-2 pt-4 '>

                    {
                        <div>
                            <Input type='search' placeholder='Search Component' className='w-full' prefix={<FaSearch />} />
                        </div>
                    }

                </div>
            </Dialog>
        </>
    )
}

export default ComponentPicker
