"use client";

import { motion } from "framer-motion";

export default function ToastsDocs() {
  const codeBlock = (code: string) => (
    <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 font-mono text-sm overflow-x-auto">
      <pre><code>{code}</code></pre>
    </div>
  );

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">Toasts</h1>
        <p className="text-xl text-altus-fg/60">Tactical feedback with built-in queue management and mobile responsiveness.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Usage</h2>
        <p className="opacity-70 text-sm">Altus UI toasts are designed to be used with animation libraries like Framer Motion for kinetic feedback.</p>
        <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 font-mono text-sm">
          <pre><code>{`<div className="altus-toast altus-toast-success">
  <svg className="w-4 h-4" ... />
  Successfully synchronized
  <button className="altus-toast-close">...</button>
</div>`}</code></pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Variants</h2>
        <div className="grid grid-cols-1 gap-4 mt-6">
          <div className="altus-toast altus-toast-success border border-emerald-200">
             <span className="w-4 h-4 rounded-full bg-emerald-500" /> Success Notification
          </div>
          <div className="altus-toast altus-toast-error border border-rose-200">
             <span className="w-4 h-4 rounded-full bg-rose-500" /> Error Notification
          </div>
          <div className="altus-toast altus-toast-info border border-blue-200">
             <span className="w-4 h-4 rounded-full bg-blue-500" /> Information Notification
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Smart Queueing</h2>
        <p className="opacity-70 text-sm">
          To maintain visual clarity, the Altus system limits active toasts to 3 per stack. 
          New notifications automatically push out the oldest entries.
        </p>
      </section>

      <div className="altus-divider" />

      <footer className="flex justify-between items-center">
        <p className="text-xs opacity-40">Last updated: February 14, 2026</p>
        <a href="/docs/installation" className="btn-altus-outline py-2 text-[10px] tracking-widest">← BACK: INSTALLATION</a>
      </footer>
    </div>
  );
}
