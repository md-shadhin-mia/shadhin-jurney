"use client"
import React, { useEffect, useState } from 'react'

export type HeadingEditorArgs = {
    content: React.ReactNode,
    varient?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    customClass?: string
}
export type HeadingEditorProps = {
    args: HeadingEditorArgs
    getOptions?: (options:any)=>void
}

function HeadingEditor({ args, getOptions }: HeadingEditorProps) {
    const { content, varient = 'h1' } = args
    const varientClass = varient === 'h1' ?
        'text-4xl' : varient === 'h2' ?
            'text-3xl' : varient === 'h3' ?
                'text-2xl' : varient === 'h4' ?
                    'text-xl' : varient === 'h5' ?
                        'text-lg' : 'text-base';
        
        const options={
            varient:{
                type:'array',
                values:['h1', 'h2', 'h3', 'h4', 'h5', 'text-base']
            },
        }

        const [contentNew , setContent]=useState<string>(content as string);
        useEffect(()=>{
            setContent(content as string);
        }, [content])

        useEffect(()=>{
            getOptions?.(options)
        },[])
        HTMLTextAreaElement
    return (
        <textarea onInput={(ev)=>setContent(ev.currentTarget.value)} >
            <div className={`${varientClass} font-bold text-gray-800 dark:text-white ${args.customClass}`} >
                {contentNew}
            </div>
        </textarea>
    )
}

export default HeadingEditor
