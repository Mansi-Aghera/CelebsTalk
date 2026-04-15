"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Phone, MessageSquare, BadgeCheck } from "lucide-react";
import { fadeUp, hoverLift } from "@/lib/animations";

// Authentic YouTube Icon Component
const YouTubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814z"
      fill="#FF0000"
    />
    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
  </svg>
);

interface CelebrityCardProps {
  name: string;
  image: string;
  category: string;
  languages: string;
  location: string;
  orders: number;
  subscribers: string;
  rating: number;
  videoPrice: string;
  callPrice: string;
  chatPrice: string;
}

export default function CelebrityCard({
  name,
  image,
  category,
  languages,
  location,
  orders,
  subscribers,
  rating = 5,
  videoPrice,
  callPrice,
  chatPrice,
}: CelebrityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={hoverLift}
      className="flex flex-col sm:flex-row justify-between bg-[var(--neutral-100)] border border-[var(--neutral-200)] rounded-xl w-full overflow-hidden"
    >
      {/* LEFT SIDE */}
      <div className="flex gap-3 sm:gap-4 w-full">
        {/* IMAGE */}
        <div className="relative w-[120px] sm:w-[160px] md:w-[180px] min-h-[120px] sm:min-h-[140px] overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* DETAILS */}
        <div className="text-sm py-3 sm:py-4 pr-2 flex-1">
          {/* NAME */}
          <div className="flex items-center gap-2 font-semibold text-sm sm:text-[16px]">
            {name}
            <BadgeCheck size={18} className="text-[#3b82f6] fill-white" />
          </div>

          {/* YOUTUBE */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[var(--neutral-600)] mt-[2px] leading-[16px]">
            <span>YouTube :</span>
            <YouTubeIcon size={16} />
            {subscribers}
          </div>

          <p className="text-[11px] sm:text-xs text-[var(--neutral-700)] mt-1">
            {category}
          </p>

          <p className="text-[11px] sm:text-xs text-[var(--neutral-600)] leading-[16px]">
            {languages}
          </p>

          <p className="text-[11px] sm:text-xs text-[var(--neutral-600)] leading-[16px]">
            {location}
          </p>

          <p className="text-[11px] sm:text-xs text-[var(--neutral-600)] leading-[16px] pb-2">
            Orders: {orders}
          </p>

          {/* RATING */}
          <div className="flex items-center">
            <div className="bg-[var(--yellow-100)] text-black text-[11px] font-semibold px-2 py-[2px] rounded-l-sm">
              {rating.toFixed(1)}
            </div>

            <div className="flex items-center bg-[var(--neutral-1000)] px-2 py-[2px] rounded-r-sm gap-[1px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-[11px] ${
                    star <= Math.round(rating)
                      ? "text-[var(--yellow-100)]"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex sm:flex-col justify-between sm:justify-center sm:items-start gap-3 sm:gap-4 px-4 py-3 sm:py-0 border-t sm:border-t-0 sm:border-l border-[var(--neutral-200)] w-full sm:w-auto">
        <Action icon={<Video size={16} />} price={videoPrice} />
        <Action icon={<Phone size={16} />} price={callPrice} />
        <Action icon={<MessageSquare size={16} />} price={chatPrice} />
      </div>
    </motion.div>
  );
}

/* 🔥 REUSABLE ACTION ITEM */
function Action({ icon, price }: { icon: React.ReactNode; price: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-[var(--neutral-900)] text-xs cursor-pointer group"
    >
      <div className="w-7 h-7 flex items-center justify-center border-2 border-[var(--green-200)] text-[var(--green-200)] rounded-full group-hover:bg-[var(--green-200)] group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      {price}
    </motion.div>
  );
}
