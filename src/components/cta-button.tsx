import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";
import { Github } from "@geist-ui/icons";
import { useTranslations } from "next-intl";

export default function CTAButton() {
  const t = useTranslations();
  return (
    <Link href="https://github.com/CarlosEduJS" target="_blank">
      <RainbowButton className="text-sm h-8 w-42 flex items-center gap-2">
        <Github className="w-4 h-4" />
        {t("CTAButton")}
      </RainbowButton>
    </Link>
  );
}
