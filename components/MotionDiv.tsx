"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
type Props = {
  children: ReactNode;
  className?: string;
};

export const HeroMotionDiv = (props: Props) => {
  const { children, className } = props;
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.3 }}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
};
export const DescMotionDiv = (props: Props) => {
  const { children, className } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.8, delay: 0.9 }}
      viewport={{ once: true }}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
};
