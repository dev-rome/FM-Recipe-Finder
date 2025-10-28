import type { Metadata } from "next";
import { nunito, nunitoSans } from "./font";

import Navbar from "@/components/navbar/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Frontend Mentor Challenge - Recipe Finder",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header>
            <Navbar />
          </header>
          <main className="flex-1">
            <div className="container">{children}</div>
          </main>
          <footer>
            <div className="container">{/* Footer content */}</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
