import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Md Shadhin Mia',
  description: 'A Software Engineer and Web Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className + " dark:bg-slate-900 mb-[56px] sm:mb-[116px]"}>
        {children}
      </body>
    </html>
  )
}
