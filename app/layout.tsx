"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import Head from './head';
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={`${inter.className} bg-white text-gray-900 selection:bg-blue-100 h-full`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
