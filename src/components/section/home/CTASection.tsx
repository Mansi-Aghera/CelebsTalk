"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Section className="py-20">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[30px] px-6 md:px-14 py-12 md:py-16 text-center overflow-hidden"
          style={{
  background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(251, 81, 188, 1) 100%)",
}}
        >

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[42px] font-semibold leading-tight"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ready to meet your Favorite Creator?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-3 text-sm md:text-base text-[var(--neutral-600)] max-w-[600px] mx-auto"
          >
            Don’t miss the chance, book your exclusive experience today and
            create memories that last a lifetime.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >

            <Button
              variant="outline-primary"
              size="lg"
              className="rounded-full"
            >
              Explore Celebrities
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="rounded-full border border-[var(--neutral-200)]"
            >
              Browse Creators
            </Button>

          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-xs text-[var(--neutral-500)]"
          >
            Secure payments • Verified Celebrities • 24/7 Support
          </motion.p>

        </motion.div>

      </Container>
    </Section>
  );
}