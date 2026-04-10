"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import AccordionItem from "@/components/ui/AccordionItem";

const leftFAQ = [
  {
    question: "What is Celebs-Talks?",
    answer:
      "Celebs-Talks is a platform that connects fans with their favorite celebrities through live interactions such as video calls, audio calls, chats, and personalized messages.",
  },
  {
    question: "What types of interactions are available on Celebs-Talks?",
    answer:
      "You can book video calls, audio calls, chat sessions, and personalized video messages with your favorite celebrities.",
  },
  {
    question: "Can I request a personalized video message from a celebrity?",
    answer:
      "Yes, fans can request custom video shoutouts or messages for birthdays, anniversaries, and special moments.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, depending on the booking policy you can cancel or reschedule your interaction before the scheduled time.",
  },
  {
    question: "Can celebrities join Celebs-Talks and interact with fans?",
    answer:
      "Yes, verified creators and celebrities can join the platform and connect directly with their fans.",
  },
];

const rightFAQ = [
  {
    question: "How can I book a call with a celebrity?",
    answer:
      "Simply browse the celebrity profile, choose an available interaction type, select the time slot, and confirm your booking.",
  },
  {
    question: "Are the celebrities on Celebs-Talks verified?",
    answer:
      "Yes, all celebrities go through a verification process to ensure authenticity.",
  },
  {
    question: "How long does a celebrity call or interaction last?",
    answer:
      "The duration depends on the booking type and package selected by the user.",
  },
  {
    question: "What payment methods are supported on Celebs-Talks?",
    answer:
      "We support major payment methods including UPI, credit cards, debit cards, and digital wallets.",
  },
  {
    question: "Is my interaction with the celebrity private and secure?",
    answer:
      "Yes, all interactions are secure and private to ensure a safe fan experience.",
  },
];

export default function FAQSection() {
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
