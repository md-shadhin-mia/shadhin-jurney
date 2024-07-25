import 'server-only'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './component/Sidebar'
import Navigation from './component/Navigation'
import ThemeContextProvider from '@/components/context/ThemeContextProvider'
import { cookies } from 'next/headers'
import Alert from '@/components/ui/Alert'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Md Shadhin Mia - admin',
    description: 'A Software Engineer and Web Developer.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = cookies().get("user");
    return user?(
        <>
            <Sidebar username={user.value}/>
            <Navigation />
            <main className='lg:ml-48 p-4'>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </main>
        </>
    ):(
        <div>
            <Alert title="No access" type='danger'>
                Access is denied !
            </Alert>
        </div>
    )
}
