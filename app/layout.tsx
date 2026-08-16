import { Geist_Mono, Outfit, Oxanium } from "next/font/google"

import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Jane Doe — Photographer",
  description:
    "Portfolio of Jane Doe, a photographer working with portraits, landscape, and documentary projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, fontSans.variable, fontHeading.variable)}
    >
      <body className="bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}