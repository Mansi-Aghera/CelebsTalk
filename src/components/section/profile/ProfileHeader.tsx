"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Share2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-[20px] border border-[var(--neutral-200)] px-5 py-5 md:px-6 md:py-6 shadow-sm relative"
    >
      {/* SHARE */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-lg border border-[var(--neutral-200)] flex items-center justify-center bg-white shadow-sm">
        <Share2 size={18} className="text-[var(--neutral-700)]" />
      </div>

      {/* TOP */}
      <div className="flex gap-4 md:gap-5 items-start">

        {/* IMAGE */}
        <div className="relative w-[78px] h-[78px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden border-[4px] border-white shadow-md shrink-0">
          <Image
            src="/images/hero/hero.png"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1">

          {/* NAME */}
          <h2 className="text-[20px] font-semibold leading-[24px]">
            Jasmine
          </h2>

          {/* USERNAME */}
          <p className="text-[13px] text-[var(--neutral-600)] mt-[2px]">
            @jashmin_official02
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">

            <span className="px-3 py-[5px] text-[11px] rounded-full bg-[var(--secondary-100)]/15 text-[var(--secondary-300)] font-medium">
              Youtuber
            </span>

            <span className="px-3 py-[5px] text-[11px] rounded-full bg-[var(--secondary-100)]/15 text-[var(--secondary-300)] font-medium">
              ⏱ 75k min's talk
            </span>

          </div>

        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-5">
        <h3 className="text-[14px] font-semibold text-[var(--neutral-900)] mb-2">
          About Me
        </h3>

        <p className="text-[13px] text-[var(--neutral-600)] leading-[20px] max-w-[720px]">
          Jasmine is a dynamic entrepreneur and a popular Youtuber, Known for his insightful content on Business and technology.
          Jasmine is a dynamic entrepreneur and a popular Youtuber, Known for his insightful content on Business and technology.
          Jasmine is a dynamic entrepreneur and a popular Youtuber, Known for his insightful content.
        </p>
      </div>

      {/* FOLLOW */}
      <div className="flex items-center gap-3 mt-4">

        {/* BUTTON */}
        <button
          className="px-5 py-[7px] text-[13px] text-white rounded-full font-medium"
          style={{ background: "var(--gradient-primary)" }}
        >
          Follow
        </button>

        {/* AVATARS */}
        <div className="flex items-center -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white"
            />
          ))}
        </div>

        {/* TEXT */}
        <span className="text-[13px] text-[var(--neutral-600)]">
          +2.4k people following
        </span>

      </div>
    </motion.div>
  );
}