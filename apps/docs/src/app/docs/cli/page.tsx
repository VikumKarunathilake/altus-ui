"use client";

import { CodeBlock, DocHeader, DocFooter } from "@/components/docs-ui";

export default function CLIPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Command Line Interface" 
        description="Powerful tools to scaffold components and manage your design system infrastructure." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Overview</h2>
        <p className="opacity-70 text-sm leading-relaxed">
          The Altus CLI is designed to automate the repetitive parts of setting up a UI library. 
          It doesn't just install packages; it understands your project structure and scaffolds code that you can own and customize.
        </p>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight">altus init</h2>
          <p className="opacity-70 text-sm">Sets up Altus UI in a fresh or existing project.</p>
          <ul className="list-disc list-inside text-sm opacity-60 space-y-1 ml-2">
            <li>Detects Next.js or Vite environments.</li>
            <li>Configures <code className="bg-altus-muted px-1 rounded">tailwind.config.js</code> with Altus tokens.</li>
            <li>Verifies CSS variable integration.</li>
          </ul>
          <CodeBlock code={`bun x @altus-ui/cli init`} />
        </div>

        <div className="space-y-2 pt-4">
          <h2 className="text-xl font-bold tracking-tight">altus add</h2>
          <p className="opacity-70 text-sm">Scaffolds a component directly into your project. You can choose between two main variants:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-altus-muted/20 border border-altus-border rounded-altus">
              <h4 className="font-bold text-sm mb-1">React Variant</h4>
              <p className="text-xs opacity-50">Full TypeScript components with Framer Motion kinetic animations.</p>
            </div>
            <div className="p-4 bg-altus-muted/20 border border-altus-border rounded-altus">
              <h4 className="font-bold text-sm mb-1">Pure CSS Variant</h4>
              <p className="text-xs opacity-50">Zero-dependency Tailwind classes for maximum performance.</p>
            </div>
          </div>

          <div className="pt-4">
            <CodeBlock code={`# Add a button
bun x @altus-ui/cli add button`} />
          </div>
        </div>
      </section>

      <DocFooter 
        backHref="/docs/installation" 
        backLabel="Installation"
        nextHref="/docs/theming" 
        nextLabel="Theming" 
      />
    </div>
  );
}
