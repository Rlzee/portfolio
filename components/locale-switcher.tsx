"use client"

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

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

export function LocaleSwitcher({ className, size }: Props) {

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (...args: [string | null, unknown?]) => {
    const newLocale = args[0];
    if (!newLocale || newLocale === locale) return;
    const path = pathname || "/";
    void router.replace(path, { locale: newLocale });
    try {
      void router.refresh();
    } catch {
      // ignore if not supported
    }
  };

  return (
    <Select
      aria-label="Select Language"
      defaultValue={locale}
      onValueChange={changeLocale}
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
