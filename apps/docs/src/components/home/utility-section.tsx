"use client";

import { AccordionItem, WithTooltip } from "./shared";

export function UtilitySection() {
  return (
    <div className="lg:col-span-5 altus-card flex flex-col gap-8">
      <header className="border-b border-altus-border pb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Feedback & Utility</h2>
      </header>
      <div className="space-y-6">
        <div className="flex gap-4 items-center">
          <WithTooltip label=".altus-skeleton"><div className="w-12 h-12 altus-skeleton rounded-full" /></WithTooltip>
          <div className="flex-1 space-y-2">
            <WithTooltip label=".altus-skeleton"><div className="h-4 w-3/4 altus-skeleton" /></WithTooltip>
            <WithTooltip label=".altus-skeleton"><div className="h-3 w-1/2 altus-skeleton" /></WithTooltip>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-altus-border">
          <WithTooltip label=".altus-label"><label className="altus-label !mb-0">System Activity</label></WithTooltip>
          <WithTooltip label=".altus-spinner"><div className="altus-spinner" /></WithTooltip>
        </div>
        <WithTooltip label=".altus-accordion" className="w-full">
          <div className="altus-accordion">
            <AccordionItem title="Methodology">
              <p className="text-sm">Mathematical grid systems for visual balance.</p>
            </AccordionItem>
          </div>
        </WithTooltip>
      </div>
    </div>
  );
}
