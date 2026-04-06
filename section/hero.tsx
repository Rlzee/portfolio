"use client"

import { useTranslations } from "next-intl"

import BlurFadeText from "@/components/blur-fade-text"
import BlurFade from "@/components/blur-fade"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type HeroProps = {
  name: string
  description: string
  blurDelay: number
}

export function Hero({ name, description, blurDelay }: HeroProps) {
  const t = useTranslations("section.hero")

  return (
    <section id="hero" className="scroll-mt-34">
      <div className="mx-auto w-full space-y-8">
        <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
          <div className="order-2 flex flex-col gap-2 md:order-1">
            <BlurFadeText
              delay={blurDelay}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text={`${t("title")} ${name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="max-w-[600px] tracking-tighter text-muted-foreground md:text-lg lg:text-xl"
              delay={blurDelay}
              text={description}
            />
          </div>
          <BlurFade delay={blurDelay} className="order-1 md:order-2">
            <Avatar className="size-24 border md:size-32">
              <AvatarImage src="/bitmoji.png" alt="Avatar" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
