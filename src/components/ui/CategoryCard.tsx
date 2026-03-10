// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface CategoryCardProps {
//   icon: ReactNode;
//   title: string;
// }

// export default function CategoryCard({ icon, title }: CategoryCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -8, scale: 1.03 }}
//       transition={{ duration: 0.45, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="flex flex-col items-center justify-center
//       w-[120px] h-[120px] md:w-[140px] md:h-[140px]
//       rounded-2xl border border-[var(--neutral-200)]
//       bg-white shadow-sm hover:shadow-md
//       transition-all duration-300"
//     >
//       <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-[var(--primary-400)]">
//         {icon}
//       </div>

//       <p className="text-sm font-medium mt-3 text-[var(--neutral-800)]">
//         {title}
//       </p>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
}

export default function CategoryCard({ icon, title }: CategoryCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="flex flex-col items-center justify-center
      w-[120px] h-[120px] md:w-[140px] md:h-[140px]
      rounded-2xl border border-[var(--neutral-200)]
      bg-white shadow-sm hover:shadow-md
      transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-[var(--primary-400)]">
        {icon}
      </div>

      <p className="text-sm font-medium mt-3 text-[var(--neutral-800)]">
        {title}
      </p>
    </motion.div>
  );
}