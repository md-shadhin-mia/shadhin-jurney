"use client"
import Button from '@/components/ui/Button';
import React, { useEffect, useRef } from 'react'
import { FaPlus } from 'react-icons/fa';
import { motion } from "framer-motion";
import ComponentPicker from './ComponentPicker';
import Heading from '@/components/blogUi/Heading/Heading';
import HeadingEditor, { HeadingEditorArgs, HeadingEditorProps } from '@/components/blogUi/Heading/HeadingEditor';
import BlockEditor from './BlockEditor';

function BlogBuilder() {
    const [title, setTitle] = React.useState<string>('');
    const [slug, setSlug] = React.useState<string>('');
    const slugRef = useRef<HTMLInputElement>(null);
    // useEffect(() => {
    //     let tempText
    //     if (!tempText) {
    //         // tempText = document.createElement("div");
    //         // document.body.appendChild(tempText);
    //     }
    //     if (slugRef.current) {
    //         tempText.innerHTML = slug;
    //         tempText.style.position = "absolute";
    //         tempText.style.visibility = "hidden";
    //         // slugRef.current.style.width = tempText.offsetWidth + "px";
    //     }
    // }, [slug, slugRef])
    return (
        <div>
            <input type="text" name='title' className='w-full p-4 px-2' value={title} onChange={(e) => {
                setTitle(e.target.value);
                const s = e.target.value.toLowerCase().replace(/ /g, '-');
                setSlug(s);
            }} placeholder='Enter Blog Title' />


            <div className='relative'>

                <div className='w-full min-h-screen bg-white mt-8 rounded-md'>
                    <div className='border-b border-slate-400 text-center p-2 flex justify-center'>
                        <div className='bg-slate-200 px-8'>
                            https://localhost:3000/
                            <span>
                                <input type="text" placeholder='slug_show_here'
                                    value={slug}
                                    ref={slugRef}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className='bg-transparent focus:border-none focus:outline-none'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='p-2'>
                        {/* <HeadingEditor args={
                            {
                                variant: "h2",
                                content: title
                            }
                        } /> */}
                        <BlockEditor<HeadingEditorArgs> iniArgs={{ varient: "h2", content: title }} >
                            {({ args }) => args && <HeadingEditor args={args} />}
                        </BlockEditor>
                    </div>
                    <div className='p-2 flex justify-center'>
                        <div
                            id="editor"
                            className='w-full'>
                            <ComponentPicker />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBuilder
