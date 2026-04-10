
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
videoPrice: "100/min",
callPrice: "100/min",
chatPrice: "100/min",
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
      <Button variant="outline-primary" size="lg" className="rounded-full" href="/explore">
        View All Celebrities
      </Button>
    </motion.div>

  </Container>
</Section>


);
}


// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Button from "@/components/ui/Button";
// import CelebrityCard from "@/components/ui/CelebrityCard";
// import { fadeUp, staggerContainer } from "@/lib/animations";
// import { fetchApi, API_BASE_URL } from "@/lib/api";

// interface Influencer {
//   id: number;
//   full_name: string;
//   image: string | null;
//   languages: string[];
//   categories: { name: string }[];
//   follower_count: number;
//   avg_rating: number;
//   total_request_count: number;
//   price_per_min_video: number;
//   price_per_min_audio: number;
//   price_per_min_chat: number;
// }

// interface ApiResponse {
//   status: string;
//   data: Influencer[];
// }


// export default function TrendingCelebrities() {
//   const [celebrities, setCelebrities] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadInfluencers = async () => {
//       try {
//         const response = await fetchApi<ApiResponse>("/influencers/");
//         if (response.status === "success") {
//           const mapped = response.data.slice(0, 6).map((inf) => ({
//             name: inf.full_name,
//             category: inf.categories.map((c) => c.name).join(", "),
//             languages: inf.languages.join(", "),
//             location: "India", // Default or bio snippet can be used
//             orders: inf.total_request_count || 0,
//             rating: inf.avg_rating || 5,
//             subscribers: inf.follower_count >= 1000 ? `${(inf.follower_count / 1000).toFixed(1)}k` : inf.follower_count.toString(),
//             image: inf.image ? (inf.image.startsWith("http") ? inf.image : `${API_BASE_URL}${inf.image}`) : "/images/hero/img1.jpg",
//             videoPrice: `₹${Math.round(inf.price_per_min_video)}/min`,
//             callPrice: `₹${Math.round(inf.price_per_min_audio)}/min`,
//             chatPrice: `₹${Math.round(inf.price_per_min_chat)}/min`,
//           }));
//           setCelebrities(mapped);
//         }
//       } catch (error) {
//         console.error("Failed to load trending celebrities:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadInfluencers();
//   }, []);

//   if (loading && celebrities.length === 0) {
//     return (
//       <Section>
//         <Container>
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="w-10 h-10 border-4 border-[var(--primary-100)] border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         </Container>
//       </Section>
//     );
//   }

//   return (
//     <Section>
//       <Container>
//         {/* Heading */}
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="text-center text-[32px] md:text-[52px] font-semibold leading-[100%] mb-[54px] py-2"
//           style={{
//             background: "var(--gradient-cta)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//           }}
//         >
//           Trending Celebrities
//         </motion.h2>

//         {/* Grid */}
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {celebrities.map((celebrity, index) => (
//             <motion.div key={index} variants={fadeUp}>
//               <CelebrityCard {...celebrity} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Button */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="flex justify-center mt-12"
//         >
//           <Button variant="outline-primary" size="lg" className="rounded-full" href="/explore">
//             View All Celebrities →
//           </Button>
//         </motion.div>
//       </Container>
//     </Section>
//   );
// }
