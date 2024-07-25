'use client'
import { ThemeContext } from '@/components/context/ThemeContextProvider'
import Switcher from '@/components/ui/Switcher'
import React, { useContext } from 'react'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

function ThemeToggol() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <Switcher
                // checked={theme !== 'dark'}
                onChange={(checked) => { setTheme(theme === 'dark' ? 'light' : 'dark'); }}
                unCheckedContent={<div className='text-lg'><RiMoonClearLine /></div>}
                checkedContent={<div className='text-lg'><RiSunLine /></div>}
            />
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>check</button>
        </div>
    )
}

export default ThemeToggol
