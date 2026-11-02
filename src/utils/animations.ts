import { useEffect, useRef } from 'react';
import { useInView, useAnimation, type Variant } from 'framer-motion';

export const fadeInUp: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
};

export const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
};

/**
 * Custom hook that triggers animation when element enters viewport
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls, isInView };
}
