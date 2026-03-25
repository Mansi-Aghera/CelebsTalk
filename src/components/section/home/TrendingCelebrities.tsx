

// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Button from "@/components/ui/Button";
// import CelebrityCard from "@/components/ui/CelebrityCard";

// const celebrities = [
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img1.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img2.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img3.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img1.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img2.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
//   {
//     name: "John beb",
//     role: "Youtuber",
//     description: "Singer, Fashion Designer, Content Writing",
//     rating: 5.0,
//     reviews: 58,
//     image: "/images/hero/img3.jpg",
//     videoPrice: "₹100/min",
//     callPrice: "₹100/min",
//     chatPrice: "₹100/min",
//   },
// ];

// // Smooth animations configuration
// const smoothFadeUp = {
//   hidden: { 
//     opacity: 0, 
//     y: 20 
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { 
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//       mass: 0.5,
//       duration: 0.6
//     },
//   },
// } as const;

// const smoothStagger = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0,
//     },
//   },
// } as const;

// export default function TrendingCelebrities() {
//   return (
//     <Section className="">
//       <Container>
//         {/* Heading - Now with spring animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ 
//             type: "spring",
//             stiffness: 100,
//             damping: 20,
//             mass: 0.5
//           }}
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-center text-[32px] md:text-[52px] font-semibold leading-[100%] mb-[54px] py-2"
//           style={{
//             background: 'var(--gradient-cta)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//           }}
//         >
//           Trending Celebrities
//         </motion.h2>

//         {/* Grid with optimized stagger */}
//         <motion.div
//           variants={smoothStagger}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {celebrities.map((celebrity, index) => (
//             <motion.div
//               key={index}
//               variants={smoothFadeUp}
//             >
//               <CelebrityCard {...celebrity} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Button with smooth entrance */}
//         <motion.div 
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ 
//             type: "spring",
//             stiffness: 100,
//             damping: 20,
//             delay: 0.2
//           }}
//           viewport={{ once: true }}
//           className="flex justify-center mt-12"
//         >
//           <Button variant="outline-primary" size="lg" className="rounded-full">
//             View All Celebrities →
//           </Button>
//         </motion.div>
//       </Container>
//     </Section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import CelebrityCard from "@/components/ui/CelebrityCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

const celebrities = [
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img1.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img2.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img3.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img1.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img2.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
{
name: "John beb",
category: "Singer, Fashion Designer, Content Writing",
languages: "Hindi, English, Marathi",
location: "Mumbai",
orders: 85014,
rating: 5.0,
subscribers: "100k",
image: "/images/hero/img3.jpg",
videoPrice: "₹100/min",
callPrice: "₹100/min",
chatPrice: "₹100/min",
},
];

export default function TrendingCelebrities() {
return ( <Section> <Container>


    {/* Heading */}

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center text-[32px] md:text-[52px] font-semibold leading-[100%] mb-[54px] py-2"
      style={{
        background: "var(--gradient-cta)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Trending Celebrities
    </motion.h2>

    {/* Grid */}

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {celebrities.map((celebrity, index) => (
        <motion.div key={index} variants={fadeUp}>
          <CelebrityCard {...celebrity} />
        </motion.div>
      ))}
    </motion.div>

    {/* Button */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center mt-12"
    >
      <Button variant="outline-primary" size="lg" className="rounded-full">
        View All Celebrities →
      </Button>
    </motion.div>

  </Container>
</Section>


);
}
