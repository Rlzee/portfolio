type FooterProps = {
  github: string
  codesource: string
}

export function SiteFooter({ github, codesource }: FooterProps) {
  return (
    <div className="rounded-b-2xl px-4 py-6 lg:px-8">
      <div className="w-full px-1 text-center text-sm leading-loose text-muted-foreground">
        © {new Date().getFullYear()} Built by{" "}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          RLZ
        </a>
        . The source code is available on{" "}
        <a
          href={codesource}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  )
}
