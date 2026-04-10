
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

