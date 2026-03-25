

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Container from "@/components/layout/Container";
// // // import Section from "@/components/layout/Section";
// // // import Image from "next/image";

// // // const steps = [
// // //   {
// // //     title: "Discover Your Favorite Celebrities",
// // //     desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars. Explore profiles, check availability, and choose the celebrity you want to connect with.",
// // //     highlight: true,
// // //   },
// // //   {
// // //     title: "Schedule Your Interaction",
// // //     desc: "Select your preferred interaction type — audio call, video call, or chat. Pick an available time slot and confirm your booking in just a few taps.",
// // //   },
// // //   {
// // //     title: "Experience the Moment",
// // //     desc: "Join the session at your scheduled time and interact with your favorite celebrity. Enjoy a memorable conversation, get a shoutout, or simply chat with the star you admire.",
// // //   },
// // // ];

// // // export default function HowCelebsWork() {
// // //   return (
// // //     <Section className="py-24">
// // //       <Container>

// // //         {/* Heading */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-14"
// // //         >
// // //           <h2
// // //             className="text-[32px] md:text-[48px] font-semibold"
// // //             style={{
// // //               background: "var(--gradient-cta)",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //             }}
// // //           >
// // //             How Celebs talks work
// // //           </h2>

// // //           <p className="text-[var(--neutral-600)] mt-2 max-w-[520px] mx-auto text-sm">
// // //             A few mindful moments can change your day Bloom helps you reset,
// // //             relax, and grow with ease.
// // //           </p>
// // //         </motion.div>

// // //         {/* Content */}
// // //         <div className="grid lg:grid-cols-2 items-center gap-10">

// // //           {/* LEFT TEXT AREA */}
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             variants={{
// // //               hidden: {},
// // //               show: {
// // //                 transition: {
// // //                   staggerChildren: 0.25,
// // //                 },
// // //               },
// // //             }}
// // //             className="max-w-[500px]"
// // //           >
// // //             {steps.map((step, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={{
// // //                   hidden: { opacity: 0, y: 40 },
// // //                   show: { opacity: 1, y: 0 },
// // //                 }}
// // //                 transition={{ duration: 0.7 }}
// // //                 className={`mb-8 ${
// // //                   step.highlight
// // //                     ? "p-5 rounded-[22px]"
// // //                     : ""
// // //                 }`}
// // //                 style={
// // //                   step.highlight
// // //                     ? {
// // //                         background: "var(--gradient-card)",
// // //                       }
// // //                     : {}
// // //                 }
// // //               >
// // //                 <h3 className="font-semibold text-[16px] mb-2">
// // //                   {step.title}
// // //                 </h3>

// // //                 <p className="text-[13px] text-[var(--neutral-700)] leading-relaxed">
// // //                   {step.desc}
// // //                 </p>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>

// // //           {/* RIGHT IMAGE */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 60 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.9 }}
// // //             viewport={{ once: true }}
// // //             className="flex justify-center lg:justify-end"
// // //           >
// // //             <Image
// // //               src="/images/hero/talk.png"
// // //               alt="Celebs Talk App"
// // //               width={480}
// // //               height={600}
// // //               className="w-[300px] md:w-[380px] lg:w-[460px]"
// // //               priority
// // //             />
// // //           </motion.div>

// // //         </div>
// // //       </Container>
// // //     </Section>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import Container from "@/components/layout/Container";
// // import Section from "@/components/layout/Section";
// // import Image from "next/image";
// // import { fadeUp } from "@/lib/animations";

// // const steps = [
// //   {
// //     title: "Discover Your Favorite Celebrities",
// //     desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars. Explore profiles, check availability, and choose the celebrity you want to connect with.",
// //     img: "/images/hero/talk-step1.png",
// //   },
// //   {
// //     title: "Schedule Your Interaction",
// //     desc: "Select your preferred interaction type — audio call, video call, or chat. Pick an available time slot and confirm your booking in just a few taps.",
// //     img: "/images/hero/talk-step2.png",
// //   },
// //   {
// //     title: "Experience the Moment",
// //     desc: "Join the session at your scheduled time and interact with your favorite celebrity. Enjoy a memorable conversation, get a shoutout, or simply chat with the star you admire.",
// //     img: "/images/hero/talk-step3.png",
// //   },
// // ];

// // export default function HowCelebsWork() {
// //   const [activeStep, setActiveStep] = useState(0);

// //   return (
// //     <Section>
// //       <Container>

// //         {/* Heading */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2
// //             className="text-[30px] md:text-[44px] lg:text-[48px] font-semibold"
// //             style={{
// //               background: "var(--gradient-cta)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //             }}
// //           >
// //             How Celebs talks work
// //           </h2>

// //           <p className="text-[var(--neutral-600)] mt-3 max-w-[520px] mx-auto text-sm md:text-base">
// //             A few mindful moments can change your day. Bloom helps you reset,
// //             relax, and grow with ease.
// //           </p>
// //         </motion.div>

// //         {/* Layout */}
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">

// //           {/* LEFT STEPS */}
// //           <div className="space-y-6 max-w-[520px]">

// //             {steps.map((step, index) => {

// //               const isActive = activeStep === index;

// //               return (
// //                 <motion.div
// //                   key={index}
// //                   variants={fadeUp}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   onMouseEnter={() => setActiveStep(index)}
// //                   className={`p-5 rounded-[22px] cursor-pointer transition-all duration-300 ${
// //                     isActive ? "shadow-lg scale-[1.02]" : ""
// //                   }`}
// //                   style={
// //                     isActive
// //                       ? { background: "var(--gradient-card)" }
// //                       : { background: "white" }
// //                   }
// //                 >
// //                   <h3 className="font-semibold text-[16px] md:text-[18px] mb-2">
// //                     {step.title}
// //                   </h3>

// //                   <p className="text-[13px] md:text-[14px] text-[var(--neutral-700)] leading-relaxed">
// //                     {step.desc}
// //                   </p>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>

// //           {/* RIGHT IMAGE */}
// //           <div className="flex justify-center lg:justify-end relative">

// //             <motion.div
// //               key={activeStep}
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5 }}
// //             >
// //               <Image
// //                 src={steps[activeStep].img}
// //                 alt="Celebs talk step"
// //                 width={460}
// //                 height={620}
// //                 className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
// //                 priority
// //               />
// //             </motion.div>

// //           </div>
// //         </div>
// //       </Container>
// //     </Section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Image from "next/image";
// import { fadeUp } from "@/lib/animations";

// const steps = [
//   {
//     title: "Discover Your Favorite Celebrities",
//     desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars.",
//   },
//   {
//     title: "Schedule Your Interaction",
//     desc: "Select your preferred interaction type — audio call, video call, or chat.",
//   },
//   {
//     title: "Experience the Moment",
//     desc: "Join the session at your scheduled time and interact with your favorite celebrity.",
//   },
// ];

// export default function HowCelebsWork() {
//   const [activeStep, setActiveStep] = useState(1);

//   return (
//     <Section>
//       <Container>

//         {/* Heading */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2
//             className="text-[30px] md:text-[44px] lg:text-[48px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             How Celebs talks work
//           </h2>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT STEPS */}
//           <div className="space-y-6 max-w-[520px]">
//             {steps.map((step, index) => {

//               const isActive = activeStep === index;

//               return (
//                 <motion.div
//                   key={index}
//                   onMouseEnter={() => setActiveStep(index)}
//                   className={`p-5 rounded-[22px] cursor-pointer transition-all duration-300 ${
//                     isActive ? "shadow-lg scale-[1.02]" : ""
//                   }`}
//                   style={
//                     isActive
//                       ? { background: "var(--gradient-card)" }
//                       : { background: "white" }
//                   }
//                 >
//                   <h3 className="font-semibold text-[18px] mb-2">
//                     {step.title}
//                   </h3>

//                   <p className="text-[14px] text-[var(--neutral-700)]">
//                     {step.desc}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* PHONES */}
//           <div className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center">

//   {/* PHONE 1 */}
//   <motion.div
//     animate={{
//       x: activeStep === 0 ? 0 : -140,
//       rotate: activeStep === 0 ? 0 : -18,
//       scale: activeStep === 0 ? 1.1 : 0.9,
//       opacity: activeStep === 0 ? 1 : 0.6,
//       zIndex: activeStep === 0 ? 20 : 1
//     }}
//     transition={{ duration: 0.5 }}
//     className="absolute"
//   >
//     <Image
//       src="/images/hero/talk-step1.png"
//       alt="phone1"
//       width={260}
//       height={520}
//       className="w-[180px] md:w-[220px] lg:w-[240px]"
//     />
//   </motion.div>

//   {/* PHONE 2 */}
//   <motion.div
//     animate={{
//       scale: activeStep === 1 ? 1.1 : 0.9,
//       opacity: activeStep === 1 ? 1 : 0.6,
//       zIndex: activeStep === 1 ? 20 : 2
//     }}
//     transition={{ duration: 0.5 }}
//     className="absolute"
//   >
//     <Image
//       src="/images/hero/talk-step2.png"
//       alt="phone2"
//       width={260}
//       height={520}
//       className="w-[200px] md:w-[240px] lg:w-[260px]"
//     />
//   </motion.div>

//   {/* PHONE 3 */}
//   <motion.div
//     animate={{
//       x: activeStep === 2 ? 0 : 140,
//       rotate: activeStep === 2 ? 0 : 18,
//       scale: activeStep === 2 ? 1.1 : 0.9,
//       opacity: activeStep === 2 ? 1 : 0.6,
//       zIndex: activeStep === 2 ? 20 : 1
//     }}
//     transition={{ duration: 0.5 }}
//     className="absolute"
//   >
//     <Image
//       src="/images/hero/talk-step3.png"
//       alt="phone3"
//       width={260}
//       height={520}
//       className="w-[180px] md:w-[220px] lg:w-[240px]"
//     />
//   </motion.div>

// </div>

//         </div>
//       </Container>
//     </Section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Image from "next/image";
// import { fadeUp } from "@/lib/animations";
// import talk1 from '../../../../public/images/hero/talk-step1.png'
// import talk2 from '../../../../public/images/hero/talk-step2.png'
// import talk3 from '../../../../public/images/hero/talk-step3.png'

// const steps = [
//   {
//     title: "Discover Your Favorite Celebrities",
//     desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars.",
//   },
//   {
//     title: "Schedule Your Interaction",
//     desc: "Select your preferred interaction type — audio call, video call, or chat.",
//   },
//   {
//     title: "Experience the Moment",
//     desc: "Join the session at your scheduled time and interact with your favorite celebrity.",
//   },
// ];

// export default function HowCelebsWork() {
//   const [activeStep, setActiveStep] = useState(1);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;
//     const id = window.setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % steps.length);
//     }, 2200);
//     return () => window.clearInterval(id);
//   }, [isPaused]);

//   return (
//     <Section>
//       <Container>

//         {/* Heading */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2
//             className="text-[30px] md:text-[44px] lg:text-[48px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             How Celebs talks work
//           </h2>

//           <p className="text-[var(--neutral-600)] mt-3 max-w-[520px] mx-auto text-sm md:text-base">
//             A few mindful moments can change your day.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-14 items-start">

//           {/* LEFT STEPS */}
//           <div
//             className="space-y-6 max-w-[520px]"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >

//             {steps.map((step, index) => {

//               const active = activeStep === index;

//               return (
//                 <motion.div
//                   key={index}
//                   onMouseEnter={() => setActiveStep(index)}
//                   onClick={() => setActiveStep(index)}
//                   className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
//                     active ? "shadow-lg" : ""
//                   }`}
//                   style={
//                     active
//                       ? { background: "var(--gradient-card)" }
//                       : { background: "white" }
//                   }
//                 >
//                   <h3 className="font-semibold text-[18px] mb-2">
//                     {step.title}
//                   </h3>

//                   <p className="text-[14px] text-[var(--neutral-700)]">
//                     {step.desc}
//                   </p>
//                 </motion.div>
//               );
//             })}

//           </div>

//           {/* RIGHT PHONES */}
//           <div className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center overflow-visible">
//             <motion.div
//               key={`rear-${activeStep}`}
//               initial={{ opacity: 0, x: 90, rotate: 12, scale: 0.92 }}
//               animate={{ opacity: 0.72, x: 74, rotate: 10, scale: 0.9 }}
//               transition={{ duration: 0.55, ease: "easeInOut" }}
//               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
//             >
//               <Image
//                 src={talk3}
//                 alt="rear-phone"
//                 width={260}
//                 height={520}
//                 className="w-[165px] md:w-[210px]"
//                 priority
//               />
//             </motion.div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeStep}
//                 initial={{
//                   opacity: 0,
//                   x: activeStep === 0 ? -90 : 90,
//                   y: 12,
//                   rotate: activeStep === 0 ? -10 : 10,
//                   scale: 0.92,
//                 }}
//                 animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
//                 exit={{
//                   opacity: 0,
//                   x: activeStep === 2 ? -90 : 90,
//                   y: 8,
//                   rotate: activeStep === 2 ? -8 : 8,
//                   scale: 0.94,
//                 }}
//                 transition={{ duration: 0.62, ease: "easeInOut" }}
//                 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
//               >
//                 <Image
//                   src={activeStep === 0 ? talk1 : activeStep === 1 ? talk2 : talk3}
//                   alt={`phone-${activeStep + 1}`}
//                   width={280}
//                   height={560}
//                   className="w-[190px] md:w-[240px]"
//                   priority
//                 />
//               </motion.div>
//             </AnimatePresence>

//             <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-30" />
//           </div>

//         </div>

//       </Container>
//     </Section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";
import talk1 from '../../../../public/images/hero/talk-step1.png'
import talk2 from '../../../../public/images/hero/talk-step2.png'
import talk3 from '../../../../public/images/hero/talk-step3.png'

const steps = [
  {
    title: "Discover Your Favorite Celebrities",
    desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars.",
  },
  {
    title: "Schedule Your Interaction",
    desc: "Select your preferred interaction type — audio call, video call, or chat.",
  },
  {
    title: "Experience the Moment",
    desc: "Join the session at your scheduled time and interact with your favorite celebrity.",
  },
];

// Match reference motion progression: 3 phones -> 2 phones -> 1 phone.
const phoneConfigs = [
  [
    { x: -18, y: 4, rotate: -6, scale: 1.02, opacity: 1, zIndex: 30 },
    { x: 44, y: 6, rotate: 5, scale: 0.97, opacity: 0.92, zIndex: 22 },
    { x: 116, y: 12, rotate: 12, scale: 0.88, opacity: 0.75, zIndex: 16 },
  ],
  [
    { x: -120, y: 10, rotate: -10, scale: 0.9, opacity: 0, zIndex: 8 },
    { x: -6, y: 2, rotate: -2, scale: 1.02, opacity: 1, zIndex: 30 },
    { x: 86, y: 8, rotate: 10, scale: 0.92, opacity: 0.82, zIndex: 18 },
  ],
  [
    { x: -170, y: 16, rotate: -14, scale: 0.84, opacity: 0, zIndex: 5 },
    { x: -110, y: 10, rotate: -9, scale: 0.88, opacity: 0, zIndex: 7 },
    { x: 8, y: 0, rotate: 0, scale: 1.03, opacity: 1, zIndex: 30 },
  ],
];

export default function HowCelebsWork() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const phones = [talk1, talk2, talk3];

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <Section>
      <Container>

        {/* Heading — left aligned like the video */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-[30px] md:text-[44px] lg:text-[48px] font-semibold"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Celebs talks work
          </h2>

          <p className="text-[var(--neutral-600)] mt-3 max-w-[520px] text-sm md:text-base">
            A few mindful moments can change your day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT STEPS */}
          <div
            className="space-y-2 max-w-[520px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {steps.map((step, index) => {
              const active = activeStep === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-[22px] cursor-pointer transition-all duration-300 ${
                    active ? "shadow-lg scale-[1.02]" : "hover:bg-gray-50"
                  }`}
                  style={
                    active
                      ? { background: "var(--gradient-card)" }
                      : { background: "transparent" }
                  }
                >
                  <h3 className={`font-semibold text-[18px] mb-2 transition-colors duration-300 ${active ? "text-[var(--neutral-1000)]" : "text-[var(--neutral-500)]"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-[14px] transition-colors duration-300 ${active ? "text-[var(--neutral-700)]" : "text-[var(--neutral-400)]"}`}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PHONES — all 3 always visible, layered */}
          <div className="relative w-full h-[480px] md:h-[560px] flex items-center justify-center overflow-visible">
            {phones.map((src, i) => {
              const cfg = phoneConfigs[activeStep][i];
              return (
                <motion.div
                  key={i}
                  animate={{
                    x: cfg.x,
                    y: cfg.y,
                    rotate: cfg.rotate,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    zIndex: cfg.zIndex,
                  }}
                  transition={{ duration: 0.62, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: cfg.zIndex }}
                >
                  <Image
                    src={src}
                    alt={`step-${i + 1}`}
                    width={260}
                    height={520}
                    className="w-[200px] md:w-[240px] drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              );
            })}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-40" />
          </div>

        </div>

      </Container>
    </Section>
  );
}