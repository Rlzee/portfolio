import { useTranslations } from "next-intl"

type FooterProps = {
  github: string
  codesource: string
}

export function SiteFooter({ github, codesource }: FooterProps) {
  const t = useTranslations("footer")

  return (
    <div className="max px-4 py-6 max-sm:border-t max-sm:border-sidebar-border max-sm:shadow-lg/5 sm:rounded-b-2xl lg:px-8">
      <div className="w-full px-1 text-center text-sm leading-loose text-muted-foreground">
        © {new Date().getFullYear()} {t("1")}{" "}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          {t("name")}
        </a>
        {t("2")}{" "}
        <a
          href={codesource}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          {t("github")}
        </a>
        .
      </div>
    </div>
  )
}
