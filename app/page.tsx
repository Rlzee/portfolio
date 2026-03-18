import { DATA, BLUR_FADE_DELAY } from "@/data/resume"

import { Hero } from "@/section/hero"
import { About } from "@/section/about"
import { Skills } from "@/section/skills"
// import { Projects } from "@/section/projects"
import { Contact } from "@/section/contact"

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <Hero
        name={DATA.name}
        description={DATA.description}
        blurDelay={BLUR_FADE_DELAY}
      />
      <About blurDelay={BLUR_FADE_DELAY} summary={DATA.summary} />
      <Skills blurDelay={BLUR_FADE_DELAY} skills={DATA.skills} />
      {/*<Projects blurDelay={BLUR_FADE_DELAY} />*/}
      <Contact blurDelay={BLUR_FADE_DELAY} email={DATA.email} />
    </main>
  )
}
