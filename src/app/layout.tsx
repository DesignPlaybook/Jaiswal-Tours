import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/packages">Tour Packages</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
