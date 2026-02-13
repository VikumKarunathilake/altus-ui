"use client";

import { CodeBlock, DocHeader, Preview } from "@/components/docs-ui";

export default function ButtonsPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Buttons" 
        description="Interactive elements with micro-interactions and professional states." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Variants</h2>
        <Preview>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="btn-altus">Primary Action</button>
            <button className="btn-altus-outline">Secondary</button>
            <button className="btn-altus-ghost">Ghost</button>
          </div>
        </Preview>
        <CodeBlock code={`<button className="btn-altus">Primary Action</button>
<button className="btn-altus-outline">Secondary</button>
<button className="btn-altus-ghost">Ghost</button>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Icon Buttons</h2>
        <Preview>
          <div className="flex gap-4">
            <button className="btn-altus-icon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </button>
            <button className="btn-altus-fab">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </button>
          </div>
        </Preview>
        <CodeBlock code={`// Standard Icon Button
<button className="btn-altus-icon">
  <Icon />
</button>

// Floating Action Button
<button className="btn-altus-fab">
  <Icon />
</button>`} />
      </section>
    </div>
  );
}
