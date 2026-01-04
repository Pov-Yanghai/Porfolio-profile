import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/navigation/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "POV YANGHAI | Database Administrator & Data Analyst Portfolio",
  description:
    "Portfolio of POV YANGHAI - Aspiring Database Administrator and Data Analyst specializing in backend systems, database design, and data-driven solutions.",
  generator: "POV YANGHAI Portfolio",
  keywords: [
    "POV YANGHAI",
    "Database Administrator",
    "Data Analyst",
    "Backend Developer",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Data Science",
    "CADT",
    "Cambodia",
  ],
  authors: [{ name: "POV YANGHAI" }],
  icons: {
    icon: [
      {
        url: "/coppybara.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/coppybara.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/coppybara.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/coppybara.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
