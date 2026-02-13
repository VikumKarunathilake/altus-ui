"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-altus-bg text-altus-fg flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-altus-border p-6 md:sticky md:top-0 md:h-screen overflow-y-auto">
        <div className="flex items-center gap-3 mb-10">
          <img src="/logo.png" alt="Altus Logo" className="altus-logo w-6" />
          <Link href="/" className="font-bold tracking-tighter text-lg">ALTUS</Link>
        </div>

        <nav className="space-y-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4">Getting Started</h4>
            <ul className="space-y-2">
              <li><Link href="/docs/installation" className="text-sm font-medium hover:text-altus-primary transition-colors">Installation</Link></li>
              <li><Link href="/docs/theming" className="text-sm font-medium hover:text-altus-primary transition-colors">Theming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4">Components</h4>
            <ul className="space-y-2">
              <li><Link href="/docs/buttons" className="text-sm font-medium hover:text-altus-primary transition-colors">Buttons</Link></li>
              <li><Link href="/docs/inputs" className="text-sm font-medium hover:text-altus-primary transition-colors">Inputs & Forms</Link></li>
              <li><Link href="/docs/cards" className="text-sm font-medium hover:text-altus-primary transition-colors">Cards & Layout</Link></li>
              <li><Link href="/docs/modals" className="text-sm font-medium hover:text-altus-primary transition-colors">Modals</Link></li>
              <li><Link href="/docs/toasts" className="text-sm font-medium hover:text-altus-primary transition-colors">Toasts</Link></li>
              <li><Link href="/docs/accordion" className="text-sm font-medium hover:text-altus-primary transition-colors">Accordion</Link></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-16 lg:p-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
