"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

function NextJS() {
  return (
    <Image
      src="/nextjs-icon.png"
      alt="NextJS"
      width={180}
      height={180}
      aria-label="NextJS"
    />
  );
}

function Tailwind() {
  return (
    <Image
      src="/icons/tailwind.svg"
      alt="Tailwind"
      width={180}
      height={180}
      aria-label="Tailwind CSS"
    />
  );
}

function TypeScript() {
  return (
    <Image
      src="/icons/typescript.svg"
      alt="TypeScript"
      width={180}
      height={180}
      aria-label="TypeScript"
    />
  );
}

function JavaScript() {
  return (
    <Image
      src="/icons/javascript.svg"
      alt="JavaScript"
      width={180}
      height={180}
      aria-label="JavaScript"
    />
  );
}

function React() {
  return (
    <Image
      src="/icons/react.svg"
      alt="React"
      width={180}
      height={180}
      aria-label="React"
    />
  );
}

function HTML() {
  return (
    <Image
      src="/icons/html-5.svg"
      alt="HTML"
      width={180}
      height={180}
      aria-label="HTML5"
    />
  );
}

function CSS() {
  return (
    <Image
      src="/icons/css-3.svg"
      alt="CSS"
      width={180}
      height={180}
      aria-label="CSS3"
    />
  );
}

const Icons = {
  nextjs: () => <NextJS />,
  typescript: () => <TypeScript />,
  tailwind: () => <Tailwind />,
  html: () => <HTML />,
  css: () => <CSS />,
  javascript: () => <JavaScript />,
  react: () => <React />,
};

interface BrandingsAnimateProps {
  direction: "inline" | "vertical";
}

export default function BrandsAnimating({ direction }: BrandingsAnimateProps) {
  const icons = [
    Icons.nextjs,
    Icons.typescript,
    Icons.tailwind,
    Icons.html,
    Icons.css,
    Icons.javascript,
    Icons.react,
  ];

  return (
    <div className="flex flex-col w-full justify-center second-md:items-center py-5 pb-12 second-md:p-4 overflow-hidden">
      <h1 className="text-2xl font-bold text-muted-foreground mb-10  text-center">
        Hard Skills
      </h1>
      <motion.div
        className={cn(
          "grid grid-cols-4 gap-8 px-12",
          direction === "vertical" && "grid-cols-1"
        )}
        animate={{ x: [0, -50, 0], opacity: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="w-16 h-16 flex-shrink-0 cursor-pointer min-h-fit"
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            role="img"
            aria-label={`Ícone ${Icon.name}`}
            title={"Tech: " + Icon.name}
          >
            <Icon />
            <h1 className="sr-onl text-center">{Icon.name}</h1>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
