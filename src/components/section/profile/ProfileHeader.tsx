"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Share, Clock } from "lucide-react"; 

export default function ProfileHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-[16px] md:rounded-[20px] border border-[#e5e7eb] p-5 md:p-6 lg:p-7 relative shadow-sm"
    >
      {/* SHARE BUTTON */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-[10px] md:rounded-[12px] border border-[#fae8f0] bg-[#fff5f8] flex items-center justify-center cursor-pointer hover:bg-[#ffeef5] transition-colors">
        <Share size={18} className="text-[#444] md:w-[20px] md:h-[20px] -ml-[1px] md:-ml-[2px]" strokeWidth={1.5} />
      </div>

      {/* TOP */}
      <div className="flex gap-4 md:gap-[18px] items-start md:items-center pr-10 md:pr-12">
        {/* IMAGE */}
        <div className="relative w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border border-[#f0f0f0] shadow-[0_2px_10px_rgba(0,0,0,0.06)] shrink-0">
          <Image
            src="/images/hero/hero.png"
            alt="Jasmine"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* NAME */}
          <h2 className="text-[20px] md:text-[26px] font-extrabold text-[#111] leading-tight tracking-tight truncate">
            Jasmine
          </h2>

          {/* USERNAME */}
          <p className="text-[14px] md:text-[16px] font-medium text-[#6b7280] mt-[2px] truncate">
            @jashmin_official02
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-[6px] md:gap-[10px] mt-2 md:mt-3">
            <span className="px-[10px] md:px-[12px] py-[3px] md:py-[4px] text-[11px] md:text-[12px] rounded-[6px] md:rounded-[8px] bg-[#f6ebff] text-[#9333ea] font-semibold tracking-wide whitespace-nowrap">
              Youtuber
            </span>

            <span className="flex items-center gap-[4px] md:gap-[6px] px-[10px] md:px-[12px] py-[3px] md:py-[4px] text-[11px] md:text-[12px] rounded-[6px] md:rounded-[8px] bg-[#f6ebff] text-[#9333ea] font-semibold tracking-wide whitespace-nowrap">
              <Clock size={12} className="md:w-[13px] md:h-[13px]" strokeWidth={2.5} />
              75k min's talk
            </span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-6 md:mt-8">
        <h3 className="text-[15px] md:text-[16px] font-bold text-[#111] mb-[4px] md:mb-[6px]">
          About Me
        </h3>

        <p className="text-[13px] md:text-[14px] text-[#6b7280] leading-[20px] md:leading-[22px]">
          Jasmine is a dynamic entrepreneur and a popular Youtuber, Know for his insightful content on Business and technology.Jasmine is a dynamic entrepreneur and a popular Youtuber, Know for his insightful content on Business and technology.Jasmine is a dynamic entrepreneur and a popular Youtuber, Know for his insightful content.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-wrap sm:flex-nowrap items-center mt-5 md:mt-6 gap-y-4 gap-x-2">
        {/* BUTTON */}
        <button
          className="px-6 md:px-8 py-[8px] md:py-[10px] text-[13px] md:text-[14px] text-white rounded-full font-bold shadow-sm transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
          style={{ background: "#c026d3" }}
        >
          Follow
        </button>

        {/* AVATARS & DETAILS */}
        <div className="flex flex-1 items-center min-w-[200px]">
          {/* AVATARS */}
          <div className="flex items-center -space-x-[8px] md:-space-x-[10px] ml-3 md:ml-6">
            {["/images/hero/img1.jpg", "/images/hero/img2.jpg", "/images/hero/img3.jpg", "/images/hero/hero.png"].map((src, i) => (
              <div
                key={i}
                className="relative w-[28px] h-[28px] md:w-[30px] md:h-[30px] rounded-full overflow-hidden border-[2px] border-white shadow-sm"
              >
                <Image
                  src={src}
                  alt="follower"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* TEXT */}
          <span className="text-[12px] md:text-[13px] font-medium text-[#6b7280] ml-2 md:ml-3 truncate">
            +2.4k people following
          </span>
        </div>
      </div>
    </motion.div>
  );
}