"use client"

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
] as const

type Props = {
  className?: string
  size?: React.ComponentProps<typeof SelectTrigger>["size"]
}

export function SelectLanguage({ className, size }: Props) {
  return (
    <Select
      aria-label="Select Language"
      defaultValue={languages[0].value}
      items={languages}
    >
      <SelectTrigger className={className} size={size}>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {languages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {language.label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  )
}
