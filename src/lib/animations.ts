export const fadeUp = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
  viewport: { once: true, margin: "-80px" },
};

export const fadeIn = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1 },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
  viewport: { once: true, margin: "-80px" },
};

export const scaleIn = {
  initial: { scale: 0.96, opacity: 1 },
  whileInView: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
  viewport: { once: true, margin: "-80px" },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};