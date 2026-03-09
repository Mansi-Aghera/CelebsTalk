// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { cn } from "@/lib/utils";
// // import { Loader2 } from "lucide-react";

// // interface ButtonProps {
// //   children: React.ReactNode;
// //   className?: string;
// //   variant?: "primary" | "secondary" | "outline" | "ghost";
// //   size?: "sm" | "md" | "lg";
// //   href?: string;
// //   loading?: boolean;
// //   iconLeft?: React.ReactNode;
// //   iconRight?: React.ReactNode;
// //   fullWidth?: boolean;
// //   onClick?: () => void;
// //   type?: "button" | "submit" | "reset";
// // }

// // const sizeStyles = {
// //   sm: "text-sm px-4 py-2",
// //   md: "text-sm md:text-base px-5 py-2.5",
// //   lg: "text-base md:text-lg px-6 py-3",
// // };

// // const variantStyles = {
// //   primary:
// //     "text-white bg-[var(--gradient-primary)] hover:opacity-90",

// //   secondary:
// //     "text-white bg-[var(--gradient-secondary)] hover:opacity-90",

// //   outline:
// //     "border border-[var(--primary-300)] text-[var(--primary-300)] hover:bg-[var(--primary-300)] hover:text-white",

// //   ghost:
// //     "text-[var(--neutral-900)] hover:bg-[var(--pink-soft)]",
// // };

// // export default function Button({
// //   children,
// //   className,
// //   variant = "primary",
// //   size = "md",
// //   href,
// //   loading,
// //   iconLeft,
// //   iconRight,
// //   fullWidth,
// //   onClick,
// //   type = "button",
// // }: ButtonProps) {
// //   const baseStyles =
// //     "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none";

// //   const buttonClasses = cn(
// //     baseStyles,
// //     sizeStyles[size],
// //     variantStyles[variant],
// //     fullWidth && "w-full",
// //     className
// //   );

// //   const content = (
// //     <>
// //       {loading ? (
// //         <Loader2 size={18} className="animate-spin" />
// //       ) : (
// //         <>
// //           {iconLeft && <span>{iconLeft}</span>}
// //           {children}
// //           {iconRight && <span>{iconRight}</span>}
// //         </>
// //       )}
// //     </>
// //   );

// //   if (href) {
// //     return (
// //       <Link href={href}>
// //         <motion.span
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.95 }}
// //           className={buttonClasses}
// //         >
// //           {content}
// //         </motion.span>
// //       </Link>
// //     );
// //   }

// //   return (
// //     <motion.button
// //       whileHover={{ scale: 1.05 }}
// //       whileTap={{ scale: 0.95 }}
// //       type={type}
// //       onClick={onClick}
// //       className={buttonClasses}
// //       disabled={loading}
// //     >
// //       {content}
// //     </motion.button>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import { Loader2 } from "lucide-react";

// interface ButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   variant?: "primary" | "secondary" | "outline" | "ghost" | "soft";
//   size?: "sm" | "md" | "lg";
//   href?: string;
//   loading?: boolean;
//   iconLeft?: React.ReactNode;
//   iconRight?: React.ReactNode;
//   fullWidth?: boolean;
//   onClick?: () => void;
//   type?: "button" | "submit" | "reset";
// }

// const sizeStyles = {
//   sm: "text-sm px-4 py-2",
//   md: "text-sm md:text-base px-5 py-2.5",
//   lg: "text-base md:text-lg px-6 py-3",
// };

// const variantStyles = {
//   primary: "text-white",

//   secondary: "text-white",

//   outline:
//     "border border-[var(--primary-300)] text-[var(--primary-300)] hover:bg-[var(--primary-300)] hover:text-white",

//   ghost:
//     "text-[var(--neutral-900)] hover:bg-[var(--primary-100)]/10",

//   soft:
//     "text-[var(--primary-300)] border border-[#f3b6d1]",
// };

// export default function Button({
//   children,
//   className,
//   variant = "primary",
//   size = "md",
//   href,
//   loading,
//   iconLeft,
//   iconRight,
//   fullWidth,
//   onClick,
//   type = "button",
// }: ButtonProps) {
//   const baseStyles =
//     "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none";

//   const buttonClasses = cn(
//     baseStyles,
//     sizeStyles[size],
//     variantStyles[variant],
//     fullWidth && "w-full",
//     className
//   );

//   const gradientStyle =
//     variant === "primary"
//       ? { background: "var(--gradient-primary)" }
//       : variant === "secondary"
//       ? { background: "var(--gradient-secondary)" }
//       : variant === "soft"
//       ? { background: "linear-gradient(135deg,#fde3ef,#f7c4da)" }
//       : undefined;

//   const content = (
//     <>
//       {loading ? (
//         <Loader2 size={18} className="animate-spin" />
//       ) : (
//         <>
//           {iconLeft && <span>{iconLeft}</span>}
//           {children}
//           {iconRight && <span>{iconRight}</span>}
//         </>
//       )}
//     </>
//   );

//   if (href) {
//     return (
//       <Link href={href}>
//         <motion.span
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className={buttonClasses}
//           style={gradientStyle}
//         >
//           {content}
//         </motion.span>
//       </Link>
//     );
//   }

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       type={type}
//       onClick={onClick}
//       className={buttonClasses}
//       style={gradientStyle}
//       disabled={loading}
//     >
//       {content}
//     </motion.button>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary" | "ghost" | "soft";
  size?: "sm" | "md" | "lg";
  href?: string;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const sizeStyles = {
  sm: "text-sm px-4 py-2",
  md: "text-sm md:text-base px-5 py-2.5",
  lg: "text-base md:text-lg px-6 py-3",
};

const variantStyles = {
  primary: "text-white border-0",
  secondary: "text-white border-0",
  "outline-primary": "border border-[var(--primary-300)] text-[var(--primary-300)] hover:bg-[var(--primary-300)] hover:text-white",
  "outline-secondary": "border border-[var(--secondary-300)] text-[var(--secondary-300)] hover:bg-[var(--secondary-300)] hover:text-white",
  ghost: "text-[var(--neutral-900)] hover:bg-[var(--neutral-200)]",
  soft: "text-[var(--primary-300)] border border-[#f3b6d1]",
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  loading,
  iconLeft,
  iconRight,
  fullWidth,
  onClick,
  type = "button",
}: ButtonProps) {

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md";

  const buttonClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  const gradientStyle =
    variant === "primary"
      ? { background: "var(--gradient-primary)" }
      : variant === "secondary"
      ? { background: "var(--gradient-secondary)" }
      : variant === "soft"
      ? { background: "linear-gradient(135deg,#fde3ef,#f7c4da)" }
      : undefined;

  const content = loading ? (
    <Loader2 size={18} className="animate-spin" />
  ) : (
    <>
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={buttonClasses}
          style={gradientStyle}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={buttonClasses}
      style={gradientStyle}
      disabled={loading}
    >
      {content}
    </motion.button>
  );
}