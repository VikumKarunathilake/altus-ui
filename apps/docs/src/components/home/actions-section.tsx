"use client";

import { WithTooltip } from "./shared";

export function ActionsSection({ 
  setIsModalOpen, 
  addToast, 
  currentTheme 
}: { 
  setIsModalOpen: (v: boolean) => void, 
  addToast: (msg: string, pos: any, type: any) => void,
  currentTheme: string
}) {
  return (
    <>
      {/* Modal & Toast Section */}
      <div className="lg:col-span-12 altus-card grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Kinetic Actions</h2>
            <p className="text-sm opacity-60">High-performance dialogs and tactical feedback powered by Framer Motion.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="btn-altus w-full py-4">
            Trigger Perspective Modal
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Tactical Feedback</h3>
          <div className="grid grid-cols-1 gap-3">
            <button onClick={() => addToast("Successfully synchronized with server", "top-center", "success")} className="btn-altus-outline text-xs justify-start px-4">
               <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" /> Trigger Success (Top)
            </button>
            <button onClick={() => addToast("Critical system failure detected", "bottom-center", "error")} className="btn-altus-outline text-xs justify-start px-4">
               <span className="w-2 h-2 rounded-full bg-rose-500 mr-2" /> Trigger Error (Bottom)
            </button>
            <button onClick={() => addToast("New update available for Altus UI", "bottom-right", "info")} className="btn-altus-outline text-xs justify-start px-4">
               <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" /> Trigger Info (Right)
            </button>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="lg:col-span-8 altus-card flex flex-col gap-6">
        <header className="flex justify-between items-center border-b border-altus-border pb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Buttons & Actions</h2>
        </header>
        <div className="flex flex-wrap gap-6 py-12 items-center justify-center bg-altus-muted/20 rounded-altus border border-altus-border/50 relative overflow-hidden">
          <WithTooltip label=".btn-altus"><button className="btn-altus">Primary</button></WithTooltip>
          <WithTooltip label=".btn-altus-outline"><button className="btn-altus-outline">Outline</button></WithTooltip>
          <WithTooltip label=".btn-altus-ghost"><button className="btn-altus-ghost">Ghost</button></WithTooltip>
          <div className="w-[1px] h-8 bg-altus-border mx-2" />
          <WithTooltip label=".btn-altus-icon"><button className="btn-altus-icon"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button></WithTooltip>
          <WithTooltip label=".btn-altus-fab"><button className="btn-altus-fab"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></button></WithTooltip>
        </div>
      </div>

      {/* Active Palette Section */}
      <div className="lg:col-span-4 altus-card flex flex-col justify-between overflow-hidden relative group">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Active Palette</h2>
        <div className="mt-8">
          <p className="text-3xl font-bold capitalize">{currentTheme}</p>
          <p className="text-xs opacity-50 tracking-widest mt-1 uppercase">Persistent Instance</p>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-altus-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </>
  );
}
