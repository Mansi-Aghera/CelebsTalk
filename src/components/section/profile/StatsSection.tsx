"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const stats = [
  { label: "Videos Talked", value: "75K" },
  { label: "Avg Rating", value: "4.1" },
  { label: "Total Reviews", value: "58" },
  { label: "Total Reviews", value: "58" },
];

export default function StatsSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border border-[var(--neutral-200)] rounded-xl p-4 text-center"
        >
          <h3 className="font-semibold text-lg">{s.value}</h3>
          <p className="text-xs text-[var(--neutral-600)]">{s.label}</p>
        </div>
      ))}
    </motion.div>
  );
}