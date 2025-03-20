import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cursor Vibe Todo App',
  description: 'A simple todo app built with Next.js',
  other: {
    'content-language': 'en',
    'X-UA-Compatible': 'IE=edge',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="alternate" hrefLang="en" href="/" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 