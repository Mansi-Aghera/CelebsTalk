// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// interface Props {
//   image: string;
//   name: string;
//   location: string;
//   review: string;
// }

// export default function TestimonialCard({
//   image,
//   name,
//   location,
//   review,
// }: Props) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25 }}
//       className="bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--neutral-200)]"
//     >
//       {/* Video Thumbnail */}
//       <div className="relative h-[200px] w-full">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />

//         {/* Play Button */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
//             ▶
//           </div>
//         </div>
//       </div>

//       {/* Text */}
//       <div className="p-4">
//         <h4 className="font-semibold">{name}</h4>
//         <p className="text-sm text-[var(--neutral-600)]">{location}</p>

//         <p className="text-sm text-[var(--neutral-700)] mt-2">
//           {review}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  name: string;
  location: string;
  review: string;
}

export default function TestimonialCard({
  image,
  name,
  location,
  review,
}: Props) {
  return (
    <motion.div
      whileHover={{ 
        y: -6,
        transition: { 
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-[var(--neutral-200)]"
    >
      {/* Video Thumbnail */}
      <motion.div 
        className="relative h-[200px] w-full"
        whileHover={{ scale: 1.03 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        {/* Play Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.1
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
            ▶
          </div>
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div 
        className="p-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
      >
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-[var(--neutral-600)]">{location}</p>

        <p className="text-sm text-[var(--neutral-700)] mt-2">
          {review}
        </p>
      </motion.div>
    </motion.div>
  );
}