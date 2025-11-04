
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "@/app/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "SMRT CV",
  description: "The smart way to manage your CVs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
