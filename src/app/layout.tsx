import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/templates/navbar/Navbar";
import { TableProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`font-iranYekan antialiased max-w-[1400px] mx-auto`}>
        <TableProvider>
          <Navbar />
          {children}
        </TableProvider>
      </body>
    </html>
  );
}
