import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { DATA } from "@/data/resume"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const fontSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const fontHeading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "600",
})
const fontMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable,
          "font-sans"
        )}
        cz-shortcut-listen="true"
      >
        <ThemeProvider>
          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <SiteHeader github={DATA.github} items={DATA.navbar} />
            <main className="pt-4 pb-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
