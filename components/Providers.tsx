"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "./layout/ThemeProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
}
