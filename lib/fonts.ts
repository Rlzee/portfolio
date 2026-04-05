import { Geist, Geist_Mono } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const fontHeading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "600",
})
const fontMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] })

export const fontVariables = cn(
  fontSans.variable,
  fontHeading.variable,
  fontMono.variable
)
