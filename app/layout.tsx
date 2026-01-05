import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair_Display = Playfair_Display({
  variable: "--font-playfair",
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
        className={`${inter.variable} ${playfair_Display.variable} antialiased`}
      >
        <ClerkProvider>
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
          <Navbar/>
        {children}
        <Footer/> 
      </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
