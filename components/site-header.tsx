"use client"

import {
  Toolbar,
  ToolbarGroup,
  ToolbarButton,
  ToolbarSeparator,
} from "@/components/ui/toolbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeSwitcher } from "@/components/mode-switcher"

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
  const scrolled = useScroll(0)

  return (
    <div
      className={cn(
        "sticky top-0 z-20 py-4 transition-all ease-in-out",
        scrolled && "py-0"
      )}
    >
      <Toolbar
        className={cn(
          "flex justify-between backdrop-blur-lg transition-all ease-in-out",
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
              {item.label}
            </ToolbarButton>
          ))}
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton render={<Button variant="ghost" size="icon-lg" />}>
            <Link href={github ?? "#"} target="_blank">
              <GithubIcon />
            </Link>
          </ToolbarButton>
          <ToolbarSeparator />
          <ModeSwitcher />
        </ToolbarGroup>
      </Toolbar>
    </div>
  )
}
