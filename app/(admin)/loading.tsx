import Spinner from '@/components/ui/Spinner'
import React from 'react'

function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Spinner size={60} />
        </div>
    )
}

export default Loading
