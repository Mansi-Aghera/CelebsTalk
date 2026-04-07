"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function HighlightsSection() {
  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full flex flex-col overflow-hidden"
    >
      <h3 className="text-[16px] font-bold mb-3 text-[#1e1e1e]">
        Highlights
      </h3>

      <div className="bg-white border border-[#eaeaea] rounded-[16px] md:rounded-[24px] p-4 md:p-5 lg:p-6 shadow-[0px_2px_15px_rgba(0,0,0,0.02)] flex-1 flex items-center overflow-x-auto no-scrollbar">
        <div className="flex gap-3 h-full items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative w-[105px] sm:w-[115px] h-[155px] sm:h-[168px] rounded-[16px] overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src="/images/hero/img1.jpg"
                alt="Live Q&A Session"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* OVERLAY for better text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* TEXT */}
              <div className="absolute bottom-3 left-2 right-2 text-[11px] font-medium text-white leading-[14px] text-center drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                Live Q&A Session
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}