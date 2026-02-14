"use client";

import { WithTooltip } from "./shared";

export function FormsSection() {
  return (
    <div className="lg:col-span-7 altus-card flex flex-col gap-12">
      <header className="border-b border-altus-border pb-6 flex justify-between items-end">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Text And Forms</h2>
          <p className="text-2xl font-bold">Input Precision</p>
        </div>
        <div className="flex gap-2 mb-1">
          <span className="altus-badge">Verified</span>
          <span className="altus-badge border-altus-primary">Beta</span>
        </div>
      </header>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <WithTooltip label=".altus-label"><label className="altus-label">Standard Input</label></WithTooltip>
            <WithTooltip label=".altus-input"><input type="text" className="altus-input" placeholder="Type something..." /></WithTooltip>
          </div>
          <div className="space-y-2">
            <WithTooltip label=".altus-label"><label className="altus-label">Custom Select</label></WithTooltip>
            <WithTooltip label=".altus-select">
              <select className="altus-select">
                <option>Strategy</option>
                <option>Design</option>
              </select>
            </WithTooltip>
          </div>
        </div>
        <WithTooltip label=".altus-input-group">
          <div className="altus-input-group">
            <WithTooltip label=".altus-label"><label className="altus-label">Username</label></WithTooltip>
            <WithTooltip label=".altus-input"><input type="text" className="altus-input" placeholder="johndoe" /></WithTooltip>
            <WithTooltip label=".altus-input-hint"><span className="altus-input-hint">Unique identifier.</span></WithTooltip>
          </div>
        </WithTooltip>
      </div>
    </div>
  );
}
