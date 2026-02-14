"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateConstraints = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const contentWidth = carouselRef.current.scrollWidth;
        // The constraints should allow dragging the content so its end aligns with the container end.
        // We add some extra padding (64px) for visual comfort.
        setDragConstraints({ left: -(contentWidth - containerWidth + 64), right: 0 });
      }
    };

    calculateConstraints();
    // Use a small delay to ensure rendering is complete
    const timer = setTimeout(calculateConstraints, 100);
    window.addEventListener("resize", calculateConstraints);
    return () => {
      window.removeEventListener("resize", calculateConstraints);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="lg:col-span-12 altus-card space-y-8 overflow-hidden relative">
      <header className="border-b border-altus-border pb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Kinetic Motion</h2>
          <p className="text-2xl font-bold">Project Showcase</p>
        </div>
        <div className="flex gap-2 items-center text-[10px] font-black uppercase opacity-20">
           <span>Drag to explore</span>
           <div className="flex gap-1 ml-2">
             <div className="w-1.5 h-1.5 rounded-full bg-altus-primary" />
             <div className="w-1.5 h-1.5 rounded-full bg-altus-primary opacity-30" />
           </div>
        </div>
      </header>
      
      <div className="relative -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-altus-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-altus-bg to-transparent z-10 pointer-events-none" />
        
        <div ref={carouselRef} className="overflow-hidden">
          <motion.div 
            className="flex gap-6 lg:gap-8 py-8 cursor-grab active:cursor-grabbing w-max"
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            dragMomentum={true}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <motion.div 
                key={i} 
                className="flex-none w-[75vw] md:w-[400px] space-y-4"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[16/10] bg-altus-muted rounded-3xl border border-altus-border flex items-center justify-center overflow-hidden relative group/item shadow-sm">
                  <div className="absolute inset-0 bg-altus-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  <span className="text-7xl font-black opacity-5 group-hover/item:opacity-20 transition-all duration-700">0{i}</span>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-8 opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-500">
                     <button className="btn-altus !py-3 !text-[10px] w-full">EXPLORE PROJECT</button>
                  </div>
                </div>
                <div className="px-2 flex justify-between items-center">
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg tracking-tight">Kinetic Project {i}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-30">Visual Identity / 2026</p>
                  </div>
                  <span className="altus-badge !text-[8px] !px-2">Case Study</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
