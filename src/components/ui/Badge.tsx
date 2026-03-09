import { cn } from "@/lib/utils";

type BadgeVariant = "pink" | "soft" | "dark" | "green" | "yellow";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  pink: "bg-gradient-to-r from-[#E91E8C] to-[#FF6BB5] text-white",
  soft: "bg-[#FFE8F5] text-[#E91E8C]",
  dark: "bg-gray-900 text-white",
  green: "bg-emerald-100 text-emerald-700",
  yellow: "bg-amber-100 text-amber-700",
};

export default function Badge({ label, variant = "soft", icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-base leading-none">{icon}</span>}
      {label}
    </span>
  );
}