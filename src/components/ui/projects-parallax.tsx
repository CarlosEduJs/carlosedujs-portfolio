"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Badge } from "./badge";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Eye } from "lucide-react";
import { Github } from "@geist-ui/icons";

export const ProjectParallax = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
    badge: string;
    technologies: string[];
    github: string;
  }[];
}) => {
  const rows = [
    projects.slice(0, 5),
    projects.slice(5, 10),
    projects.slice(10, 15),
  ];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const springConfig = { stiffness: 400, damping: 40, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, 50] : [0, 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], isMobile ? [0, -50] : [0, -400]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      isMobile ? [-100, 50] : [-400, 200]
    ),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-fit  py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="px-4"
      >
        {rows.map((row, index) => (
          <motion.div
            key={`row-${index}`}
            className={cn(
              "flex flex-wrap gap-4 md:gap-8 lg:gap-12 mb- md:mb-",
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            )}
          >
            {row.map((project) => (
              <ProjectCard
                project={project}
                translate={index % 2 === 0 ? translateXReverse : translateX}
                key={project.title}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  const t = useTranslations("Projects");
  const githubBTN = useTranslations("GithubBtn");

  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t("title")}
          </h1>
          <p className="max-w-2xl text-base md:text-lg lg:text-xl mt-4 md:mt-6 text-neutral-200">
            {t("content")}
          </p>
        </div>
        <Link
          href="https://github.com/CarlosEduJs?tab=repositories"
          target="_blank"
          className="w-full md:w-auto mt-6 md:mt-0"
          aria-label={githubBTN("content")}
        >
          <InteractiveHoverButton className="w-full md:w-auto text-sm md:text-base font-medium px-8 py-3 md:min-w-64">
            {githubBTN("content")}
          </InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  translate,
  isMobile,
}: {
  project: {
    title: string;
    link: string;
    thumbnail: string;
    badge: string;
    technologies: string[];
    github: string;
  };
  translate: MotionValue<number>;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={!isMobile ? { y: -15 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group/product relative h-[200px] w-[280px] md:h-[320px] md:w-[480px] flex-shrink-0
        rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300
        border border-white/10 hover:border-white/20"
      tabIndex={0}
      aria-label={`Project: ${project.title}`}
    >
      <div
        className="block h-full w-full relative"
        aria-label={`View project: ${project.title}`}
        title={project.title}
      >
        <Image
          src={project.thumbnail}
          fill
          className="object-cover object-top"
          alt={`Thumbnail for ${project.title}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
          <span className="sr-only" aria-hidden="true">
            Overlay
          </span>
        </div>
        <div className="absolute z-10 translate-y-1/2 top-5 left-1/2 -translate-x-1/2 h-1 flex items-center gap-3 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
          <Link
            href={project.link}
            target="_blank"
            aria-label={`Preview ${project.title}`}
          >
            <Button
              variant={"outline"}
              size={"sm"}
              className="text-xs h-8 rounded-2xl"
            >
              <Eye /> Preview
            </Button>
          </Link>
          <Link
            href={project.github}
            target="_blank"
            aria-label={`View repository for ${project.title}`}
          >
            <Button
              variant={"outline"}
              size={"sm"}
              className="text-xs h-8 rounded-2xl"
            >
              <Github />
              Repository
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-[100%] group-hover/product:translate-y-0 transition-transform duration-300 ease-out">
          <Badge className="mb-2 text-xs md:text-sm">{project.badge}</Badge>
          <h2 className="text-white text-lg md:text-2xl font-semibold line-clamp-1">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm px-2 py-1 bg-white/10 rounded-full text-neutral-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
