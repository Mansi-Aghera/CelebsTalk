// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Button from "@/components/ui/Button";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <Section className="relative overflow-hidden pt-20 md:pt-24 lg:pt-28">
//       <Container>
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT CONTENT */}
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//             className="flex flex-col gap-6"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 bg-pink-50 text-[var(--primary-300)] px-4 py-2 rounded-full w-fit text-sm font-medium"
//             >
//               ⭐ Meet Your Favorites Celebrities
//             </motion.div>

//             {/* Heading */}
//             <motion.h1
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[var(--neutral-1000)]"
//             >
//               Connect With <br />
//               Celebrities Like Never <br />
//               Before
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               variants={fadeUp}
//               className="text-[var(--neutral-700)] text-base md:text-lg max-w-lg"
//             >
//               Book video calls, personalized shoutouts, and live chats with your
//               favorite stars.
//             </motion.p>

//             {/* CTA */}
//             <motion.div variants={fadeUp}>
//               <Button
//                 variant="outline-primary"
//                 size="lg"
//                 className="rounded-full"
//               >
//                 Explore Celebrities →
//               </Button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               variants={fadeUp}
//               className="flex items-center gap-10 pt-6 flex-wrap"
//             >
//               {/* Stat 1 */}
//               <div className="flex items-center gap-3">
//                 <div className="text-yellow-400 text-3xl">⭐</div>
//                 <div>
//                   <p className="text-2xl font-semibold">250+</p>
//                   <p className="text-sm text-[var(--neutral-600)]">
//                     Celebrities
//                   </p>
//                 </div>
//               </div>

//               <div className="h-10 w-[1px] bg-[var(--neutral-300)] hidden sm:block"></div>

//               {/* Stat 2 */}
//               <div className="flex items-center gap-3">
//                 <div className="text-pink-400 text-3xl">💬</div>
//                 <div>
//                   <p className="text-2xl font-semibold">470+</p>
//                   <p className="text-sm text-[var(--neutral-600)]">
//                     Fan Interaction
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7 }}
//             className="relative flex justify-center lg:justify-end"
//           >
//             {/* Glow Background */}
//             <div className="absolute w-[350px] h-[350px] bg-pink-300 blur-[140px] opacity-30 rounded-full -z-10"></div>

//             {/* Main Card */}
//             <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
//               <Image
//                 src="/images/hero/hero.png"
//                 alt="Celebrity Video"
//                 width={420}
//                 height={520}
//                 className="object-cover"
//                 priority
//               />

//               {/* Floating Badge Top */}
//               <div className="absolute -top-4 -left-6 bg-white rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
//                 <div className="flex -space-x-2">
//                   <div className="w-7 h-7 bg-pink-300 rounded-full border-2 border-white"></div>
//                   <div className="w-7 h-7 bg-purple-300 rounded-full border-2 border-white"></div>
//                   <div className="w-7 h-7 bg-yellow-300 rounded-full border-2 border-white"></div>
//                 </div>
//                 <span className="text-sm font-semibold">10k+ fans</span>
//               </div>

//               {/* Floating Badge Bottom */}
//               <div className="absolute -bottom-5 -right-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-xl shadow-md">
//                 20L+ Users
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </Section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <Section className="relative pt-14 md:pt-18 lg:pt-22 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-pink-50 text-[var(--primary-300)] px-4 py-2 rounded-full w-fit text-sm font-medium"
            >
              ⭐ Meet Your Favorites Celebrities
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--neutral-1000)]"
            >
              Connect With <br />
              Celebrities Like Never <br />
              Before
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[var(--neutral-700)] text-base md:text-lg max-w-lg"
            >
              Book video calls, personalized shoutouts, and live chats with your
              favorite stars.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Button variant="outline-primary" size="lg" className="rounded-full">
                Explore Celebrities →
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-10 pt-6 flex-wrap"
            >
              <div className="flex items-center gap-3">
                <div className="text-yellow-400 text-3xl">⭐</div>
                <div>
                  <p className="text-2xl font-semibold">250+</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Celebrities
                  </p>
                </div>
              </div>

              <div className="h-10 w-[1px] bg-[var(--neutral-300)] hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="text-pink-400 text-3xl">💬</div>
                <div>
                  <p className="text-2xl font-semibold">470+</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Fan Interaction
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
         {/* RIGHT CONTENT */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="relative flex justify-center lg:justify-end"
>
  {/* glow */}
  <div className="absolute w-[420px] h-[420px] bg-pink-300 blur-[160px] opacity-30 rounded-full -z-10" />

  {/* HERO CARD */}
  <div className="relative w-full max-w-[420px] aspect-[665/718] rounded-[10px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)]">

    <Image
      src="/images/hero/hero.png"
      alt="Celebrity"
      fill
      priority
      className="object-cover"
    />

  <div className="absolute top-0 left-0 bg-gradient-to-br from-[#FFACCE] to-[#FFE4EF] px-4 py-3 rounded-[10px] shadow-md flex flex-col items-center">

      <div className="flex -space-x-2 mb-1">
        <Image src="/images/hero/img1.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
        <Image src="/images/hero/img2.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
        <Image src="/images/hero/img3.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
      </div>

      <span className="text-sm font-semibold text-black">
        10k+ fans
      </span>
    </div>

    {/* 20L users badge */}
    <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#DEA9FF] to-[#F2E0FD] px-4 py-3 rounded-[10px] shadow-md flex flex-col items-center">

      <div className="flex -space-x-2 mb-1">
        <Image src="/images/hero/img1.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
        <Image src="/images/hero/img2.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
        <Image src="/images/hero/img3.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
      </div>

      <span className="text-sm font-semibold text-black">
        20L+ User
      </span>
    </div>

  </div>
      {/* 10k fans badge */}
  
</motion.div>

        </div>
      </Container>
    </Section>
  );
}