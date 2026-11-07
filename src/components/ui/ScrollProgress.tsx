import { m, useReducedMotion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const reduce = useReducedMotion();
  return (
    <m.div
      className="scroll-progress"
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
    />
  );
}
