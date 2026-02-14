"use client";

import { motion } from "framer-motion";
import { WithTooltip } from "./shared";

export function MetricsSection() {
  return (
    <div className="lg:col-span-12 altus-card space-y-8">
      <header className="border-b border-altus-border pb-6 flex justify-between items-end">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2">System Metrics</h2>
          <p className="text-2xl font-bold italic">Real-time Status</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Linear Progress */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Load Distribution</h3>
          {[
            { label: "Core Processing", value: 82 },
            { label: "Asset Pipeline", value: 45 },
            { label: "Memory Buffer", value: 68 }
          ].map((p, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold opacity-40 uppercase">
                <span>{p.label}</span>
                <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 + (i * 0.1) }}>
                  {p.value}%
                </motion.span>
              </div>
              <WithTooltip label=".altus-progress">
                <div className="altus-progress">
                  <motion.div 
                    className="altus-progress-bar" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  />
                </div>
              </WithTooltip>
            </div>
          ))}
        </div>

        {/* Progress Circles */}
        <div className="flex items-center justify-around bg-altus-muted/10 py-8 rounded-altus border border-altus-border/50">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Efficiency</h3>
            <WithTooltip label=".altus-progress-circle">
              <motion.div 
                className="altus-progress-circle !w-20 !h-20"
                initial={{ "--progress": "0deg" } as any}
                whileInView={{ "--progress": "360deg" } as any}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}>
                  <svg className="w-6 h-6 text-altus-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </motion.div>
              </motion.div>
            </WithTooltip>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Uptime</h3>
            <WithTooltip label=".altus-progress-circle">
              <motion.div 
                className="altus-progress-circle !w-20 !h-20"
                initial={{ "--progress": "0deg" } as any}
                whileInView={{ "--progress": "280deg" } as any}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <span className="text-[10px] font-black italic">99.9%</span>
              </motion.div>
            </WithTooltip>
          </div>
        </div>

        {/* System Logic */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">System Logic</h3>
          <div className="bg-altus-muted/10 p-6 rounded-altus border border-altus-border/50 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold opacity-60">Breadcrumbs</span>
              <WithTooltip label=".altus-breadcrumbs">
                <ul className="altus-breadcrumbs scale-90 origin-right">
                  <li className="altus-breadcrumb-item">Root</li>
                  <li className="altus-breadcrumb-item">Metrics</li>
                </ul>
              </WithTooltip>
            </div>
            <div className="h-px w-full bg-altus-border/30" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                 <span className="text-[10px] font-black uppercase opacity-30">Active Node</span>
                 <WithTooltip label=".altus-badge">
                   <span className="altus-badge !text-[8px] !px-2">Node_Alpha</span>
                 </WithTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
