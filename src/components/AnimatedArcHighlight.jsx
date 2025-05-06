// src/components/AnimatedArcHighlight.jsx
'use client';

import { motion } from 'framer-motion';

/**
 * Arc‐shaped highlight that animates as soon as it scrolls into view.
 */
export function AnimatedArcHighlight({
  children,
  color = '#C084FC',
  delay = 0
}) {
  return (
    <span className="relative inline-block whitespace-nowrap px-1">
      {/* Arc background */}
      <motion.span
        className="absolute left-0 right-0 bottom-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay, duration: 0.6, ease: 'easeOut' }}
        style={{
          transformOrigin: 'left center',
          height: '1.2em',
          backgroundColor: color,
          borderRadius: '0 0 50% 50%',
          zIndex: -1
        }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
