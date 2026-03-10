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
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
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

//           <p className="text-[var(--neutral-600)] mt-2">
//             Find the icons that inspire you
//           </p>
//         </motion.div>

//         {/* Categories Grid */}
//         <motion.div
//   initial="hidden"
//   whileInView="show"
//   viewport={{ once: true }}
//   variants={{
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.18
//       },
//     },
//   }}
//   className="flex flex-wrap justify-center gap-6 mt-12"
// >
//           {categories.map((category, index) => (
//             <CategoryCard
//               key={index}
//               icon={category.icon}
//               title={category.title}
//             />
//           ))}
//         </motion.div>

//       </Container>
//     </Section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CategoryCard from "@/components/ui/CategoryCard";

import {
  User,
  Music,
  Gamepad2,
  Trophy,
  Star,
  Clapperboard,
} from "lucide-react";

const categories = [
  { icon: <User size={22} />, title: "Actors" },
  { icon: <Music size={22} />, title: "Singers" },
  { icon: <Gamepad2 size={22} />, title: "Gamers" },
  { icon: <Trophy size={22} />, title: "Athletes" },
  { icon: <User size={22} />, title: "Actors" },
  { icon: <Star size={22} />, title: "Models" },
  { icon: <Clapperboard size={22} />, title: "Creators" },
  { icon: <Star size={22} />, title: "Models" },
  { icon: <Gamepad2 size={22} />, title: "Gamers" },
];

// Duplicate list for infinite loop
const loopCategories = [...categories, ...categories];

export default function BrowseCategory() {
  return (
    <Section className="py-24">
      <Container>

        {/* Heading */}
        <div className="text-center">
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

          <p className="text-[var(--neutral-600)] mt-2">
            Find the icons that inspire you
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="overflow-hidden mt-14">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 70,
              repeat: Infinity,
            }}
          >
            {loopCategories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
              />
            ))}
          </motion.div>

        </div>

      </Container>
    </Section>
  );
}