"use client"

import type React from "react"
import BlurFade from "@/components/blur-fade"

type SkillsProps = {
  blurDelay: number
  skills: {
    name: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
}

export function Skills({ blurDelay, skills }: SkillsProps) {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={blurDelay * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={blurDelay * 10 + id * 0.05}>
              <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                {skill.icon && (
                  <skill.icon className="size-4 overflow-hidden object-contain" />
                )}
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
