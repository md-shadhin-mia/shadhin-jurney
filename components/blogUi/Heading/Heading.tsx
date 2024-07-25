import React from 'react'

type Props = {
    args: {
        content: React.ReactNode,
        variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    }
}

function Heading({ args }: Props) {
    const { content, variant = 'h1' } = args
    const varientClass = variant === 'h1' ?
        'text-4xl' : variant === 'h2' ?
            'text-3xl' : variant === 'h3' ?
                'text-2xl' : variant === 'h4' ?
                    'text-xl' : variant === 'h5' ?
                        'text-lg' : 'text-base'
    return (
        <div className={`${varientClass} font-bold text-gray-800 dark:text-white`}>
            {content}
        </div>
    )
}

export default Heading
