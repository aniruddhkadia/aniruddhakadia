import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import './variables.css'

import Navbar from './navbar'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
import BackToTop from './backToTop'

export const metadata: Metadata = {
  title: 'Home - Aniruddha Kadia',
  icons: {
    icon: '/assets/img/favicon.png',
    apple: '/assets/img/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={inter.className}>{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
