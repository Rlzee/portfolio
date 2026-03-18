import { DATA, BLUR_FADE_DELAY } from "@/data/resume"

import { CardFrame, Card, CardPanel } from "@/components/ui/card"
import { FlickeringGrid } from "@/components/flickering-grid"

import { Hero } from "@/section/hero"
import { About } from "@/section/about"
import { Skills } from "@/section/skills"
import { Projects } from "@/section/projects"
import { Contact } from "@/section/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <CardFrame className="border-sidebar-border shadow-lg/5 dark:bg-background">
      <Card className="dark:bg-background">
        <div className="absolute inset-0 top-0 right-[-1.5] left-0 z-0 h-[100px] overflow-hidden">
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
            description={DATA.description}
            blurDelay={BLUR_FADE_DELAY}
          />
          <About blurDelay={BLUR_FADE_DELAY} summary={DATA.summary} />
          <Skills blurDelay={BLUR_FADE_DELAY} skills={DATA.skills} />
          <Projects blurDelay={BLUR_FADE_DELAY} />
          <Contact blurDelay={BLUR_FADE_DELAY} email={DATA.email} />
        </CardPanel>
      </Card>
      <SiteFooter github={DATA.github} codesource={DATA.codesource} />
    </CardFrame>
  )
}
