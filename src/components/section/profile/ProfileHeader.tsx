// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/animations";
// import { Share, Clock } from "lucide-react";
// import { Influencer } from "@/types";

// export default function ProfileHeader({
//   influencer,
// }: {
//   influencer?: Influencer;
// }) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       animate="visible"
//       className="bg-white rounded-[16px] md:rounded-[20px] border border-[#e5e7eb] p-5 md:p-6 lg:p-7 relative shadow-sm"
//     >
//       {/* SHARE BUTTON */}
//       <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-[10px] md:rounded-[12px] border border-[#fae8f0] bg-[#fff5f8] flex items-center justify-center cursor-pointer hover:bg-[#ffeef5] transition-colors">
//         <Share
//           size={18}
//           className="text-[#444] md:w-[20px] md:h-[20px] -ml-[1px] md:-ml-[2px]"
//           strokeWidth={1.5}
//         />
//       </div>

//       {/* TOP */}
//       <div className="flex gap-4 md:gap-[18px] items-start md:items-center pr-10 md:pr-12">
//         {/* IMAGE */}
//         <div className="relative w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border border-[#f0f0f0] shadow-[0_2px_10px_rgba(0,0,0,0.06)] shrink-0">
//           {influencer?.image ? (
//   <Image
//     src={influencer.image}
//     alt={influencer.full_name}
//     fill
//     className="object-cover"
//   />
// ) : (
//   <div className="w-full h-full bg-gray-200" />
// )}
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col flex-1 min-w-0">
//           {/* NAME */}
//           <h2 className="text-[20px] md:text-[26px] font-extrabold text-[#111] leading-tight tracking-tight truncate">
//             {influencer?.full_name}
//           </h2>

//           {/* USERNAME */}
//           <p className="text-[14px] md:text-[16px] font-medium text-[#6b7280] mt-[2px] truncate">
//             @{influencer?.influencer_id || ""}
//           </p>

//           {/* TAGS */}
//           <div className="flex flex-wrap gap-[6px] md:gap-[10px] mt-2 md:mt-3">
//             <span className="px-[10px] md:px-[12px] py-[3px] md:py-[4px] text-[11px] md:text-[12px] rounded-[6px] md:rounded-[8px] bg-[#f6ebff] text-[#9333ea] font-semibold tracking-wide whitespace-nowrap">
//               {influencer?.categories?.[0]?.name || ""}
//             </span>

//             <span className="flex items-center gap-[4px] md:gap-[6px] px-[10px] md:px-[12px] py-[3px] md:py-[4px] text-[11px] md:text-[12px] rounded-[6px] md:rounded-[8px] bg-[#f6ebff] text-[#9333ea] font-semibold tracking-wide whitespace-nowrap">
//               <Clock
//                 size={12}
//                 className="md:w-[13px] md:h-[13px]"
//                 strokeWidth={2.5}
//               />
//               {influencer?.completed_session_count || ""} min's talk
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ABOUT */}
//       <div className="mt-6 md:mt-8">
//         <h3 className="text-[15px] md:text-[16px] font-bold text-[#111] mb-[4px] md:mb-[6px]">
//           About Me
//         </h3>

//         <p className="text-[13px] md:text-[14px] text-[#6b7280] leading-[20px] md:leading-[22px]">
//           {influencer?.bio || ""}{" "}
//         </p>
//       </div>

//       {/* BOTTOM */}
//       <div className="flex flex-wrap sm:flex-nowrap items-center mt-5 md:mt-6 gap-y-4 gap-x-2">
//         {/* BUTTON */}
//         <button
//           className="px-6 md:px-8 py-[8px] md:py-[10px] text-[13px] md:text-[14px] text-white rounded-full font-bold shadow-sm transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
//           style={{ background: "#c026d3" }}
//         >
//           Follow
//         </button>

//         {/* AVATARS & DETAILS */}
//         <div className="flex flex-1 items-center min-w-[200px]">
//           {/* AVATARS */}
//           <div className="flex items-center -space-x-[8px] md:-space-x-[10px] ml-3 md:ml-6">
//             {[
//               "/images/hero/img1.jpg",
//               "/images/hero/img2.jpg",
//               "/images/hero/img3.jpg",
//               "/images/hero/hero.png",
//             ].map((src, i) => (
//               <div
//                 key={i}
//                 className="relative w-[28px] h-[28px] md:w-[30px] md:h-[30px] rounded-full overflow-hidden border-[2px] border-white shadow-sm"
//               >
//                 <Image src={src} alt="follower" fill className="object-cover" />
//               </div>
//             ))}
//           </div>

//           {/* TEXT */}
//           <span className="text-[12px] md:text-[13px] font-medium text-[#6b7280] ml-2 md:ml-3 truncate">
//             +{influencer?.follower_count || ""} people following{" "}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Share, Clock } from "lucide-react";
import { Influencer } from "@/types";
import { useState } from "react";
import { followInfluencer } from "@/services/api";

export default function ProfileHeader({
  influencer,
}: {
  influencer?: Influencer;
}) {
  const [followers, setFollowers] = useState(influencer?.follower_count || 0);

  const [loading, setLoading] = useState(false);

  // 🔥 FOLLOW CLICK
  const handleFollow = async () => {
    if (!influencer) return;

    try {
      setLoading(true);

      await followInfluencer(influencer.id);

      // 🔥 optimistic update
      setFollowers((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-[16px] md:rounded-[20px] border border-[#e5e7eb] p-5 md:p-6 lg:p-7 relative shadow-sm"
    >
      {/* SHARE BUTTON */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 md:w-11 md:h-11 rounded-[10px] md:rounded-[12px] border border-[#fae8f0] bg-[#fff5f8] flex items-center justify-center cursor-pointer hover:bg-[#ffeef5] transition-colors">
        <Share size={18} className="text-[#444]" />
      </div>

      {/* TOP */}
      <div className="flex gap-4 items-center">
        {/* IMAGE */}
        <div className="relative w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden">
          {influencer?.image ? (
            <Image
              src={influencer.image}
              alt={influencer.full_name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col flex-1">
          <h2 className="text-[20px] md:text-[26px] font-extrabold">
            {influencer?.full_name}
          </h2>

          <p className="text-[14px] text-[#6b7280]">
            @{influencer?.influencer_id}
          </p>

          {/* TAG */}
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-[#f6ebff] text-[#9333ea] rounded">
              {influencer?.categories?.[0]?.name}
            </span>

            <span className="flex items-center gap-1 px-2 py-1 bg-[#f6ebff] text-[#9333ea] rounded">
              <Clock size={12} />
              {influencer?.completed_session_count} min's talk
            </span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-6">
        <h3 className="font-bold">About Me</h3>
        <p className="text-sm text-gray-500">{influencer?.bio}</p>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center mt-5 gap-4">
        {/* FOLLOW BUTTON */}
        <button
          onClick={handleFollow}
          disabled={loading}
          className="px-6 py-2 text-white rounded-full font-bold"
          style={{ background: "#c026d3" }}
        >
          {loading ? "Following..." : "Follow"}
        </button>

        {/* FOLLOWERS */}
        <span className="text-sm text-gray-500">
          +{followers} people following
        </span>
      </div>
    </motion.div>
  );
}
