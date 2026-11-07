import type { ReactNode } from 'react';
import { LazyMotion, MotionConfig } from 'motion/react';

const loadFeatures = () => import('../../lib/motionFeatures').then((module) => module.default);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
