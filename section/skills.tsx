"use client"

import type React from "react"
import BlurFade from "@/components/blur-fade"
import { Badge } from "@/components/ui/badge"

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
              <Badge variant="outline" size="lg" className="px-2 py-3">
                {skill.icon && (
                  <skill.icon className="size-4 overflow-hidden object-contain" />
                )}
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
