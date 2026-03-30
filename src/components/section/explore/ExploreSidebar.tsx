"use client";

import { motion } from "framer-motion";
import { slideLeft } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExploreSidebar() {
  return (
    <motion.aside
      variants={slideLeft}
      initial="hidden"
      animate="visible"
      className="w-full lg:w-[270px] bg-white rounded-2xl border border-[var(--neutral-200)] shadow-sm p-5 h-fit"
    >
      <SidebarSection title="CATEGORY" defaultOpen>
        {["Actors", "Influencer", "Singers", "Youtubers", "Athletes"].map(
          (item) => (
            <Checkbox key={item} label={item} />
          )
        )}
      </SidebarSection>

      <Divider />

      <SidebarSection title="INTERACTION TYPE" defaultOpen>
        {["Video Call", "Audio Call", "Chat", "Video Message"].map(
          (item) => (
            <Checkbox key={item} label={item} />
          )
        )}
      </SidebarSection>

      <Divider />

      <SidebarSection title="PRICE RANGE" defaultOpen>
        <div className="text-xs text-[var(--neutral-600)] mb-3">
          ₹ 100 – ₹ 10000
        </div>

        <input
          type="range"
          className="w-full accent-[var(--primary-300)]"
        />
      </SidebarSection>

      <Divider />

      <SidebarSection title="RATING" defaultOpen>
        {[5, 4, 3, 2, 1].map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="flex text-[var(--yellow-100)]">
              {"★".repeat(r)}
              <span className="text-[var(--neutral-300)]">
                {"★".repeat(5 - r)}
              </span>
            </div>
            <span className="text-[var(--neutral-600)] text-xs">
              {r === 5
                ? "105+"
                : r === 4
                ? "45+"
                : r === 3
                ? "85+"
                : r === 2
                ? "18+"
                : "08+"}
            </span>
          </div>
        ))}
      </SidebarSection>

      <Divider />

      <SidebarSection title="AVAILABILITY" defaultOpen>
        {["Available Now", "Today", "This Week"].map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </SidebarSection>
    </motion.aside>
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
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="space-y-2 text-[var(--neutral-700)]">
          {children}
        </div>
      )}
    </div>
  );
}

/* 🔥 CHECKBOX */
function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border border-[var(--neutral-300)] accent-[var(--primary-300)]"
      />
      {label}
    </label>
  );
}

/* 🔥 DIVIDER */
function Divider() {
  return (
    <div className="border-t border-[var(--neutral-200)] my-4" />
  );
}