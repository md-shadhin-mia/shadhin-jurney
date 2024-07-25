"use client"
import React from 'react'

export const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: (theme: string) => {
        
    },
})

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState('light');
    const changeTheme = (theme: string) => {
        console.log(theme);
        setTheme(theme)
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
