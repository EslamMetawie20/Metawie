"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
export default FadeIn;
