import { DATA } from "@/data/resume"
import { SiteHeader } from "@/components/site-header"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 mx-auto max-w-4xl">
      <SiteHeader github={DATA.github} items={DATA.navbar} />
      <main className="sm:px-4 sm:pb-6">{children}</main>
    </div>
  )
}
