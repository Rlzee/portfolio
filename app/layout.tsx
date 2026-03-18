import "./globals.css"
import { fontVariables } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative min-h-screen font-sans antialiased ${fontVariables}`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
