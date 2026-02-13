import React from "react";

export const CodeBlock = ({ code, language = "html" }: { code: string; language?: string }) => (
  <div className="bg-altus-muted/30 border border-altus-border rounded-altus p-4 my-4 overflow-x-auto">
    <pre className="text-sm font-mono text-altus-fg/80">
      <code>{code}</code>
    </pre>
  </div>
);

export const DocHeader = ({ title, description }: { title: string; description: string }) => (
  <header className="space-y-4 mb-10">
    <h1 className="text-4xl font-black tracking-tight uppercase">{title}</h1>
    <p className="text-xl text-altus-fg/60 leading-relaxed">{description}</p>
    <div className="h-px w-full bg-gradient-to-r from-altus-border to-transparent mt-8" />
  </header>
);

export const Preview = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 border border-altus-border rounded-altus bg-altus-bg relative overflow-hidden flex flex-col items-center justify-center gap-4 ${className}`}>
    <div className="absolute inset-0 bg-altus-muted/10 pattern-grid opacity-20 pointer-events-none" />
    {children}
  </div>
);
