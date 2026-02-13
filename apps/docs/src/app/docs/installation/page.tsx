"use client";

import { motion } from "framer-motion";

export default function InstallationPage() {
  const codeBlock = (code: string) => (
    <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 font-mono text-sm overflow-x-auto">
      <pre><code>{code}</code></pre>
    </div>
  );

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight uppercase">Installation</h1>
        <p className="text-xl text-altus-fg/60">Start building slick, professional interfaces with Altus UI.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">1. Install Packages</h2>
        <p className="opacity-70 text-sm">Altus UI is split into a core Tailwind plugin and a CLI for rapid scaffolding.</p>
        {codeBlock(`bun add @altus-ui/core
bun add -d @altus-ui/cli`)}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">2. Configure Tailwind</h2>
        <p className="opacity-70 text-sm">Add the plugin to your <code className="bg-altus-muted px-1.5 py-0.5 rounded">tailwind.config.js</code> or CSS file.</p>
        <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 font-mono text-sm">
          <p className="text-xs opacity-50 mb-2">// globals.css (Tailwind v4)</p>
          <pre><code>{`@import "tailwindcss";
@plugin "@altus-ui/core";`}</code></pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">3. Initialize via CLI</h2>
        <p className="opacity-70 text-sm">Coming soon: Use the CLI to scaffold themes and component structures.</p>
        {codeBlock("bun x altus init")}
      </section>

      <div className="altus-divider" />

      <footer className="flex justify-between items-center">
        <p className="text-xs opacity-40">Last updated: February 14, 2026</p>
        <a href="/docs/theming" className="btn-altus py-2 text-[10px] tracking-widest">NEXT: THEMING →</a>
      </footer>
    </div>
  );
}
