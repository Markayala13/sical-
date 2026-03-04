import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const romansBranding = localFont({
  src: [
    { path: '../fonts/Romans Branding.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Romans Branding Italic.ttf', weight: '400', style: 'italic' },
  ],
  variable: '--font-romans',
});

export const metadata: Metadata = {
  title: 'Sical Cleaning | Carpet & Upholstery Cleaning Los Angeles | Since 1999',
  description: 'Sical Cleaning — carpet & upholstery cleaning, strip & wax floors, offices & houses, residential & commercial. Serving Los Angeles since 1999. Call (213) 297-6853.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${romansBranding.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
