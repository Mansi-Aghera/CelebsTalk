

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


"use client";

import { useState } from "react";
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

export default function HowCelebsWork() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Section>
      <Container>

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
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

          <p className="text-[var(--neutral-600)] mt-3 max-w-[520px] mx-auto text-sm md:text-base">
            A few mindful moments can change your day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT STEPS */}
          <div className="space-y-6 max-w-[520px]">

            {steps.map((step, index) => {

              const active = activeStep === index;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`p-6 rounded-[22px] cursor-pointer transition-all duration-300 ${
                    active ? "shadow-xl scale-[1.02]" : ""
                  }`}
                  style={
                    active
                      ? { background: "var(--gradient-card)" }
                      : { background: "white" }
                  }
                >
                  <h3 className="font-semibold text-[18px] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[14px] text-[var(--neutral-700)]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

          {/* RIGHT PHONES */}
          {/* RIGHT PHONES */}
<div className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center justify-center">

  {/* PHONE 1 */}
  <motion.div
    animate={{
      x: activeStep === 0 ? 0 : -90,
      rotate: activeStep === 0 ? 0 : -15,
      scale: activeStep === 0 ? 1.05 : 0.9,
      opacity: activeStep === 0 ? 1 : 0.7,
      zIndex: activeStep === 0 ? 20 : 1
    }}
    transition={{ duration: 0.5 }}
    className="absolute"
  >
    <Image
      src={talk1}
      alt="phone1"
      width={260}
      height={520}
      className="w-[180px] md:w-[220px]"
      priority
    />
  </motion.div>

  {/* PHONE 2 */}
  <motion.div
    animate={{
      scale: activeStep === 1 ? 1.08 : 0.92,
      opacity: activeStep === 1 ? 1 : 0.7,
      zIndex: activeStep === 1 ? 20 : 2
    }}
    transition={{ duration: 0.5 }}
    className="absolute"
  >
    <Image
      src={talk2}
      alt="phone2"
      width={260}
      height={520}
      className="w-[200px] md:w-[240px]"
      priority
    />
  </motion.div>

  {/* PHONE 3 */}
  <motion.div
    animate={{
      x: activeStep === 2 ? 0 : 90,
      rotate: activeStep === 2 ? 0 : 15,
      scale: activeStep === 2 ? 1.05 : 0.9,
      opacity: activeStep === 2 ? 1 : 0.7,
      zIndex: activeStep === 2 ? 20 : 1
    }}
    transition={{ duration: 0.5 }}
    className="absolute"
  >
    <Image
      src={talk3}
      alt="phone3"
      width={260}
      height={520}
      className="w-[180px] md:w-[220px]"
      priority
    />
  </motion.div>

</div>

        </div>

      </Container>
    </Section>
  );
}