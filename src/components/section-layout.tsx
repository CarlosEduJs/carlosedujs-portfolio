import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export default function SectionLayout({
  children,
  className,
  id,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(className, "min-h-screen flex items-center ")}
    >
      {children}
    </section>
  );
}
