export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  },
  viewport: { once: true },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
  viewport: { once: true },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
  viewport: { once: true },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};