"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
    techs?: { icon: React.ReactNode; name: string }[];
    titleIcon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-6 sm:py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200/50 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div
              className="rounded-2xl h-full w-full overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              {/* Grid SVG di atas background, di bawah konten utama */}
              <div className="absolute left-0 right-0 bottom-0 w-full flex justify-center z-10 pointer-events-none select-none">
                <Image
                  src="/assets/grid.svg"
                  alt="Grid"
                  width={400}
                  height={200}
                  className="opacity-100 object-contain"
                  draggable={false}
                />
              </div>
              {/* Konten utama card */}
              <div className="flex flex-col items-center h-[160px] sm:h-[220px] w-full p-4 sm:p-8 z-20 relative">
                <div className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg px-3 py-2 mb-4 sm:px-4 sm:py-2 sm:mb-6 ">
                  {item.titleIcon && <span>{item.titleIcon}</span>}
                  <h4 className="text-zinc-100 font-bold text-xs text-center sm:text-lg">
                    {item.title}
                  </h4>
                </div>
                {item.techs && (
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full">
                    {item.techs.map((t, i) => (
                      <span key={i} className="flex items-center gap-2">
                        {t.icon}
                        <span className="text-zinc-100 text-xs sm:text-sm font-medium">
                          {t.name}
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
