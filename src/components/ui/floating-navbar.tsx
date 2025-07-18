"use client";
import React, { useState, type JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import { FloatingDock } from "@/components/ui/floating-dock";

const NAV_ITEMS = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
  { name: "Certifications", link: "#certifications", icon: <FaCertificate /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const FloatingNav = ({
  navItems = NAV_ITEMS,
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      {/* Desktop Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-12 py-4 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map(
            (
              navItem: { name: string; link: string; icon?: JSX.Element },
              idx: number
            ) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </a>
            )
          )}
        </motion.div>
      </AnimatePresence>
      {/* Mobile Dock Navbar - kanan bawah */}
      <div className="md:hidden fixed bottom-6 right-4 z-[5000] flex justify-end pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingDock
            items={NAV_ITEMS.map((item) => ({
              title: item.name,
              icon: item.icon,
              href: item.link,
            }))}
            desktopClassName="hidden"
            mobileClassName=""
          />
        </div>
      </div>
    </>
  );
};
