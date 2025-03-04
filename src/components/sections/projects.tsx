"use client";
import React from "react";
import { ProjectParallax } from "../ui/projects-parallax";

export default function Projects() {


  return (
    <section
      id="projects"      
      className="relative w-full overflow-hidden  min-h-full"
    >
      <ProjectParallax projects={projects} />
    </section>
  );
}

export const projects = [
  {
    title: "Speedchars- Analyzer Tool",
    link: "https://speedchars.vercel.app",
    thumbnail: "https://i.postimg.cc/9fHX9PNH/imagem-2025-03-01-183214296.png",
    badge: "Personal",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    github: "https://github.com/CarlosEduJS/Speedchars",
  },
  {
    title: "Ink Mark",
    link: "https://ink-mark.vercel.app",
    thumbnail: "https://i.postimg.cc/NjF9fx2s/imagem-2025-03-01-183759300.png",
    badge: "Personal",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    github: "https://github.com/CarlosEduJs/Ink-Mark",
  },
  {
    title: "Simple Average Tool",
    link: "https://simple-average-tool.vercel.app",
    thumbnail: "https://i.postimg.cc/9QQ8msBD/imagem-2025-03-01-183939736.png",
    badge: "Personal",
    technologies: ["Vite", "Tailwind", "React", "Javascript"],
    github: "https://github.com/CarlosEduJs/Simple-Average-Tool"
  },
  {
    title: "Todo List Simple",
    link: "https://todo-list-simple.vercel.app",
    thumbnail: "https://i.postimg.cc/WpmXMsWD/imagem-2025-03-01-184129170.png",
    badge: "challenge- Frontend Mentor",
    technologies: ["Vite", "Tailwind", "React", "Javascript"],
    github: "https://github.com/CarlosEduJs/TodoList-Simple"
  },
  {
    title: "Snap",
    link: "https://snap-phi-jet.vercel.app",
    thumbnail: "https://i.postimg.cc/d3vDMby1/imagem-2025-03-01-213852911.png",
    badge: "challenge- Frontend Mentor",
    technologies: ["Vite", "Tailwind", "React", "Javascript"],
    github: "https://github.com/CarlosEduJs/Snap"
  },
  {
    title: "Mortgage Payments Calculator",
    link: "https://mortgage-payments-calculator.vercel.app",
    thumbnail: "https://i.postimg.cc/L8mkkWQm/imagem-2025-03-01-212640946.png",
    badge: "challenge- Frontend Mentor",
    technologies: ["Vite", "Tailwind", "React", "Javascript"],
    github: "https://github.com/CarlosEduJs/Mortgage-Payments-Calculator"
  },
  {
    title: "Untitled  UI",
    link: "https://untitled-ui-three.vercel.app",
    thumbnail: "https://i.postimg.cc/VLLBnn0T/imagem-2025-03-01-184400471.png",
    badge: "Inspired",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    github: "https://github.com/CarlosEduJs/UntitledUI"
  },
  {
    title: "Jobs",
    link: "https://jobs-two-indol.vercel.app",
    thumbnail: "https://i.postimg.cc/505NmsRM/imagem-2025-03-01-214356878.png",
    badge: "challenge- Frontend Mentor",
    technologies: ["Vite", "Tailwind", "React", "Javascript"],
    github: "https://github.com/CarlosEduJs/Jobs"
  },
];
