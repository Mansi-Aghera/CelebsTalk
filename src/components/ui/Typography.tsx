import { cn } from "@/lib/utils";

// Section Label (pink small text above headings like "Meet Your Favorite CelebsTalk")
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm font-semibold text-[#E91E8C] tracking-wide mb-2", className)}>
      {children}
    </p>
  );
}

// Main Heading (large bold black)
export function Heading({
  children,
  className,
  as: Tag = "h2",
  gradient,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  gradient?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "font-bold leading-tight text-gray-900",
        {
          "text-4xl md:text-5xl lg:text-6xl": Tag === "h1",
          "text-3xl md:text-4xl": Tag === "h2",
          "text-2xl md:text-3xl": Tag === "h3",
          "text-xl md:text-2xl": Tag === "h4",
        },
        gradient &&
          "text-transparent bg-clip-text bg-gradient-to-r from-[#E91E8C] to-[#FF6BB5]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

// Body text
export function BodyText({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };
  return (
    <p className={cn("text-gray-500 leading-relaxed", sizes[size], className)}>
      {children}
    </p>
  );
}