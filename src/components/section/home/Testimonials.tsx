

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CountUp from "react-countup";
import { useRef } from "react";

const testimonials = [
  {
    image: "/images/hero/testimonial1.jpg",
    name: "Almas, 26",
    location: "Mumbai, Maharashtra",
    review: "My dream has come true!, Jacqueline's Video was amazing!",
  },
  {
    image: "/images/hero/testimonial2.jpg",
    name: "Almas, 26",
    location: "Mumbai, Maharashtra",
    review: "My dream has come true!, Jacqueline's Video was amazing!",
  },
  {
    image: "/images/hero/testimonial3.jpg",
    name: "Almas, 26",
    location: "Mumbai, Maharashtra",
    review: "My dream has come true!, Jacqueline's Video was amazing!",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = 340;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <Section className="py-24">
      <Container>
        <div className="relative border border-[var(--primary-200)] rounded-[40px] px-6 md:px-10 py-14 md:py-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5,
            }}
            viewport={{ once: true }}
            className="text-center text-[26px] md:text-[38px] font-semibold max-w-[900px] mx-auto leading-tight"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Celebs-Talks connects fans with their favorite celebrities through
            personalized wishes, video calls, and live interactions
          </motion.h2>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1,
              }}
            >
              <p className="text-3xl md:text-4xl font-semibold">
                <CountUp end={4.5} decimals={1} duration={2} />
              </p>
              <p className="text-sm text-[var(--neutral-600)]">
                Rating on playstore
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
            >
              <p className="text-3xl md:text-4xl font-semibold">
                <CountUp end={4.8} decimals={1} duration={2} />
              </p>
              <p className="text-sm text-[var(--neutral-600)]">
                Rating on appstore
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3,
              }}
            >
              <p className="text-3xl md:text-4xl font-semibold">
                <CountUp end={10} duration={2} />
                L+
              </p>
              <p className="text-sm text-[var(--neutral-600)]">
                Active user on celebs-talks
              </p>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="relative mt-12">
            {/* LEFT BUTTON */}
            <motion.button
              onClick={() => scroll("left")}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[var(--primary-200)] bg-white items-center justify-center shadow hover:scale-110 transition w-10 h-10 md:w-11 md:h-11"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Cards */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1"
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[340px]"
                >
                  <TestimonialCard {...item} />
                </motion.div>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <motion.button
              onClick={() => scroll("right")}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[var(--primary-200)] bg-white items-center justify-center shadow hover:scale-110 transition w-10 h-10 md:w-11 md:h-11"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Download Section */}
          <div className="text-center mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="text-xl md:text-2xl font-semibold"
              style={{
                background: "var(--gradient-cta)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Download CelebsTalks app now
            </motion.h3>

            <div className="flex justify-center gap-6 mt-6 flex-wrap">
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.1,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border border-[var(--primary-200)] rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-md transition"
              >
                <Image
                  src="/images/footer/playstore.png"
                  alt="playstore"
                  width={28}
                  height={28}
                />
                Get it on Google Play
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="border border-[var(--primary-200)] rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-md transition"
              >
                <Image
                  src="/images/footer/apple.png"
                  alt="appstore"
                  width={28}
                  height={28}
                />
                Available on the App Store
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
