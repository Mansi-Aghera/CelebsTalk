// "use client";

// import { motion } from "framer-motion";
// import { slideLeft } from "@/lib/animations";
// import { ChevronDown, Star } from "lucide-react";
// import { useState } from "react";

// export default function ExploreSidebar() {
//   return (
//     <motion.aside
//       variants={slideLeft}
//       initial="hidden"
//       animate="visible"
//       className="w-full lg:w-[270px] bg-white rounded-2xl border border-[var(--neutral-200)] shadow-sm p-5 h-fit"
//     >
//       <SidebarSection title="CATEGORY" defaultOpen>
//         {["Actors", "Influencer", "Singers", "Youtubers", "Athletes"].map(
//           (item) => (
//             <Checkbox key={item} label={item} />
//           )
//         )}
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="INTERACTION TYPE" defaultOpen>
//         {["Video Call", "Audio Call", "Chat", "Video Message"].map(
//           (item) => (
//             <Checkbox key={item} label={item} />
//           )
//         )}
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="PRICE RANGE" defaultOpen>
//         <div className="text-xs text-[var(--neutral-600)] mb-3">
//           ₹ 100 - ₹ 10000
//         </div>

//         <input
//           type="range"
//           className="w-full accent-[var(--primary-300)]"
//         />
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="RATING" defaultOpen>
//         {[5, 4, 3, 2, 1].map((r, i) => (
//           <div key={i} className="flex items-center gap-2 text-sm mb-1 last:mb-0">
//             <div className="flex text-[var(--yellow-100)]">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   size={14}
//                   fill={idx < r ? "currentColor" : "none"}
//                   className={idx < r ? "" : "text-[var(--neutral-300)]"}
//                 />
//               ))}
//             </div>
//             <span className="text-[var(--neutral-600)] text-xs ml-1">
//               {r === 5
//                 ? "105+"
//                 : r === 4
//                   ? "45+"
//                   : r === 3
//                     ? "85+"
//                     : r === 2
//                       ? "18+"
//                       : "08+"}
//             </span>
//           </div>
//         ))}
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="AVAILABILITY" defaultOpen>
//         {["Available Now", "Today", "This Week"].map((item) => (
//           <Checkbox key={item} label={item} />
//         ))}
//       </SidebarSection>
//     </motion.aside>
//   );
// }

// /* ðŸ”¥ COLLAPSIBLE SECTION */
// function SidebarSection({
//   title,
//   children,
//   defaultOpen = false,
// }: {
//   title: string;
//   children: React.ReactNode;
//   defaultOpen?: boolean;
// }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center justify-between w-full mb-3"
//       >
//         <h4 className="text-[11px] font-semibold tracking-wide text-[var(--neutral-700)]">
//           {title}
//         </h4>
//         <ChevronDown
//           size={16}
//           className={`transition ${open ? "rotate-180" : ""
//             }`}
//         />
//       </button>

//       {open && (
//         <div className="space-y-2 text-[var(--neutral-700)]">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ðŸ”¥ CHECKBOX */
// function Checkbox({ label }: { label: string }) {
//   return (
//     <label className="flex items-center gap-2 text-sm cursor-pointer">
//       <input
//         type="checkbox"
//         className="w-4 h-4 rounded border border-[var(--neutral-300)] accent-[var(--primary-300)]"
//       />
//       {label}
//     </label>
//   );
// }

// /* ðŸ”¥ DIVIDER */
// function Divider() {
//   return (
//     <div className="border-t border-[var(--neutral-200)] my-4" />
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { slideLeft } from "@/lib/animations";
// import { ChevronDown, Star } from "lucide-react";
// import { useState } from "react";
// import { Category, Influencer } from "@/types";

// interface Props {
//   categories: Category[];
//   selected: string[];
//   setSelected: (val: string[]) => void;
// }

// export default function ExploreSidebar({ categories, selected, setSelected }: Props) {

//   return (
//     <motion.aside
//       variants={slideLeft}
//       initial="hidden"
//       animate="visible"
//       className="w-full lg:w-[270px] bg-white rounded-2xl border border-[var(--neutral-200)] shadow-sm p-5 h-fit"
//     >
//       {/* ✅ CATEGORY DYNAMIC */}
//       <SidebarSection title="CATEGORY" defaultOpen>
//         {categories.map((item) => (
//           <Checkbox
//             key={item.id}
//             label={item.name}
//             checked={selected.includes(item.name)}
//             onChange={(checked) => {
//   if (checked) {
//     setSelected([item.name]); // ✅ only one select
//   } else {
//     setSelected([]); // unselect
//   }
// }}
//           />
//         ))}
//       </SidebarSection>

//       <Divider />

//       {/* ❌ SAME UI BELOW (UNCHANGED) */}
//       <SidebarSection title="INTERACTION TYPE" defaultOpen>
//         {["Video Call", "Audio Call", "Chat", "Video Message"].map((item) => (
//           <Checkbox key={item} label={item} />
//         ))}
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="PRICE RANGE" defaultOpen>
//         <div className="text-xs text-[var(--neutral-600)] mb-3">
//           ₹ 100 - ₹ 10000
//         </div>

//         <input type="range" className="w-full accent-[var(--primary-300)]" />
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="RATING" defaultOpen>
//         {[5, 4, 3, 2, 1].map((r, i) => (
//           <div
//             key={i}
//             className="flex items-center gap-2 text-sm mb-1 last:mb-0"
//           >
//             <div className="flex text-[var(--yellow-100)]">
//               {Array.from({ length: 5 }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   size={14}
//                   fill={idx < r ? "currentColor" : "none"}
//                   className={idx < r ? "" : "text-[var(--neutral-300)]"}
//                 />
//               ))}
//             </div>
//             <span className="text-[var(--neutral-600)] text-xs ml-1">
//               {r === 5
//                 ? "105+"
//                 : r === 4
//                   ? "45+"
//                   : r === 3
//                     ? "85+"
//                     : r === 2
//                       ? "18+"
//                       : "08+"}
//             </span>
//           </div>
//         ))}
//       </SidebarSection>

//       <Divider />

//       <SidebarSection title="AVAILABILITY" defaultOpen>
//         {["Available Now", "Today", "This Week"].map((item) => (
//           <Checkbox key={item} label={item} />
//         ))}
//       </SidebarSection>
//     </motion.aside>
//   );
// }

// /* SAME BELOW — NO CHANGE */

// function SidebarSection({
//   title,
//   children,
//   defaultOpen = false,
// }: {
//   title: string;
//   children: React.ReactNode;
//   defaultOpen?: boolean;
// }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center justify-between w-full mb-3"
//       >
//         <h4 className="text-[11px] font-semibold tracking-wide text-[var(--neutral-700)]">
//           {title}
//         </h4>
//         <ChevronDown
//           size={16}
//           className={`transition ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {open && (
//         <div className="space-y-2 text-[var(--neutral-700)]">{children}</div>
//       )}
//     </div>
//   );
// }

// function Checkbox({
//   label,
//   checked,
//   onChange,
// }: {
//   label: string;
//   checked?: boolean;
//   onChange?: (val: boolean) => void;
// }) {
//   return (
//     <label className="flex items-center gap-2 text-sm cursor-pointer">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={(e) => onChange?.(e.target.checked)}
//         className="w-4 h-4 rounded border border-[var(--neutral-300)] accent-[var(--primary-300)]"
//       />
//       {label}
//     </label>
//   );
// }

// function Divider() {
//   return <div className="border-t border-[var(--neutral-200)] my-4" />;
// }

"use client";

import { motion } from "framer-motion";
import { slideLeft } from "@/lib/animations";
import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import { Category, Influencer } from "@/types";
import CelebrityGrid from "@/components/section/explore/CelebrityGrid";
import useSWR from "swr";
import { getInfluencersByRating } from "@/services/api";

interface Props {
  categories: Category[];
  celebrities: Influencer[];
}

export default function ExploreSidebar({ categories, celebrities }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [availableNow, setAvailableNow] = useState(false);
// ✅ FIRST SWR
const { data: ratingData } = useSWR(
  selectedRating ? ["rating", selectedRating] : null,
  () => getInfluencersByRating(selectedRating!)
);

// ✅ THEN USE
const baseData: Influencer[] = selectedRating
  ? ratingData ?? []
  : celebrities;

// ✅ THEN FILTER
const filtered = baseData.filter((c) => {
  const categoryMatch =
    selected.length === 0 ||
    c.categories.some((cat) => selected.includes(cat.name));

  const availabilityMatch = !availableNow || c.isLive === true;

  return categoryMatch && availabilityMatch;
});
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* 🔥 SIDEBAR */}
      <motion.aside
        variants={slideLeft}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-[270px] bg-white rounded-2xl border border-[var(--neutral-200)] shadow-sm p-5 h-fit"
      >
        <SidebarSection title="CATEGORY" defaultOpen>
          {categories.map((item) => (
            <Checkbox
              key={item.id}
              label={item.name}
              checked={selected[0] === item.name}
              onChange={(checked) => {
                if (checked) setSelected([item.name]);
                else setSelected([]);
              }}
            />
          ))}
        </SidebarSection>

        <Divider />

        {/* <SidebarSection title="INTERACTION TYPE" defaultOpen>
          {["Video Call", "Audio Call", "Chat", "Video Message"].map((item) => (
            <Checkbox key={item} label={item} />
          ))}
        </SidebarSection> */}

        {/* <Divider /> */}

        <SidebarSection title="PRICE RANGE" defaultOpen>
          <div className="text-xs text-[var(--neutral-600)] mb-3">
            ₹ 100 - ₹ 10000
          </div>
          <input type="range" className="w-full accent-[var(--primary-300)]" />
        </SidebarSection>

        <Divider />

      <SidebarSection title="RATING" defaultOpen>
  {[5, 4, 3, 2, 1].map((r) => (
    <div key={r} className="flex items-center gap-2 text-sm cursor-pointer">

      <input
        type="checkbox"
        checked={selectedRating === r}
        onChange={(e) => {
          if (e.target.checked) setSelectedRating(r);
          else setSelectedRating(null);
        }}
        className="w-4 h-4 rounded border border-[var(--neutral-300)] accent-[var(--primary-300)]"
      />

      <div className="flex text-[var(--yellow-100)]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            size={14}
            fill={idx < r ? "currentColor" : "none"}
            className={idx < r ? "" : "text-[var(--neutral-300)]"}
          />
        ))}
      </div>

    </div>
  ))}
</SidebarSection>

        {/* <Divider />

        <SidebarSection title="AVAILABILITY" defaultOpen>
          {["Available Now", "Today", "This Week"].map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={item === "Available Now" ? availableNow : false}
              onChange={
                item === "Available Now"
                  ? (val) => setAvailableNow(val)
                  : undefined
              }
            />
          ))}
        </SidebarSection> */}
      </motion.aside>

      {/* 🔥 GRID */}
      <div className="flex-1">
        <CelebrityGrid data={filtered} hideHeader />
      </div>
    </div>
  );
}

/* 🔥 COLLAPSIBLE SECTION */
function SidebarSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-3"
      >
        <h4 className="text-[11px] font-semibold tracking-wide text-[var(--neutral-700)]">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="space-y-2 text-[var(--neutral-700)]">{children}</div>
      )}
    </div>
  );
}

/* 🔥 CHECKBOX */
function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked?: boolean;
  onChange?: (val: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        checked={checked ?? false}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 rounded border border-[var(--neutral-300)] accent-[var(--primary-300)]"
      />
      {label}
    </label>
  );
}

/* 🔥 DIVIDER */
function Divider() {
  return <div className="border-t border-[var(--neutral-200)] my-4" />;
}
