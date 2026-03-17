import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { FlickeringGrid } from "@/components/flickering-grid"

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
          {" "}
          <div className="absolute inset-0 top-0 right-0 left-0 z-0 h-[100px] overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative isolate z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
