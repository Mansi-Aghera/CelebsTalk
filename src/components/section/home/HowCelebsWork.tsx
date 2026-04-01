// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Image from "next/image";
// import { fadeUp } from "@/lib/animations";
// import talk1 from "../../../../public/images/hero/talk-step1.png";
// import talk2 from "../../../../public/images/hero/talk-step2.png";
// import talk3 from "../../../../public/images/hero/talk-step3.png";

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

// /**
//  * Video analysis (frame by frame):
//  *
//  * Step 0: 3 phones fanned right. phone[0]=front-left upright, phone[1]=mid right ~8°, phone[2]=back far-right ~16°
//  * Step 1: phone[0] exits left (opacity→0), phone[1] slides to front, phone[2] takes mid-right slot
//  * Step 2: phone[0]+[1] gone, phone[2] alone at center, slight rightward tilt ~5°
//  */
// const phoneConfigs = [
//   // Step 0 — 3 phones fanned, phone[0] is front hero
//   [
//     { x: -30, y: 0, rotate: -3, scale: 1.05, opacity: 1, zIndex: 30 },
//     { x: 60, y: 8, rotate: 8, scale: 0.95, opacity: 0.88, zIndex: 20 },
//     { x: 140, y: 16, rotate: 16, scale: 0.83, opacity: 0.65, zIndex: 10 },
//   ],
//   // Step 1 — smoother transition
//   [
//     { x: -260, y: 10, rotate: -18, scale: 0.75, opacity: 0, zIndex: 5 },
//     { x: -10, y: 0, rotate: -1, scale: 1.08, opacity: 1, zIndex: 30 },
//     { x: 110, y: 14, rotate: 12, scale: 0.9, opacity: 0.75, zIndex: 18 },
//   ],

//   // Step 2 — final hero state (clean + centered)
//   [
//     { x: -280, y: 0, rotate: -20, scale: 0.7, opacity: 0, zIndex: 3 },
//     { x: -240, y: 0, rotate: -12, scale: 0.75, opacity: 0, zIndex: 4 },
//     { x: 0, y: 0, rotate: 4, scale: 1.1, opacity: 1, zIndex: 30 },
//   ],
// ];

// export default function HowCelebsWork() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const phones = [talk1, talk2, talk3];

//   useEffect(() => {
//     if (isPaused) return;
//     const id = window.setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % steps.length);
//     }, 3200);
//     return () => window.clearInterval(id);
//   }, [isPaused]);

//   return (
//     <Section>
//       <Container>
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2
//             className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             How Celebs talks work
//           </h2>

//           <p className="text-[var(--neutral-600)] mt-2 max-w-full lg:max-w-[520px] mx-auto text-sm">
//             A few mindful moments can change your day Bloom helps you reset,
//             relax, and grow with ease.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
//           {/* LEFT STEPS */}
//           <div
//             className="space-y-2 max-w-full lg:max-w-[520px]"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => {
//               setTimeout(() => setIsPaused(false), 300);
//             }}
//           >
//             {steps.map((step, index) => {
//               const active = activeStep === index;
//               return (
//                 <motion.div
//                   key={index}
//                   onMouseEnter={() => setActiveStep(index)}
//                   onClick={() => setActiveStep(index)}
//                   className={`p-4 sm:p-5 md:p-6 rounded-[22px] cursor-pointer transition-all duration-300 ${
//                     active ? "shadow-lg scale-[1.02]" : "hover:bg-gray-50"
//                   }`}
//                   style={
//                     active
//                       ? { background: "var(--gradient-card)" }
//                       : { background: "transparent" }
//                   }
//                 >
//                   <h3
//                     className={`font-semibold text-[18px] mb-2 transition-colors duration-300 ${
//                       active
//                         ? "text-[var(--neutral-1000)]"
//                         : "text-[var(--neutral-500)]"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>
//                   <p
//                     className={`text-[14px] transition-colors duration-300 ${
//                       active
//                         ? "text-[var(--neutral-700)]"
//                         : "text-[var(--neutral-400)]"
//                     }`}
//                   >
//                     {step.desc}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* RIGHT PHONES — all 3 always mounted, animated by config */}
//           <div className="relative w-full h-[480px] md:h-[560px] flex items-center justify-center overflow-visible">
//             {phones.map((src, i) => {
//               const cfg = responsiveConfigs[activeStep][i];
//               return (
//                 <motion.div
//                   key={i}
//                   animate={{
//                     x: cfg.x,
//                     y: cfg.y,
//                     rotate: cfg.rotate,
//                     scale: cfg.scale,
//                     opacity: cfg.opacity,
//                     filter: cfg.opacity < 0.7 ? "blur(2px)" : "blur(0px)", // 🔥 depth effect
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     ease: [0.22, 1, 0.36, 1], // 🔥 smoother (like video)
//                     delay: i * 0.08, // 🔥 stagger effect
//                   }}
//                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
//                   style={{ zIndex: cfg.zIndex }}
//                 >
//                  <Image
//   src={src}
//   alt={`step-${i + 1}`}
//   width={500}
//   height={1000}
//   className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[480px] h-auto drop-shadow-2xl scale-[1.15]"
//   priority
// />
//                 </motion.div>
//               );
//             })}

//             {/* Bottom fade */}
//             <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-40" />
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
import talk1 from "../../../../public/images/hero/talk-step1.png";
import talk2 from "../../../../public/images/hero/talk-step2.png";
import talk3 from "../../../../public/images/hero/talk-step3.png";

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

const phoneConfigs = [
  [
    { x: -30, y: 0, rotate: -3, scale: 1.05, opacity: 1, zIndex: 30 },
    { x: 60, y: 8, rotate: 8, scale: 0.95, opacity: 0.88, zIndex: 20 },
    { x: 140, y: 16, rotate: 16, scale: 0.83, opacity: 0.65, zIndex: 10 },
  ],
  [
    { x: -260, y: 10, rotate: -18, scale: 0.75, opacity: 0, zIndex: 5 },
    { x: -10, y: 0, rotate: -1, scale: 1.08, opacity: 1, zIndex: 30 },
    { x: 110, y: 14, rotate: 12, scale: 0.9, opacity: 0.75, zIndex: 18 },
  ],
  [
    { x: -280, y: 0, rotate: -20, scale: 0.7, opacity: 0, zIndex: 3 },
    { x: -240, y: 0, rotate: -12, scale: 0.75, opacity: 0, zIndex: 4 },
    { x: 0, y: 0, rotate: 4, scale: 1.1, opacity: 1, zIndex: 30 },
  ],
];

export default function HowCelebsWork() {
  const phones = [talk1, talk2, talk3];
  const [activeStep, setActiveStep] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getPhoneConfigs = () => {
    const factor = isMobile ? 0.6 : 1;

    return phoneConfigs.map((step) =>
      step.map((cfg) => ({
        ...cfg,
        x: cfg.x * factor,
        y: cfg.y * factor,
      })),
    );
  };

  const responsiveConfigs = getPhoneConfigs();

  useState(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  });
  return (
    <Section>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Celebs talks work
          </h2>

          <p className="text-[var(--neutral-600)] mt-2 max-w-full lg:max-w-[520px] mx-auto text-sm">
            A few mindful moments can change your day Bloom helps you reset,
            relax, and grow with ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          {/* LEFT STEPS */}
          <div
            className="space-y-2 max-w-full lg:max-w-[520px]"
            onMouseLeave={() => {
              setTimeout(() => setActiveStep(0), 200);
            }}
          >
            {steps.map((step, index) => {
              const active = activeStep === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 sm:p-5 md:p-6 rounded-[22px] cursor-pointer transition-all duration-300 ${
                    active ? "shadow-lg scale-[1.02]" : "hover:bg-gray-50"
                  }`}
                  style={
                    active
                      ? { background: "var(--gradient-card)" }
                      : { background: "transparent" }
                  }
                >
                  <h3
                    className={`font-semibold text-[18px] mb-2 transition-colors duration-300 ${
                      active
                        ? "text-[var(--neutral-1000)]"
                        : "text-[var(--neutral-500)]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[14px] transition-colors duration-300 ${
                      active
                        ? "text-[var(--neutral-700)]"
                        : "text-[var(--neutral-400)]"
                    }`}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT PHONES */}
          <div className="relative w-full min-h-[300px] sm:min-h-[320px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center overflow-visible">
            {phones.map((src, i) => {
              const cfg = responsiveConfigs[activeStep][i];
              return (
                <motion.div
                  key={i}
                  animate={{
                    x: cfg.x,
                    y: cfg.y,
                    rotate: cfg.rotate,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    filter: cfg.opacity < 0.7 ? "blur(2px)" : "blur(0px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
                  style={{ zIndex: cfg.zIndex }}
                >
                  <Image
                    src={src}
                    alt={`step-${i + 1}`}
                    width={500}
                    height={1000}
                    className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[480px] h-auto drop-shadow-2xl scale-[1.05] sm:scale-[1.1] md:scale-[1.15] lg:scale-[1.2]"
                    priority
                  />
                </motion.div>
              );
            })}

            {/* Bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-transparent z-40" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
