import { DATA } from "@/data/resume"

import { CardFrame, Card, CardPanel } from "@/components/ui/card"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FlickeringGrid } from "@/components/flickering-grid"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4">
      <main className="min-h-screen py-24">
        <CardFrame className="border-sidebar-border shadow-lg/5 dark:bg-background">
          <Card className="dark:bg-background">
            <div className="absolute inset-0 top-0 right-[-1.5] left-0 z-0 h-[100px] overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <CardPanel className="py-8">
              <Empty>
                <EmptyHeader>
                  <EmptyTitle className="mask-b-from-20% mask-b-to-80% text-9xl font-extrabold">
                    404
                  </EmptyTitle>
                  <EmptyDescription className="text-nowrap text-foreground/80 [[data-slot=empty-title]+&]:-mt-8">
                    The page you&apos;re looking for might have been <br />
                    moved or doesn&apos;t exist.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button render={<Link href="/" />}>Go Home</Button>
                </EmptyContent>
              </Empty>
            </CardPanel>
          </Card>
          <SiteFooter github={DATA.github} codesource={DATA.codesource} />
        </CardFrame>
      </main>
    </div>
  )
}
