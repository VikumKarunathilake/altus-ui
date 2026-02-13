"use client";

import { CodeBlock, DocHeader, Preview } from "@/components/docs-ui";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-10">
      <DocHeader 
        title="Modals" 
        description="High-performance dialogs with kinetic spring animations." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Interactive Demo</h2>
        <Preview>
          <button className="btn-altus" onClick={() => setIsOpen(true)}>Open Perspective Modal</button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="altus-overlay absolute inset-0 z-10" 
                  onClick={() => setIsOpen(false)} 
                />
                <motion.div 
                  initial={{ opacity: 0, y: "10%", scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: "5%", scale: 0.98 }}
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  className="altus-modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80"
                >
                  <h3 className="font-bold text-lg mb-2">Confirmation</h3>
                  <p className="text-sm opacity-60 mb-6">Are you sure you want to proceed with this action?</p>
                  <div className="flex justify-end gap-2">
                    <button className="btn-altus-outline text-xs py-2 px-3" onClick={() => setIsOpen(false)}>Cancel</button>
                    <button className="btn-altus text-xs py-2 px-3" onClick={() => setIsOpen(false)}>Confirm</button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Preview>
        <CodeBlock code={`<div className="altus-overlay" />
<div className="altus-modal">
  <h3>Title</h3>
  <p>Content goes here...</p>
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Animation Strategy</h2>
        <p className="opacity-70 text-sm">We recommend using <code>framer-motion</code> for the entrance and exit transitions to match the "kinetic" feel of the system.</p>
      </section>
    </div>
  );
}
