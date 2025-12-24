import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter, Montserrat } from 'next/font/google'
import './globals.css'
import DarkModeProvider from '@/components/DarkModeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '365 The Travel Cafe - Journey Through Flavors',
  description: 'A unique travel-themed cafe bringing global flavors and experiences to your neighborhood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${montserrat.variable} font-body antialiased`}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}
