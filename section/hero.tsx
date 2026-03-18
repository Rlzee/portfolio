"use client"

import BlurFadeText from "@/components/blur-fade-text"

type HeroProps = {
  name: string
  description: string
  blurDelay: number
}

export function Hero({ name, description, blurDelay }: HeroProps) {
  return (
    <section id="hero" className="scroll-mt-34">
      <div className="mx-auto w-full space-y-8">
        <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
          <div className="order-2 flex flex-col gap-2 md:order-1">
            <BlurFadeText
              delay={blurDelay}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text={`Hi, I'm ${name.split(" ")[0]}`}
            />
            <BlurFadeText
              className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
              delay={blurDelay}
              text={description}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
