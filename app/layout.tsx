import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const scp = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'abasho',
  description: 'abasho',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${scp.className}`}>
        <div id='container' className='min-h-screen'>
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
