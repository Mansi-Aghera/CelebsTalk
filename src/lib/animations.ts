import { Variants } from "framer-motion";

// Enhanced spring configurations for smoother animations
const smoothSpring = {
  type: "spring",
  stiffness: 100,      // Increased for responsiveness
  damping: 30,         // Increased for less bounce
  mass: 0.5,           // Reduced mass for faster response
  bounce: 0,           // No bounce for cleaner animations
} as const;

const gentleSpring = {
  type: "spring",
  stiffness: 80,
  damping: 25,
  mass: 0.8,
  bounce: 0.1,         // Minimal bounce for organic feel
} as const;

// For immediate animations (no whitespace)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...smoothSpring,
      duration: 0.7,    // Explicit duration for consistency
    },
  },
};

// Immediate fade with no initial opacity
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ...smoothSpring,
      duration: 0.5,
    },
  },
};

// Smooth scale with no initial visibility
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...gentleSpring,
      duration: 0.6,
    },
  },
};

// Optimized stagger with faster children animation
export const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,      // Reduced for smoother sequence
      delayChildren: 0,            // NO DELAY - immediate start
      when: "beforeChildren",       // Ensure container is ready
    },
  },
};

// New animations for different sections

// Slide from left (great for sidebars/menus)
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...smoothSpring,
      duration: 0.6,
    },
  },
};

// Slide from right (great for cards/modals)
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...smoothSpring,
      duration: 0.6,
    },
  },
};

// Smooth reveal with blur (modern effect)
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],  // Custom cubic-bezier
    },
  },
};

// For hero sections (premium feel)
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 0.8,
      duration: 0.9,
    },
  },
};

// For lists and grids (cascade effect)
export const cascadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,        // Very subtle stagger
      delayChildren: 0,
      staggerDirection: 1,           // Forward stagger
    },
  },
};

// For hover animations (interactive elements)
export const hoverScale = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};

export const hoverLift = {
  y: -5,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};

// For page transitions (no whitespace)
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};