import type { Metadata } from 'next'
import Header from '@/component/Header'
import Footer from '@/component/Footer/Footer'

import '../styles/globals.css';
import {Montserrat} from 'next/font/google'
const mont = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'root layout',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header/>
        <div className="container">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
