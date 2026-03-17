"use client"

import BlurFade from "@/components/blur-fade"
import Markdown from "react-markdown"

type AboutProps = {
  blurDelay: number
  summary: string
}

export function About({ blurDelay, summary }: AboutProps) {
  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={blurDelay * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={blurDelay * 4}>
          <div className="prose dark:prose-invert max-w-full font-sans leading-relaxed text-pretty text-muted-foreground">
            <Markdown>{summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
