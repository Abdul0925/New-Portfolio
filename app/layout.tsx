import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdul Rahim - Portfolio",
  description: "Personal portfolio website showcasing skills, experience, and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>{children}</body>
    </html>
  )
}

