"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Influencer } from "@/types";

export default function StatsSection({
  influencer,
}: {
  influencer?: Influencer;
}) {

const stats = [
  {
    value: `${influencer?.completed_session_count ?? 0}`,
    label: "Minute Talked",
  },
  {
    value: influencer?.avg_rating
      ? influencer.avg_rating.toFixed(1)
      : "0",
    label: "Avg Rating",
  },
  {
    value: `${influencer?.total_reviews ?? 0}`,
    label: "Total Reviews",
  },
  {
    value: `${influencer?.total_request_count ?? 0}`,
    label: "Total Requests",
  },
];

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-5"
    >
      {stats.map((s, i) => (
        <motion.div
          variants={fadeUp}
          key={i}
          className="
            bg-white 
            border border-[var(--neutral-200)]
            rounded-[12px] md:rounded-[14px]
            px-4 sm:px-5 md:px-6 py-4 md:py-5
            flex flex-col justify-center
            min-h-[80px] md:min-h-[90px]
          "
        >
          {/* VALUE */}
          <h3 className="text-[22px] md:text-[28px] font-semibold leading-[24px] md:leading-[26px] text-black">
            {s.value}
          </h3>

          {/* LABEL */}
          <p className="text-[12px] md:text-[14px] text-black mt-[2px] md:mt-[4px] whitespace-nowrap overflow-hidden text-ellipsis">
            {s.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}