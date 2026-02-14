"use client";

import { CodeBlock, DocHeader, DocFooter } from "@/components/docs-ui";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Installation" 
        description="Start building slick, professional interfaces with Altus UI." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-altus-primary">Quick Start (Recommended)</h2>
        <p className="opacity-70 text-sm">The fastest way to get started is using the Altus CLI. It handles framework detection, dependency installation, and Tailwind configuration automatically.</p>
        <CodeBlock code={`bun x @altus-ui/cli init`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Manual Installation</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-black uppercase tracking-widest opacity-40">1. Install core package</h3>
            <CodeBlock code={`bun add @altus-ui/core`} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-black uppercase tracking-widest opacity-40">2. Add to Tailwind Config</h3>
            <p className="opacity-70 text-sm">Include the Altus plugin in your <code className="bg-altus-muted px-1.5 py-0.5 rounded">tailwind.config.js</code>.</p>
            <CodeBlock code={`// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require("@altus-ui/core"),
  ],
}`} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Next Steps</h2>
        <p className="opacity-70 text-sm">Once installed, you can start adding components directly to your codebase.</p>
        <CodeBlock code={`bun x @altus-ui/cli add button`} />
      </section>

      <DocFooter 
        nextHref="/docs/cli" 
        nextLabel="Command Line Interface" 
      />
    </div>
  );
}
