"use client"

import { useState } from "react"

import {
  Card,
  CardFrame,
  CardDescription,
  CardFrameFooter,
  CardPanel,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Markdown from "react-markdown"

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false)

  if (!src || imageError) {
    return (
      <div className="h-48 w-full rounded-xl border bg-muted object-cover" />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-48 w-full rounded-xl border object-cover"
      onError={() => setImageError(true)}
    />
  )
}

export interface ProjectCardProps {
  title: string
  href?: string
  description: string
  dates: string
  tags: readonly string[]
  image?: string
  video?: string
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
}: ProjectCardProps) {
  return (
    <CardFrame className="w-full after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-xl)+4px)] after:border after:border-border/64 dark:bg-background">
      <Card className="flex-1 flex-col flex-wrap overflow-x-auto dark:bg-background">
        <CardPanel className="p-0">
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-full rounded-xl border object-cover"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="h-48 w-full rounded-xl border bg-muted object-cover" />
            )}
          </Link>
        </CardPanel>
      </Card>
      <CardFrameFooter className="flex flex-col gap-3 px-3">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{dates}</CardDescription>
        </div>
        {description && (
          <div className="prose dark:prose-invert max-w-full flex-1 font-sans text-sm leading-relaxed text-pretty text-muted-foreground">
            <Markdown>{description}</Markdown>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} className="px-2" variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardFrameFooter>
    </CardFrame>
  )
}
