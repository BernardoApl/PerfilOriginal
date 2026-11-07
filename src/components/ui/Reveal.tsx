import { useState, type ReactNode } from 'react';
import { m, useReducedMotion } from 'motion/react';

/** Reveal once on entry; keyboard focus and reduced motion always expose content. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [focused, setFocused] = useState(false);
  return (
    <m.div
      className={`reveal ${className}`.trim()}
      initial={reduce ? false : 'hidden'}
      animate={reduce || focused ? 'visible' : undefined}
      whileInView="visible"
      variants={{ hidden: { y: 32, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -32px 0px' }}
      onFocusCapture={() => setFocused(true)}
      transition={{
        duration: reduce || focused ? 0 : 0.8,
        delay: reduce || focused ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}
