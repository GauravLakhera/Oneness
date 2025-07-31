import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'Oneness Pheretechno - Engineering Excellence',
  description: 'Modern engineering solutions with collaborative precision and innovative excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        <SmoothScrollProvider>
          <Navigation />
          <main className="relative min-h-screen">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
