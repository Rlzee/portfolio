"use client"

import { useTranslations } from "next-intl"

import BlurFade from "@/components/blur-fade"
import Markdown from "react-markdown"

type AboutProps = {
  blurDelay: number
  summary: string
}

export function About({ blurDelay, summary }: AboutProps) {
  const t = useTranslations("section.about")

  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={blurDelay * 2}>
          <h2 className="text-xl font-bold">{t("title")}</h2>
        </BlurFade>
        <BlurFade delay={blurDelay * 3}>
          <div className="prose dark:prose-invert max-w-full font-sans leading-relaxed text-pretty text-muted-foreground">
            <Markdown>{summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
