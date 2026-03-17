"use client"

import BlurFade from "@/components/blur-fade"
import { Badge } from "@/components/ui/badge"

type ProjectProps = {
  blurDelay: number
}

export function Projects({ blurDelay }: ProjectProps) {
  return (
    <section id="projects">
      <BlurFade delay={blurDelay * 11}>
        <ProjectsSection />
      </BlurFade>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <Badge size="lg">My Projects</Badge>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Check out my latest work
            </h2>
            <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2"></div>
      </div>
    </section>
  )
}
