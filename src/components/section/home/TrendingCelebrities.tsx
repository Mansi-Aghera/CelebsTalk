// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import Section from "@/components/layout/Section";
// import Button from "@/components/ui/Button";
// import CelebrityCard from "@/components/ui/CelebrityCard";
// import { fadeUp, staggerContainer } from "@/lib/animations";

// const celebrities = [
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img1.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img2.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img3.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img1.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img2.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// {
// name: "John beb",
// category: "Singer, Fashion Designer, Content Writing",
// languages: "Hindi, English, Marathi",
// location: "Mumbai",
// orders: 85014,
// rating: 5.0,
// subscribers: "100k",
// image: "/images/hero/img3.jpg",
// videoPrice: "100/min",
// callPrice: "100/min",
// chatPrice: "100/min",
// },
// ];

// export default function TrendingCelebrities() {
// return ( <Section> <Container>

//     {/* Heading */}

//     <motion.h2
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="text-center text-[32px] md:text-[52px] font-semibold leading-[100%] mb-[54px] py-2"
//       style={{
//         background: "var(--gradient-cta)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         backgroundClip: "text",
//       }}
//     >
//       Trending Celebrities
//     </motion.h2>

//     {/* Grid */}

//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//     >
//       {celebrities.map((celebrity, index) => (
//         <motion.div key={index} variants={fadeUp}>
//           <CelebrityCard {...celebrity} />
//         </motion.div>
//       ))}
//     </motion.div>

//     {/* Button */}

//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="flex justify-center mt-12"
//     >
//       <Button variant="outline-primary" size="lg" className="rounded-full" href="/explore">
//         View All Celebrities
//       </Button>
//     </motion.div>

//   </Container>
// </Section>

// );
// }

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import CelebrityCard from "@/components/ui/CelebrityCard";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Influencer } from "@/types";
import { useRouter } from "next/navigation";
interface TrendingCelebritiesProps {
  celebrities: Influencer[];
}

export default function TrendingCelebrities({
  celebrities,
}: TrendingCelebritiesProps) {
  const router = useRouter();
  return (
    <Section>
      {" "}
      <Container>
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
          {celebrities.map((celeb) => (
            <motion.div
  key={celeb.id}
  variants={fadeUp}
  onClick={() => router.push(`/profile/${celeb.id}`)}
  className="cursor-pointer"
>
              <CelebrityCard
                name={celeb.full_name}
                image={celeb.image || "/images/hero/img1.jpg"}
                category={celeb.categories.map((c) => c.name).join(", ")}
                languages={celeb.languages.join(", ")}
                location={celeb.gender}
                orders={celeb.total_request_count}
                subscribers={
                  celeb.follower_count > 1000
                    ? `${(celeb.follower_count / 1000).toFixed(0)}k`
                    : String(celeb.follower_count)
                }
                rating={celeb.avg_rating}
                videoPrice={`₹${celeb.price_per_min_video}/min`}
                callPrice={`₹${celeb.price_per_min_audio}/min`}
                chatPrice={`₹${celeb.price_per_min_chat}/min`}
              />
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
          <Button
            variant="outline-primary"
            size="lg"
            className="rounded-full"
            href="/explore"
          >
            View All Celebrities →
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
