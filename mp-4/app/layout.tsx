import './globals.css';
import { Geist } from 'next/font/google';
import type { Metadata } from 'next';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400','700'],
});

export const metadata: Metadata = {
  title: 'Harvard Art Explorer',
  description: 'Browse the Harvard Art Museums collection',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geist.className}
                    bg-gradient-to-br
                    from-brand-light
                    to-brand-dark
                    min-h-screen
                    text-white`}
      >
        {children}
      </body>
    </html>
  );
}
