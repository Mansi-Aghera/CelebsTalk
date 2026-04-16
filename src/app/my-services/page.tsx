"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, heroReveal } from "@/lib/animations";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import useSWR from "swr";
import { getUserBookings } from "@/services/api";

export default function HowItWorksPage() {
  // const userId = "YOUR_USER_ID"; // 🔥 dynamic kar later (auth thi)
  const userId = "9044020400";

const { data } = useSWR(
  ["bookings", userId],
  () => getUserBookings(userId)
);

const list = data ?? [];
  return (
    <div className="py-8 min-h-screen">
      <Container>
            

        {/* Transaction History Section */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4 px-2">
            <div>
              <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-1">
                Services
              </h2>
              <p className="text-[13px] text-gray-500 font-medium">
               Services booked
              </p>
            </div>
            <div className="flex gap-3">
            </div>
          </div>

          <div className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-8 md:px-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-100 overflow-x-auto no-scrollbar">
            <div className="min-w-[700px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.10em] mb-4 px-4">
  <div className="col-span-3">Service</div>
  <div className="col-span-3">Influencer</div>
  <div className="col-span-2">Status</div>
  <div className="col-span-2">Amount</div>
  <div className="col-span-2">Date</div>
</div>

              {/* Table Rows */}
              <div className="flex flex-col gap-1">
                {list.length > 0 ? (
  list.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-12 items-center px-4 py-4 hover:bg-gray-50 rounded-2xl transition-colors"
    >
      {/* SERVICE */}
      <div className="col-span-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3e8ff]">
  <Briefcase size={20} className="text-[#9333ea]" />
</div>
        <span className="font-semibold text-[14px] text-gray-900">
          {item.serviceName}
        </span>
      </div>

      {/* INFLUENCER */}
      <div className="col-span-3 text-[13px] text-gray-600 font-medium">
        {item.influencerName}
      </div>

      {/* STATUS */}
      <div className="col-span-2">
        <span className="px-2 py-1 text-[11px] rounded-full bg-green-100 text-green-600 font-semibold">
          {item.status}
        </span>
      </div>

      {/* AMOUNT */}
      <div className="col-span-2 text-[14px] font-bold text-gray-900">
        {item.totalPaid}
      </div>

      {/* DATE */}
      <div className="col-span-2 text-[13px] text-gray-500">
        {item.createdAt}
      </div>
    </div>
  ))
) : (
  <div className="text-center py-10 text-gray-400 text-sm">
    No services found
  </div>
)}
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8 md:mt-10 mb-8 pb-4">
            <button className="bg-[var(--dashboard-btn-purple)] hover:bg-[var(--dashboard-btn-purple-hover)] text-white px-10 py-3 rounded-full text-sm font-semibold transition-all shadow-[0_8px_20px_rgba(162,18,255,0.25)] hover:shadow-[0_12px_24px_rgba(162,18,255,0.35)]">
              Load More
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
