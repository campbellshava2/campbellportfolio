import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Campbell',
  description: 'A portfolio for Chiurai Campbell Shava',
  generator: 'Navjo Synk Solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="responsive-body">{children}</body>
    </html>
  )
}
