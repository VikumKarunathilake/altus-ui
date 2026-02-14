"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  children, 
  className = "", 
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-altus transition-all cursor-pointer border";
  
  const variants = {
    primary: "bg-altus-fg text-altus-bg border-transparent shadow-altus hover:shadow-lg",
    outline: "bg-transparent text-altus-fg border-altus-border hover:bg-altus-muted hover:border-altus-primary",
    ghost: "bg-transparent text-altus-fg border-transparent hover:bg-altus-muted",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
