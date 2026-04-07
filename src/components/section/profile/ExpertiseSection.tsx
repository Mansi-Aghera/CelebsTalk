"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ExpertiseSection() {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-6"
    >
      <h3 className="text-[14px] font-semibold mb-3">Expertise</h3>

      <div className="bg-white border border-[var(--neutral-200)] rounded-[14px] h-[140px] flex flex-col items-center justify-center">
        <div className="text-[28px]">🤔</div>
        <p className="text-[12px] text-[var(--neutral-600)] mt-2">
          Expertise not found
        </p>
      </div>
    </motion.div>
  );
}