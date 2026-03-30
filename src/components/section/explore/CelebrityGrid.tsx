


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   cascadeContainer,
//   fadeUp,
//   fadeIn,
//   scaleIn,
//   hoverLift,
// } from "@/lib/animations";
// import CelebrityCard from "@/components/ui/CelebrityCard";
// import { Search } from "lucide-react";

// interface Celebrity {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
//   languages: string;
//   location: string;
//   orders: number;
//   subscribers: string;
//   rating: number;
//   videoPrice: string;
//   callPrice: string;
//   chatPrice: string;
// }

// interface Props {
//   data: Celebrity[];
// }

// const ITEMS_PER_PAGE = 8;

// export default function CelebrityGrid({ data }: Props) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentData = data.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );

//   return (
//     <div className="flex-1">

//       {/* 🔥 TOP HEADER */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={cascadeContainer}
//         className="text-center mb-8"
//       >
//         <motion.div
//           variants={scaleIn}
//           className="inline-block px-4 py-1 text-md rounded-full bg-[var(--primary-100)]/10 text-[var(--primary-300)] mb-3"
//         >
//           ✨ Explore your favorite celebrities
//         </motion.div>

//         <motion.h1
//           variants={fadeUp}
//           className="text-xl md:text-3xl lg:text-5xl font-bold"
//         >
//           Explore Celebrities
//         </motion.h1>

//         <motion.p
//           variants={fadeIn}
//           className="text-sm text-[var(--neutral-600)] mt-2"
//         >
//           Discover actors, influencers, creators and book your interaction.
//         </motion.p>

//         {/* SEARCH + SORT */}
//         <motion.div
//           variants={fadeUp}
//           className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5"
//         >
//           <div className="flex items-center gap-2 px-4 h-11 rounded-xl border border-[var(--neutral-200)] bg-white w-full sm:w-[380px] shadow-sm">
//             <Search size={16} className="text-[var(--neutral-500)]" />
//             <input
//               type="text"
//               placeholder="Search celebrities (Name...)"
//               className="w-full bg-transparent outline-none text-sm"
//             />
//           </div>

//           <select className="h-11 px-4 rounded-xl border border-[var(--neutral-200)] bg-white text-sm shadow-sm">
//             <option>Sort by: Trending</option>
//             <option>Top Rated</option>
//             <option>Price Low to High</option>
//           </select>
//         </motion.div>
//       </motion.div>

//       {/* 🔥 GRID */}
//       <motion.div
//         variants={cascadeContainer}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//       >
//         {currentData.map((item) => (
//           <motion.div
//             key={item.id}
//             variants={fadeUp}
//             whileHover={hoverLift}
//             className="w-full rounded-xl border border-[var(--primary-100)]/20 shadow-[0_10px_30px_rgba(255,35,124,0.08)] hover:shadow-[0_15px_40px_rgba(255,35,124,0.15)] transition"
//           >
//             <CelebrityCard {...item} />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* 🔥 PAGINATION */}
//       <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">

//         {/* Prev */}
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           className="px-3 py-1 text-sm text-[var(--neutral-600)]"
//         >
//           Prev
//         </button>

//         {/* Pages */}
//         {Array.from({ length: totalPages }).map((_, i) => {
//           const page = i + 1;

//           return (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`w-9 h-9 rounded-full text-sm transition ${
//                 currentPage === page
//                   ? "bg-[var(--primary-100)] text-white"
//                   : "bg-white border border-[var(--neutral-200)] hover:bg-[var(--primary-100)] hover:text-white"
//               }`}
//             >
//               {page}
//             </button>
//           );
//         })}

//         {/* Next */}
//         <button
//           onClick={() =>
//             setCurrentPage((p) => Math.min(p + 1, totalPages))
//           }
//           className="px-3 py-1 text-sm text-[var(--neutral-600)]"
//         >
//           Next
//         </button>

//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  cascadeContainer,
  fadeUp,
  fadeIn,
  scaleIn,
  hoverLift,
} from "@/lib/animations";
import CelebrityCard from "@/components/ui/CelebrityCard";
import { Search } from "lucide-react";

interface Celebrity {
  id: number;
  name: string;
  image: string;
  category: string;
  languages: string;
  location: string;
  orders: number;
  subscribers: string;
  rating: number;
  videoPrice: string;
  callPrice: string;
  chatPrice: string;
}

interface Props {
  data: Celebrity[];
  hideHeader?: boolean;
}

const ITEMS_PER_PAGE = 8;

export default function CelebrityGrid({ data, hideHeader }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="flex-1">

      {/* HEADER */}
      {!hideHeader && <Header />}

      {/* GRID */}
      <motion.div
        variants={cascadeContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {currentData.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            whileHover={hoverLift}
            className="w-full rounded-xl border border-[var(--primary-100)]/20 shadow-[0_10px_30px_rgba(255,35,124,0.08)] hover:shadow-[0_15px_40px_rgba(255,35,124,0.15)] transition"
          >
            <CelebrityCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 text-sm text-[var(--neutral-600)]"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-sm ${
                currentPage === page
                  ? "bg-[var(--primary-100)] text-white"
                  : "bg-white border border-[var(--neutral-200)] hover:bg-[var(--primary-100)] hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          className="px-3 py-1 text-sm text-[var(--neutral-600)]"
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* 🔥 EXPORTED HEADER */
export function Header() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cascadeContainer}
      className="text-center mb-8"
    >
      <motion.div
        variants={scaleIn}
        className="inline-block px-4 py-1 text-md rounded-full bg-[var(--primary-100)]/10 text-[var(--primary-300)] mb-3"
      >
        ✨ Explore your favorite celebrities
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-2xl md:text-3xl lg:text-5xl font-bold"
      >
        Explore Celebrities
      </motion.h1>

      <motion.p
        variants={fadeIn}
        className="text-sm text-[var(--neutral-600)] mt-2"
      >
        Discover actors, influencers, creators and book your interaction.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5"
      >
        <div className="flex items-center gap-2 px-4 h-11 rounded-xl border border-[var(--neutral-200)] bg-white w-full sm:w-[380px] shadow-sm">
          <Search size={16} className="text-[var(--neutral-500)]" />
          <input
            type="text"
            placeholder="Search celebrities (Name...)"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        <select className="h-11 px-4 rounded-xl border border-[var(--neutral-200)] bg-white text-sm shadow-sm">
          <option>Sort by: Trending</option>
        </select>
      </motion.div>
    </motion.div>
  );
}

CelebrityGrid.Header = Header;