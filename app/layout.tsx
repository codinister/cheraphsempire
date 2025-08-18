import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import QueryProvider from "@/state/query/QueryProvider";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Cheraphs Empire",
  description: "Building and Construction in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Nav />
        {children}
        </QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
