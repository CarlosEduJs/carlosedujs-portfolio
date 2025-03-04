import { useTranslations } from "next-intl";
import { TypingAnimation } from "../magicui/typing-animation";
import SectionLayout from "../section-layout";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col gap-2 pt-14 max-second-md:px-12 h-fit pb-20 bg-secondary/10 border "
    >
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <TypingAnimation
          duration={30}
          className="text-muted-foreground text-lg font-normal "
        >
          {t("content")}
        </TypingAnimation>
        <p className="sr-only">{t("content")}</p>
      </div>
    </section>
  );
}
