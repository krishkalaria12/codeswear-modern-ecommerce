import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './redux/provider'
import Providers from './providers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodesWear - Wear the Code',
  description: "CodesWear - Wear the Code. Unleash your passion for technology and fashion with our exclusive collection of coding-inspired apparel. Elevate your style with unique designs that celebrate the intersection of coding culture and fashion trends.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Provider>
            <Providers>
              <Navbar />
                <main className='w-full dark:bg-[#111827]'>
                  {children}
                </main>
              <Footer />
            </Providers>
          </Provider>
        </body>
      </html>
  )
}
