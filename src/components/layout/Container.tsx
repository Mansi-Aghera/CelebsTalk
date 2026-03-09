import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className,
  narrow,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow
          ? "max-w-[720px]"
          : "max-w-full md:max-w-[720px] lg:max-w-[1200px] 2xl:max-w-[1400px]",
        className
      )}
    >
      {children}
    </div>
  );
}