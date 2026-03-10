import { cn } from "@/lib/utils";

type BgVariant = "white" | "pink-soft" | "gradient" | "transparent";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: BgVariant;
  id?: string;
}

const bgMap: Record<BgVariant, string> = {
  white: "bg-white",
  "pink-soft": "bg-[#FFF5FB]",
  gradient: "bg-gradient-to-b from-[#FFF5FB] via-[#FFE8F5] to-[#FFF5FB]",
  transparent: "bg-transparent",
};

export default function Section({
  children,
  className,
  bg = "transparent",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full overflow-hidden py-11 md:py-21",
        bgMap[bg],
        className
      )}
    >
      {children}
    </section>
  );
}