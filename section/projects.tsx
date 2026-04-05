"use client"

import { useTranslations } from "next-intl"

import BlurFade from "@/components/blur-fade"
import { Badge } from "@/components/ui/badge"
import { ProjectCard, type ProjectCardProps } from "@/components/project-card"

type Props = {
  blurDelay: number
  projects: ProjectCardProps[]
}

export function Projects({ blurDelay, projects }: Props) {
  return (
    <section id="projects">
      <BlurFade delay={blurDelay * 6}>
        <ProjectsSection blurDelay={blurDelay} projects={projects} />
      </BlurFade>
    </section>
  )
}

function ProjectsSection({ blurDelay, projects }: Props) {
  const t = useTranslations("section.projects")

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8 max-sm:py-4">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <Badge size="lg">{t("badge-title")}</Badge>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t("title")}
            </h2>
            <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="sm:grid-cols-auto mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3">
          {projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={blurDelay * 6 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.tags}
                image={project.image}
                video={project.video}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
