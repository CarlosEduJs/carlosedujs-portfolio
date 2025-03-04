import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { SelectLanguage } from "@/components/select-language";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <SelectLanguage />
    </div>
  );
}
