// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Image from "next/image";

// const steps = [
//   {
//     title: "Discover Your Favorite Celebrities",
//     desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars. Explore profiles, check availability, and choose the celebrity you want to connect with.",
//     highlight: true,
//   },
//   {
//     title: "Schedule Your Interaction",
//     desc: "Select your preferred interaction type — audio call, video call, or chat. Pick an available time slot and confirm your booking in just a few taps.",
//   },
//   {
//     title: "Experience the Moment",
//     desc: "Join the session at your scheduled time and interact with your favorite celebrity. Enjoy a memorable conversation, get a shoutout, or simply chat with the star you admire.",
//   },
// ];

// export default function HowCelebsWork() {
//   return (
//     <Section className="py-24">
//       <Container>

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2
//             className="text-[32px] md:text-[52px] font-semibold"
//             style={{
//               background: "var(--gradient-cta)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             How Celebs talks work
//           </h2>

//           <p className="text-[var(--neutral-600)] mt-2 max-w-[520px] mx-auto">
//             A few mindful moments can change your day Bloom helps you reset,
//             relax, and grow with ease.
//           </p>
//         </motion.div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* LEFT SIDE STEPS */}
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={{
//               hidden: {},
//               show: {
//                 transition: {
//                   staggerChildren: 0.25,
//                 },
//               },
//             }}
//             className="space-y-8"
//           >
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={{
//                   hidden: { opacity: 0, y: 40 },
//                   show: {
//                     opacity: 1,
//                     y: 0,
//                     transition: { duration: 0.7, ease: "easeOut" },
//                   },
//                 }}
//                 className={`p-5 rounded-2xl ${
//                   step.highlight
//                     ? "bg-gradient-to-r from-pink-300 to-purple-300 text-white"
//                     : ""
//                 }`}
//               >
//                 <h3 className="font-semibold text-lg mb-2">
//                   {step.title}
//                 </h3>

//                 <p
//                   className={`text-sm ${
//                     step.highlight
//                       ? "text-white/90"
//                       : "text-[var(--neutral-600)]"
//                   }`}
//                 >
//                   {step.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* RIGHT PHONE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="flex justify-center lg:justify-end"
//           >
//             <Image
//               src="/images/hero/talk.png"
//               alt="celebs talk app"
//               width={500}
//               height={600}
//               className="w-[320px] md:w-[420px] lg:w-[480px]"
//               priority
//             />
//           </motion.div>

//         </div>

//       </Container>
//     </Section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Image from "next/image";

const steps = [
  {
    title: "Discover Your Favorite Celebrities",
    desc: "Browse a wide range of verified celebrities from actors, singers, creators, and sports stars. Explore profiles, check availability, and choose the celebrity you want to connect with.",
    highlight: true,
  },
  {
    title: "Schedule Your Interaction",
    desc: "Select your preferred interaction type — audio call, video call, or chat. Pick an available time slot and confirm your booking in just a few taps.",
  },
  {
    title: "Experience the Moment",
    desc: "Join the session at your scheduled time and interact with your favorite celebrity. Enjoy a memorable conversation, get a shoutout, or simply chat with the star you admire.",
  },
];

export default function HowCelebsWork() {
  return (
    <Section className="py-24">
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
            className="text-[32px] md:text-[48px] font-semibold"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Celebs talks work
          </h2>

          <p className="text-[var(--neutral-600)] mt-2 max-w-[520px] mx-auto text-sm">
            A few mindful moments can change your day Bloom helps you reset,
            relax, and grow with ease.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT TEXT AREA */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="max-w-[500px]"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className={`mb-8 ${
                  step.highlight
                    ? "p-5 rounded-[22px]"
                    : ""
                }`}
                style={
                  step.highlight
                    ? {
                        background: "var(--gradient-card)",
                      }
                    : {}
                }
              >
                <h3 className="font-semibold text-[16px] mb-2">
                  {step.title}
                </h3>

                <p className="text-[13px] text-[var(--neutral-700)] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/images/hero/talk.png"
              alt="Celebs Talk App"
              width={480}
              height={600}
              className="w-[300px] md:w-[380px] lg:w-[460px]"
              priority
            />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}