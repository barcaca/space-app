import Footer from '@/components/layouts/footer'
import { Header } from '@/components/layouts/header'
import { poppins, raleway } from '@/fonts/font'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space App',
  description: 'Fotos do espaço',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${raleway.variable} min-h-full scroll-smooth`}
    >
      <body className="h-full bg-gradient-to-b from-primary to-secondary p-6 antialiased ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
