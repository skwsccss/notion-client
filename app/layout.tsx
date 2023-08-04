import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Command K Menu',
  description: 'Command K menu with Notion API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`} style={{ background: 'white' }}>
        {children}
      </body>
    </html>
  )
}
