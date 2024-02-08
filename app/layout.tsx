import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const scp = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abasho',
  description: 'Abasho means hug',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${scp.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
