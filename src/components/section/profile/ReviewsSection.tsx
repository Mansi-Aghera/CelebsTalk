// "use client";

// import { Star } from "lucide-react";
// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/animations";

// const StarRating = ({ rating, size = 14 }: { rating: number; size?: number }) => {
//   return (
//     <div className="flex gap-[2px]">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <Star
//           key={star}
//           size={size}
//           fill={star <= rating ? "#ffc107" : "#e5e7eb"}
//           stroke="none"
//         />
//       ))}
//     </div>
//   );
// };

// const reviews = [
//   { name: "Sarah K.", date: "2 days ago", rating: 4, text: "Absolutely amazing! Jasmine was so insightful and gave me some fantastic advice for my own Youtube channel." },
//   { name: "Karan M.", date: "2 days ago", rating: 5, text: "Absolutely amazing! Jasmine was so insightful and gave me some fantastic advice for my own Youtube channel." },
//   { name: "Karan M.", date: "2 days ago", rating: 5, text: "Absolutely amazing! Jasmine was so insightful and gave me some fantastic advice for my own Youtube channel." },
//   { name: "Karan M.", date: "2 days ago", rating: 5, text: "Absolutely amazing! Jasmine was so insightful and gave me some fantastic advice for my own Youtube channel." },
// ];

// export default function ReviewsSection() {
//   return (
//     <motion.div 
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       className="mt-6 flex flex-col w-full overflow-hidden"
//     >
//       <h3 className="text-[16px] font-bold mb-3 text-[#1e1e1e]">
//         Rating and reviews
//       </h3>

//       {/* OVERALL RATING CARD */}
//       <div className="bg-white border border-[#eaeaea] rounded-[16px] p-5 w-full sm:w-[340px] shadow-[0px_2px_15px_rgba(0,0,0,0.02)] mb-4">
//         <h4 className="text-[15px] font-bold text-[#1e1e1e] mb-3">
//           Ratings and reviews
//         </h4>

//         <div className="flex items-center gap-3">
//           <span className="text-[42px] leading-[42px] font-bold text-[#1e1e1e] tracking-tight">4.1</span>
//           <div className="flex flex-col gap-[2px]">
//             <StarRating rating={4} size={16} />
//             <span className="text-[#a0a0a0] text-[12px] font-medium">
//               From 58 ratings
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* INDIVIDUAL REVIEW CARDS HORIZONTAL SCROLL */}
//       <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 pt-1 items-stretch">
//         {reviews.map((review, i) => (
//           <div
//             key={i}
//             className="group min-w-[260px] w-[260px] bg-white border border-[#eaeaea] rounded-[16px] p-4 shadow-[0px_2px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.06)]"
//           >
//             <div>
//               <div className="flex justify-between items-center mb-1">
//                 <p className="font-bold text-[#1e1e1e] text-[14px]">{review.name}</p>
//                 <p className="text-[#a0a0a0] text-[11px] font-medium">{review.date}</p>
//               </div>
              
//               <div className="mb-2">
//                 <StarRating rating={review.rating} size={14} />
//               </div>
              
//               <p className="text-[#777777] text-[13px] leading-[18px]">
//                 {review.text}
//               </p>
//             </div>
            
//           </div>
          
//         ))}

//         {/* LOAD MORE CARD */}
//         <div className="group min-w-[130px] bg-white border border-[#eaeaea] rounded-[16px] p-4 shadow-[0px_2px_15px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.06)]">
//           <span className="font-bold text-[#1e1e1e] text-[14px]">Load More</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import useSWR from "swr";
import { getInfluencerReviews } from "@/services/api";

const StarRating = ({ rating, size = 14 }: { rating: number; size?: number }) => {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          fill={star <= rating ? "#ffc107" : "#e5e7eb"}
          stroke="none"
        />
      ))}
    </div>
  );
};

export default function ReviewsSection({
  influencerId,
  avgRating,
  totalReviews,
}: {
  influencerId: string;
  avgRating: number;
  totalReviews: number;
}) {
  // ✅ API CALL
  const { data: reviews } = useSWR(
    influencerId ? ["reviews", influencerId] : null,
    () => getInfluencerReviews(influencerId)
  );

  return (
    <motion.div 
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-6 flex flex-col w-full overflow-hidden"
    >
      <h3 className="text-[16px] font-bold mb-3 text-[#1e1e1e]">
        Rating and reviews
      </h3>

      {/* ✅ OVERALL RATING */}
      <div className="bg-white border border-[#eaeaea] rounded-[16px] p-5 w-full sm:w-[340px] shadow-[0px_2px_15px_rgba(0,0,0,0.02)] mb-4">
        <h4 className="text-[15px] font-bold text-[#1e1e1e] mb-3">
          Ratings and reviews
        </h4>

        <div className="flex items-center gap-3">
          <span className="text-[42px] font-bold">
            {avgRating.toFixed(1)}
          </span>

          <div>
            <StarRating rating={Math.round(avgRating)} size={16} />
            <span className="text-[#a0a0a0] text-[12px]">
              From {totalReviews} ratings
            </span>
          </div>
        </div>
      </div>

      {/* ❌ NO REVIEWS */}
      {!reviews?.length && (
        <div className="bg-white border border-[#eaeaea] rounded-[16px] p-5 text-center text-[13px] text-[#6b7280]">
          No reviews yet
        </div>
      )}

      {/* ✅ REVIEWS LIST (SAME UI) */}
     {(reviews?.length ?? 0) > 0 && (
  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 pt-1">
    {reviews?.map((review) => (
            <div
              key={review.id}
              className="group min-w-[260px] w-[260px] bg-white border border-[#eaeaea] rounded-[16px] p-4 shadow-[0px_2px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex justify-between mb-1">
                  <p className="font-bold text-[14px]">{review.name}</p>
                  <p className="text-[11px] text-[#a0a0a0]">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="mb-2">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-[13px] text-[#777]">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}