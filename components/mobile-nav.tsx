"use client"

import { useState } from "react"
import { scrollToSection } from "@/utils/scrollToSection"

import {
  Drawer,
  DrawerPopup,
  DrawerTrigger,
  DrawerPanel,
  DrawerMenu,
  DrawerMenuGroup,
  DrawerClose,
  DrawerMenuItem,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const spanClass =
  "block h-0.5 w-full bg-foreground transition-transform duration-300 ease-in-out"

type Props = {
  items?: {
    id: string
    label: string
  }[]
}

export function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-pressed={open}
            aria-expanded={open}
            onClick={toggle}
            className="flex flex-col gap-1.5 px-2.5"
          />
        }
      >
        <span className={spanClass} />
        <span className={spanClass} />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerPanel>
          <DrawerMenu>
            <DrawerMenuGroup>
              {items?.map((item) => (
                <DrawerClose
                  key={item.id}
                  render={
                    <DrawerMenuItem onClick={() => scrollToSection(item.id)} />
                  }
                >
                  {item.label}
                </DrawerClose>
              ))}
            </DrawerMenuGroup>
          </DrawerMenu>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  )
}
