"use client";

import CTAButton from "../cta-button";
import SectionLayout from "../section-layout";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Linkedin, Github } from "@geist-ui/icons";
import Link from "next/link";
import BrandsAnimating from "../brands-animating";
import { Cover } from "../ui/cover";
import { useTranslations } from "next-intl";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern";

export default function Hero() {
  return (
    <SectionLayout
      id="hero"
      className="second-md:px-12 flex-row justify-between "
    >
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />
      <div className="flex items-center flex-col gap-10 second-md:gap-0 w-full second-md:flex-row">
        <HeroContent1 />
        <BrandsAnimating direction="inline" />
      </div>
    </SectionLayout>
  );
}

function HeroContent1() {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col gap-4 w-full px-12 second-md:px-0">
      <h1 className="text-muted-foreground text-sm font-medium max-md:w-32">
        {t("title")}
      </h1>
      <div className="max-w-fit border rounded-lg">
        <Cover className="text-6xl font-bold max-w-md">Frontend Developer</Cover>
      </div>
      <div className="flex gap-4">
        <CTAButton />
        
      </div>
      <div className="flex gap-4 z-10">
        <Link
          href="https://www.linkedin.com/in/carlosedujs/"
          target="_blank"
          className="border rounded-full w-10 h-10 flex items-center justify-center"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
        <Link
          href="https://github.com/CarlosEduJs"
          target="_blank"
          className="border rounded-full w-10 h-10 flex items-center justify-center"
        >
          <Github className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
