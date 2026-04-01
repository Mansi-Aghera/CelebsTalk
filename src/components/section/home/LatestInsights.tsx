"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import BlogCard from "@/components/ui/BlogCard";

const blogs = [
  {
    image: "/images/hero/blog1.jpg",
    category: "Content",
    title: "Creating Meaningful Fan Experiences Through...",
    date: "Jan 15, 2026",
  },
  {
    image: "/images/hero/blog2.jpg",
    category: "Influencer",
    title: "How Influencers Are Changing the Way Fans...",
    date: "Jan 15, 2026",
  },
  {
    image: "/images/hero/blog3.jpg",
    category: "Designer",
    title: "Designing Digital Platforms That Bring Fans...",
    date: "Jan 15, 2026",
  },
  {
    image: "/images/hero/blog4.jpg",
    category: "Video",
    title: "The Power of Video Messages: A New Way...",
    date: "Jan 15, 2026",
  },
];

export default function LatestInsights() {
  return (
    <Section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            Latest Insight & Updates
          </h2>

          <p className="text-[var(--neutral-600)] mt-2 text-sm max-w-[520px] mx-auto">
            A few mindful moments can change your day Bloom helps you reset,
            relax, and grow with ease.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
