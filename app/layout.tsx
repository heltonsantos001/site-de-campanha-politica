import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Felipe Dantas Político',
  description: 'profissional website político. propostas e biografia.',
  generator: 'v0.app',
  keywords: ['template político', 'campanha eleitoral', 'website político', 'protótipo'],
  openGraph: {
    title: 'Felipe Dantas | Político',
    description: 'Template profissional para website político. Personalize com suas informações.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/dantas2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dantas2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dantas2.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/dantas2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
