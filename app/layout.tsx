import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharkeny",
  description: "Sharkny tech blog to share knowledge ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <Navbar/>
        {children}
        <Footer/>
        </ClerkProvider>
       
      </body>
    </html>
  );
}
