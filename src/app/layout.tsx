import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Ihtisham | Personal Portfolio',
   description: 'Ihtisham is a frontend developer and a passionate learner.'
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-gray-50`}>
            {children}
         </body>
      </html>
   )
}
