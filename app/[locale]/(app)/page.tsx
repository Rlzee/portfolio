"use client"

import { DATA, BLUR_FADE_DELAY } from "@/data/resume"
import { useTranslations } from "next-intl"

import { CardFrame, Card, CardPanel } from "@/components/ui/card"
import { FlickeringGrid } from "@/components/flickering-grid"

import { Hero } from "@/section/hero"
import { About } from "@/section/about"
import { Skills } from "@/section/skills"
import { Projects } from "@/section/projects"
import { Contact } from "@/section/contact"
import { SiteFooter } from "@/components/site-footer"

import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

export default function Page() {
  const t = useTranslations("DATA")

  const scrolled = useScroll(0)

  return (
    <CardFrame
      className={cn(
        "border-sidebar-border shadow-lg/5 max-sm:rounded-none! max-sm:border-none max-sm:before:rounded-none dark:bg-background",
        scrolled && "sm:rounded-t-none"
      )}
    >
      <Card
        className={cn(
          "max-sm:m-0! max-sm:rounded-none! max-sm:border-none max-sm:[clip-path:none]! dark:bg-background",
          scrolled && "sm:rounded-t-none"
        )}
      >
        <div className="absolute inset-0 top-0 right-0 left-0 z-0 h-[100px] overflow-hidden sm:right-[-1.5]">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <CardPanel className="flex flex-col gap-8 py-8 sm:gap-14 sm:px-12 sm:py-12">
          <Hero
            name={DATA.name}
            description={t("description")}
            blurDelay={BLUR_FADE_DELAY}
          />
          <About blurDelay={BLUR_FADE_DELAY} summary={t("summary")} />
          <Skills blurDelay={BLUR_FADE_DELAY} skills={DATA.skills} />
          <Projects blurDelay={BLUR_FADE_DELAY} projects={DATA.projects} />
          <Contact blurDelay={BLUR_FADE_DELAY} email={DATA.email} />
        </CardPanel>
      </Card>
      <SiteFooter github={DATA.github} codesource={DATA.codesource} />
    </CardFrame>
  )
}
