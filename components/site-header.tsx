"use client"

import { useTranslations } from "next-intl"

import {
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  ToolbarSeparator,
} from "@/components/ui/toolbar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ModeSwitcher } from "@/components/mode-switcher"
import { MobileNav } from "./mobile-nav"
import { LocaleSwitcher } from "./locale-switcher"

import GithubIcon from "@/components/icons/Github"

import { cn } from "@/lib/utils"
import { scrollToSection } from "@/utils/scrollToSection"
import { useScroll } from "@/hooks/use-scroll"

type SiteHeaderProps = {
  github?: string
  items?: {
    id: string
    label: string
  }[]
}

export function SiteHeader({ github, items }: SiteHeaderProps) {
  const t = useTranslations("DATA")
  const scrolled = useScroll(0)

  return (
    <>
      {/* MOBILE */}
      <nav className="sticky top-0 z-20 border-b border-sidebar-border bg-background/60 sm:hidden">
        <div className="flex justify-between px-2 py-1.5 backdrop-blur-lg">
          <MobileNav items={items} />
          <div className="flex items-center space-x-4">
            <LocaleSwitcher />
            <Separator orientation="vertical" className="mr-2 h-6" />
            <ModeSwitcher className="mr-2" />
            <Separator orientation="vertical" className="mr-2 ml-0 h-6" />
            {github && (
              <Button
                variant="ghost"
                size="icon-lg"
                render={<Link href={github} target="_blank" />}
              >
                <GithubIcon />
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* DESKTOP */}
      <nav
        className={cn(
          "sticky top-0 z-20 hidden px-4 py-4 sm:block",
          scrolled && "py-0"
        )}
      >
        <Toolbar
          className={cn(
            "flex justify-between backdrop-blur-lg",
            scrolled ? "rounded-none border-y-0 bg-background/60" : "bg-card/60"
          )}
        >
          <ToolbarGroup>
            {items?.map((item) => (
              <ToolbarButton
                key={item.id}
                render={
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollToSection(item.id)}
                  />
                }
              >
                {t(`navbar.${item.label}`)}
              </ToolbarButton>
            ))}
          </ToolbarGroup>

          <ToolbarGroup>
            <LocaleSwitcher className="mr-2" />
            <ToolbarSeparator />
            <ToolbarButton render={<Button variant="ghost" size="icon-lg" />}>
              <Link href={github ?? "#"} target="_blank">
                <GithubIcon />
              </Link>
            </ToolbarButton>
            <ToolbarSeparator />
            <ModeSwitcher />
          </ToolbarGroup>
        </Toolbar>
      </nav>
    </>
  )
}
