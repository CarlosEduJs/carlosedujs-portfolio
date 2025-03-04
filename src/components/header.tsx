"use client";

import { Link } from "@/i18n/navigation";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CTAButton from "./cta-button";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-12 py-4",
        isScrolled && "bg-background/90 backdrop-blur-sm py-1"
      )}
    >
      <Logo />
      <NavLinks />
      <CTAButton />
    </header>
  );
}

function NavLinks() {
  const [activeSection, setActiveSection] = useState("#hero");
  const t = useTranslations("Header");

  const navLinks = [
    {
      label: t("navLinks.home"),
      href: "#hero",
    },
    {
      label: t("navLinks.projects"),
      href: "#projects",
    },
    {
      label: t("navLinks.about"),
      href: "#about",
    },
    {
      label: t("navLinks.contact"),
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        id: link.href,
        element: document.querySelector(link.href),
      }));

      const visibleSections = sections.filter((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100; 
      });

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  const handleLinkClick = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      
      setActiveSection(href); 
    }
  };

  return (
    <nav className="flex items-center gap-16 max-second-md:fixed top-16 max-second-md:left-1/2 max-second-md:-translate-x-1/2 max-second-md:bg-background/90 max-second-md:backdrop-blur-sm max-second-md:py-1 max-second-md:px-2 rounded-xl max-second-md:gap-4 max-second-md:z-50">
      {navLinks.map((link) => (
        <Link
          className={cn(
            "header-nav-link text-sm tracking-widest text-muted-foreground hover:text-primary focus:outline-primary text-center whitespace-nowrap",
            activeSection === link.href &&
              "text-primary bg-secondary/50 rounded-xl p-1 w-20 text-center"
          )}
          key={link.href}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          aria-current={activeSection === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}