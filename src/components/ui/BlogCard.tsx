"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
}

export default function BlogCard({
  image,
  category,
  title,
  date,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group"
    >
      {/* Image */}
      <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-[11px] px-3 py-1 rounded-full border border-[var(--primary-200)] text-[var(--primary-400)]">
          {category}
        </span>

        <span className="text-xs text-[var(--neutral-500)]">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-[15px] font-medium text-[var(--neutral-800)] leading-snug">
        {title}
      </h3>
    </motion.div>
  );
}