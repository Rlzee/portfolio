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

import { scrollToSection } from "@/utils/scrollToSection"

type SiteHeaderProps = {
  github?: string
  items?: {
    id: string
    label: string
  }[]
}

export function SiteHeader({ github, items }: SiteHeaderProps) {
  return (
    <div className="sticky top-0 z-20 pt-6">
      <Toolbar className="flex justify-between bg-card/60 backdrop-blur-lg">
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
