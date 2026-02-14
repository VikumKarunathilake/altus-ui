"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WithTooltip({ label, children, className = "" }: { label: string, children: ReactNode, className?: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.98 }}
            className="altus-tooltip bottom-full left-1/2 -translate-x-1/2 mb-2"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AccordionItem({ title, children }: { title: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="altus-accordion-item">
      <button className="altus-accordion-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 0.7 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="altus-accordion-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
