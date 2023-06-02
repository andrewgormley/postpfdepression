import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew Gormley | Portfolio',
  description: 'Andrew Gormley Portfolio | UI UX Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <div className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">
          <div className="flex mx-auto w-full relative z-10">
            <div className="absolute top-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 from-30% via-zinc-950 via-60% to-transparent to-90% h-48 md:h-96 w-full"></div>
          </div>
          <Nav/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
