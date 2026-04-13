"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQ } from "@/types";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const mid = Math.ceil(faqs.length / 2);
const leftFAQ = faqs.slice(0, mid);
const rightFAQ = faqs.slice(mid);
  return (
    <Section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-[32px] md:text-[48px] font-semibold"
            style={{
              background: "var(--gradient-cta)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Everything you need to Know
          </h2>

          <p className="text-[var(--neutral-600)] mt-2 text-sm max-w-[520px] mx-auto">
            Everything you need to know about using Celebs talks from start to daily usage.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {leftFAQ.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {rightFAQ.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
