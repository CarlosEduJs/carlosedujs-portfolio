"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

export function SelectLanguage() {
  const pathname = usePathname();
  const router = useRouter();

  const removeLocaleFromPath = (path: string) => {
    const segments = path.split("/");
    return `/${segments.slice(2).join("/")}`;
  };

  const locales = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português BR" },
  ];

  const handleLanguageChange = (localeCode: string) => {
    router.push(`/${localeCode}${removeLocaleFromPath(pathname)}`);
  };

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-fit fixed bottom-5 right-5 rounded">
        <SelectValue
          placeholder={
            locales.find((l) => l.code === pathname.split("/")[1])?.name
          }
        />
      </SelectTrigger>
      <SelectContent className="rounded">
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {locales.map((locale) => (
            <SelectItem key={locale.code} value={locale.code}>
              {locale.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
