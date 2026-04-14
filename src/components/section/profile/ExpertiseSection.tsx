// "use client";

// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/animations";

// export default function ExpertiseSection() {
//   return (
//     <motion.div 
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       className="mt-6"
//     >
//       <h3 className="text-[14px] font-semibold mb-3">Expertise</h3>

//       <div className="bg-white border border-[var(--neutral-200)] rounded-[14px] h-[140px] flex flex-col items-center justify-center">
//         <div className="text-[28px]">🤔</div>
//         <p className="text-[12px] text-[var(--neutral-600)] mt-2">
//           Expertise not found
//         </p>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import { Influencer } from "@/types";

export default function ExpertiseSection({
  influencer,
}: {
  influencer?: Influencer;
}) {
  const expertise = influencer?.expertise_data || [];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-6"
    >
      <h3 className="text-[14px] font-semibold mb-3">Expertise</h3>

      {/* SAME BOX UI */}
      <div className="bg-white border border-[var(--neutral-200)] rounded-[14px] h-[140px] flex items-center justify-center px-4">

        {expertise.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto">

            {expertise.map((item) => (
              <div key={item.id} className="flex flex-col items-center min-w-[70px]">

                {/* IMAGE */}
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-[#f3f3f3]">
                  {item.image ? (
                    <Image
                      src={item.image} // ✅ already handled in API
                      alt={item.expertise_name}
                      width={70}
                      height={70}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>

                {/* NAME */}
                <div className="mt-2 px-3 py-[4px] rounded-[10px] bg-[#f6ebff] text-[#9333ea] text-[11px] font-semibold text-center">
                  {item.expertise_name}
                </div>
              </div>
            ))}

          </div>
        ) : (
          <>
            <div className="text-[28px]">🤔</div>
            <p className="text-[12px] text-[var(--neutral-600)] mt-2">
              Expertise not found
            </p>
          </>
        )}

      </div>
    </motion.div>
  );
}