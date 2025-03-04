import Link from "next/link";
import SectionLayout from "../section-layout";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Linkedin, Mail } from "@geist-ui/icons";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <SectionLayout
      id="contact"
      className="flex flex-col gap-6 pt-20 justify-center max-h-[200px] max-second-md:px-12"
    >
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
      </header>
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-xl">{t("subtitle")}</h2>
        <h3 className="text-muted-foreground text-sm max-w-2xl">
          {t("content")}
        </h3>
        <div className="flex items-center w-full max-md:flex-col gap-3">
          <Link href="mailto:carloseduardogit@gmail.com" target="_blank">
            <InteractiveHoverButton className="text-sm font-medium text-muted-foreground group">
              <div className="flex items-center group-hover:flex-row flex-row-reverse gap-3">
                <Mail className="w-4 h-4" />
                {t("btnSendEmail")}
              </div>
            </InteractiveHoverButton>
          </Link>
          <Link href="https://www.linkedin.com/in/carlosedujs/" target="_blank">
            <InteractiveHoverButton className="text-sm font-medium text-muted-foreground group">
              <div className="flex items-center group-hover:flex-row flex-row-reverse gap-3">
                <Linkedin className="w-4 h-4" />
                {t("btnConnectLinkedIn")}
              </div>
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}
