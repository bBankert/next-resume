import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppBar from './components/app-bar'
import StoreProvider from '../libs/providers'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandon Bankert',
  description: 'Brandon Bankert Resume Website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='min-h-screen flex flex-col'>
            <div className='flex flex-col flex-1'>
              <AppBar />
              <main className='flex-1 mx-auto max-w-screen-xl w-full mt-20'>
                <div className='page-container flex flex-col w-full items-center'>
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
