

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <Section className="relative pt-14 md:pt-18 lg:pt-22 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-pink-50 text-[var(--primary-300)] px-4 py-2 rounded-full w-fit text-sm font-medium"
            >
              ⭐ Meet Your Favorites Celebrities
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--neutral-1000)]"
            >
              Connect With <br />
              Celebrities Like Never <br />
              Before
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[var(--neutral-700)] text-base md:text-lg max-w-lg"
            >
              Book video calls, personalized shoutouts, and live chats with your
              favorite stars.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Button variant="outline-primary" size="lg" className="rounded-full" href="/explore">
                Explore Celebrities →
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-10 pt-6 flex-wrap"
            >
              <div className="flex items-center gap-3">
                <div className="text-yellow-400 text-3xl">⭐</div>
                <div>
                  <p className="text-2xl font-semibold">250+</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Celebrities
                  </p>
                </div>
              </div>

              <div className="h-10 w-[1px] bg-[var(--neutral-300)] hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="text-pink-400 text-3xl">💬</div>
                <div>
                  <p className="text-2xl font-semibold">470+</p>
                  <p className="text-sm text-[var(--neutral-600)]">
                    Fan Interaction
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.5,
              delay: 0.1
            }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* glow */}
            <div className="absolute w-[500px] h-[420px] rounded-full bg-transparent" />

            {/* HERO CARD */}
            <div className="relative w-full max-w-[500px] aspect-[665/718] rounded-[10px] overflow-hidden">

              <Image
                src="/images/hero/hero.png"
                alt="Celebrity"
                fill
                priority
                className="object-cover"
              />

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2 
                }}
                className="absolute top-2 left-0 bg-gradient-to-br from-[#FFACCE] to-[#FFE4EF] px-4 py-3 rounded-[10px] shadow-md flex flex-col items-center"
              >
                <div className="flex -space-x-2 mb-1">
                  <Image src="/images/hero/img1.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
                  <Image src="/images/hero/img2.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
                  <Image src="/images/hero/img3.jpg" alt="" width={28} height={28} className="rounded-full border-2 border-white"/>
                </div>
                <span className="text-sm font-semibold text-black">
                  10k+ fans
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.3 
                }}
                className="absolute bottom-4 right-0 bg-gradient-to-br from-[#DEA9FF] to-[#F2E0FD] px-4 py-3 rounded-[10px] shadow-md flex flex-col items-center"
              >
                <div className="flex -space-x-2 mb-1">
                  <Image src="/images/hero/img1.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
                  <Image src="/images/hero/img2.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
                  <Image src="/images/hero/img3.jpg" alt="" width={26} height={26} className="rounded-full border-2 border-white"/>
                </div>
                <span className="text-sm font-semibold text-black">
                  20L+ User
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}