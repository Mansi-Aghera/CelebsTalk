// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// interface CelebrityCardProps {
//   name: string;
//   role: string;
//   description: string;
//   rating: number;
//   reviews: number;
//   image: string;
//   videoPrice: string;
//   callPrice: string;
//   chatPrice: string;
// }

// export default function CelebrityCard({
//   name,
//   role,
//   description,
//   rating,
//   reviews,
//   image,
//   videoPrice,
//   callPrice,
//   chatPrice,
// }: CelebrityCardProps) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25 }}
//       className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--neutral-200)] shadow-sm hover:shadow-lg transition-all duration-300"
//     >
//       {/* Image */}
//       <div className="relative w-[70px] h-[70px] rounded-xl overflow-hidden flex-shrink-0">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         <h4 className="font-semibold text-[15px]">{name}</h4>

//         <p className="text-xs text-[var(--primary-300)] font-medium">
//           {role}
//         </p>

//         <p className="text-xs text-[var(--neutral-600)] mt-1 line-clamp-2">
//           {description}
//         </p>

//         <div className="flex items-center gap-2 mt-2 text-xs">
//           ⭐ {rating}
//           <span className="text-[var(--neutral-600)]">
//             ({reviews} Ratings)
//           </span>
//         </div>
//       </div>

//       {/* Pricing */}
//       <div className="flex flex-col gap-2 text-xs">
//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           📹 {videoPrice}
//         </span>

//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           📞 {callPrice}
//         </span>

//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           💬 {chatPrice}
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// interface CelebrityCardProps {
//   name: string;
//   role: string;
//   description: string;
//   rating: number;
//   reviews: number;
//   image: string;
//   videoPrice: string;
//   callPrice: string;
//   chatPrice: string;
// }

// export default function CelebrityCard({
//   name,
//   role,
//   description,
//   rating,
//   reviews,
//   image,
//   videoPrice,
//   callPrice,
//   chatPrice,
// }: CelebrityCardProps) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[var(--neutral-200)] shadow-sm hover:shadow-lg transition-all duration-300 ease-out"
//     >
//       {/* Image */}
//       <div className="relative w-[70px] h-[70px] rounded-xl overflow-hidden flex-shrink-0">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         <h4 className="font-semibold text-[15px]">{name}</h4>

//         <p className="text-xs text-[var(--primary-300)] font-medium">
//           {role}
//         </p>

//         <p className="text-xs text-[var(--neutral-600)] mt-1 line-clamp-2">
//           {description}
//         </p>

//         <div className="flex items-center gap-2 mt-2 text-xs">
//           ⭐ {rating}
//           <span className="text-[var(--neutral-600)]">
//             ({reviews} Ratings)
//           </span>
//         </div>
//       </div>

//       {/* Pricing */}
//       <div className="flex flex-col gap-2 text-xs">
//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           📹 {videoPrice}
//         </span>

//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           📞 {callPrice}
//         </span>

//         <span className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-full">
//           💬 {chatPrice}
//         </span>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CelebrityCardProps {
  name: string;
  role: string;
  description: string;
  languages?: string;
  location?: string;
  orders?: number;
  rating: number;
  image: string;
  videoPrice: string;
  callPrice: string;
  chatPrice: string;
}

export default function CelebrityCard({
  name,
  role,
  description,
  languages,
  location,
  orders,
  rating,
  image,
  videoPrice,
  callPrice,
  chatPrice,
}: CelebrityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="flex bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md overflow-hidden"
    >
      
      {/* IMAGE FULL HEIGHT */}
      <div className="relative w-[120px] min-h-[140px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 justify-between p-4">

        {/* DETAILS */}
        <div className="text-sm space-y-[2px]">

          <div className="flex items-center gap-1 font-semibold text-[16px]">
            {name}
            <span className="text-blue-500 text-xs">✔</span>
          </div>

          <p className="text-xs text-gray-500 flex items-center gap-1">
            {role}
            <span className="text-red-500">▶</span>
            100k
          </p>

          <p className="text-xs text-gray-600">{description}</p>

          {languages && <p className="text-xs text-gray-600">{languages}</p>}

          {location && <p className="text-xs text-gray-600">{location}</p>}

          {orders && <p className="text-xs text-gray-600">Orders: {orders}</p>}

          <div className="flex items-center gap-2 pt-1">
            <span className="bg-yellow-400 text-black text-xs px-2 py-[2px] rounded">
              {rating.toFixed(1)}
            </span>

            <span className="text-yellow-400 text-sm">
              ★★★★★
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col justify-center gap-3 text-xs">

          <div className="flex items-center gap-2 border border-green-500 text-green-600 px-3 py-1 rounded-full">
            📹 {videoPrice}
          </div>

          <div className="flex items-center gap-2 border border-green-500 text-green-600 px-3 py-1 rounded-full">
            📞 {callPrice}
          </div>

          <div className="flex items-center gap-2 border border-green-500 text-green-600 px-3 py-1 rounded-full">
            💬 {chatPrice}
          </div>

        </div>
      </div>
    </motion.div>
  );
}