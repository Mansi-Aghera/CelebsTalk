"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import CelebrityCard from "@/components/ui/CelebrityCard";

const celebrities = [
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img1.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img2.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img3.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img1.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img2.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
  {
    name: "John beb",
    role: "Youtuber",
    description: "Singer, Fashion Designer, Content Writing",
    rating: 5.0,
    reviews: 58,
    image: "/images/hero/img3.jpg",
    videoPrice: "₹100/min",
    callPrice: "₹100/min",
    chatPrice: "₹100/min",
  },
];

export default function TrendingCelebrities() {
  return (
    <Section className="">
      <Container>
        {/* Heading */}
       <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center text-[32px] md:text-[52px] font-semibold leading-[100%] mb-[54px] py-2"
  style={{
    background: 'var(--gradient-cta)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}
>
  Trending Celebrities
</motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <CelebrityCard {...celebrity} />
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline-primary" size="lg" className="rounded-full">
            View All Celebrities →
          </Button>
        </div>
      </Container>
    </Section>
  );
}