import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import QueryProvider from '@/state/query/QueryProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cheraphs Group of Companies',
  description: 'Building and Construction in Ghana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  cz-shortcut-listen="true">
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
