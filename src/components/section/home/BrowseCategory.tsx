
// ─── STATIC CODE (COMMENTED OUT) ──────────────────────────

// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import CategoryCard from "@/components/ui/CategoryCard";

// import {
//   User,
//   Music,
//   Gamepad2,
//   Trophy,
//   Star,
//   Clapperboard,
// } from "lucide-react";

// const categories = [
//   { icon: <User size={22} />, title: "Actors" },
//   { icon: <Music size={22} />, title: "Singers" },
//   { icon: <Gamepad2 size={22} />, title: "Gamers" },
//   { icon: <Trophy size={22} />, title: "Athletes" },
//   { icon: <User size={22} />, title: "Actors" },
//   { icon: <Star size={22} />, title: "Models" },
//   { icon: <Clapperboard size={22} />, title: "Creators" },
//   { icon: <Star size={22} />, title: "Models" },
//   { icon: <Gamepad2 size={22} />, title: "Gamers" },
// ];

// // Duplicate list for infinite loop
// const loopCategories = [...categories, ...categories];

// export default function BrowseCategory() {
//   return (
//     <Section className="py-24">
//       <Container>

//         {/* Heading */}
//         <div className="text-center">
//           <h2
//             className="text-[32px] md:text-[52px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Browse by Category
//           </h2>

//           <p className="text-[var(--neutral-600)] mt-2">
//             Find the icons that inspire you
//           </p>
//         </div>

//         {/* Infinite Carousel */}
//         <div className="overflow-hidden mt-14">

//           <motion.div
//             className="flex gap-6 w-max"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               ease: "linear",
//               duration: 70,
//               repeat: Infinity,
//             }}
//           >
//             {loopCategories.map((category, index) => (
//               <CategoryCard
//                 key={index}
//                 icon={category.icon}
//                 title={category.title}
//               />
//             ))}
//           </motion.div>

//         </div>

//       </Container>
//     </Section>
//   );
// }


// no scroll


// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import CategoryCard from "@/components/ui/CategoryCard";

// import {
//   User,
//   Music,
//   Gamepad2,
//   Trophy,
//   Star,
//   Clapperboard,
// } from "lucide-react";

// const categories = [
//   { icon: <User size={22} />, title: "Actors" },
//   { icon: <Music size={22} />, title: "Singers" },
//   { icon: <Gamepad2 size={22} />, title: "Gamers" },
//   { icon: <Trophy size={22} />, title: "Athletes" },
//   { icon: <User size={22} />, title: "Actors" },
//   { icon: <Star size={22} />, title: "Models" },
//   { icon: <Clapperboard size={22} />, title: "Creators" },
//   { icon: <Star size={22} />, title: "Models" },
//   { icon: <Gamepad2 size={22} />, title: "Gamers" },
// ];

// export default function BrowseCategory() {
//   return (
//     <Section className="py-24">
//       <Container>

//         {/* Heading */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ 
//             type: "spring",
//             stiffness: 100,
//             damping: 20,
//           }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2
//             className="text-[32px] md:text-[52px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Browse by Category
//           </h2>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.1 }}
//             className="text-[var(--neutral-600)] mt-2"
//           >
//             Find the icons that inspire you
//           </motion.p>
//         </motion.div>

//         {/* NORMAL GRID (no loop, no animation) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-14">
//           {categories.map((category, index) => (
//             <CategoryCard
//               key={index}
//               icon={category.icon}
//               title={category.title}
//             />
//           ))}
//         </div>

//       </Container>
//     </Section>
//   );
// }


// ─── DYNAMIC CODE ──────────────────────────────────────────

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CategoryCard from "@/components/ui/CategoryCard";
import { Category } from "@/types";

interface BrowseCategoryProps {
  categories: Category[];
}

export default function BrowseCategory({ categories }: BrowseCategoryProps) {
  console.log("🔥 FRONTEND CATEGORIES:", categories);
  return (
    <Section className="py-24">
      <Container>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className="text-[32px] md:text-[52px] font-semibold"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Browse by Category
          </h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--neutral-600)] mt-2"
          >
            Find the icons that inspire you
          </motion.p>
        </motion.div>

        {/* Dynamic Static Grid (No Scroll) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-14">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryCard
                icon={
  category.image ? (
    <Image
      src={category.image}
      alt={category.name}
      width={22}
      height={22}
      className="object-contain"
    />
  ) : (
    <div className="w-5 h-5 flex items-center justify-center text-xs font-bold">
      {category.name.charAt(0)}
    </div>
  )
}
                title={category.name}
              />
            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
