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
      <body className={inter.className}>
        <div className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">
          <Nav/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
