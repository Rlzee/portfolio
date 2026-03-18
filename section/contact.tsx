import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BlurFade from "@/components/blur-fade"
import { FlickeringGrid } from "@/components/flickering-grid"
import Link from "next/link"

type ContactProps = {
  blurDelay: number
  email: ContactSectionProps["email"]
}

export function Contact({ blurDelay, email }: ContactProps) {
  return (
    <section id="contact">
      <BlurFade delay={blurDelay * 7}>
        <ContactSection email={email} />
      </BlurFade>
    </section>
  )
}

type ContactSectionProps = {
  email: string
}

function ContactSection({ email }: ContactSectionProps) {
  return (
    <Card className="p-10">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 px-4 py-1">
        <Badge size="lg">Contact</Badge>
      </div>
      <div className="absolute inset-0 top-0 right-0 left-0 h-1/2 overflow-hidden rounded-2xl">
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
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-balance text-muted-foreground">
          Want to chat? Send me an email{" "}
          <Link
            href="mailto:romainprovencel@icloud.com"
            className="rounded-sm text-foreground underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {email}
          </Link>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </Card>
  )
}
