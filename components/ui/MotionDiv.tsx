"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
type Props = {
  children: ReactNode;
  className?: string;
};

export const LogoMotionDiv = (props: Props) => {
  const { children, className } = props;
  return (
    <motion.div
      initial={{ y: -39, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className={cn(`${className}`)}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export const HeroMotionDiv = (props: Props) => {
  const { children, className } = props;
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={cn(`${className}`)}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const LineMotionDiv = (props: Props) => {
  const { children, className } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
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
      transition={{ duration: 1, delay: 1.2 }}
      viewport={{ once: true }}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
};
