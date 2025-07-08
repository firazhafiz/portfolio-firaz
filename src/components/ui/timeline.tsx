"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  time?: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setHeight] = useState(0);
  const [firstCircleTop, setFirstCircleTop] = useState(0);
  const [lastCirclePosition, setLastCirclePosition] = useState(0);

  const updateDimensions = () => {
    if (ref.current && containerRef.current) {
      const containerRect = ref.current.getBoundingClientRect();
      setHeight(containerRect.height);

      const items = ref.current.querySelectorAll(".timeline-item");
      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      if (firstItem && lastItem) {
        const firstCircle = firstItem.querySelector(".circle-container");
        const lastCircle = lastItem.querySelector(".circle-container");

        if (firstCircle && lastCircle) {
          const firstCircleRect = firstCircle.getBoundingClientRect();
          const lastCircleRect = lastCircle.getBoundingClientRect();

          // Calculate positions relative to the container
          const containerTop = containerRect.top;
          const firstTop =
            firstCircleRect.top - containerTop + firstCircleRect.height / 2;
          const lastTop =
            lastCircleRect.top - containerTop + lastCircleRect.height / 2;

          setFirstCircleTop(firstTop);
          setLastCirclePosition(lastTop - firstTop);
        }
      }
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateDimensions); // Update on scroll for sticky elements
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateDimensions);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end end"], // Start when timeline is halfway in viewport, end at bottom
  });

  // Height transform from first circle to last circle
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lastCirclePosition]
  );

  // Opacity transform with fade-in only, stays visible at the end
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-6xl mx-auto pb-20 pt-14 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl font-bold text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-300 text-sm md:text-sm mt-2 max-w-lg">
          I&apos;ve been immersed as a student developer at State University of
          Surabaya for nearly 3 years, and these are some of the experiences I
          have undertaken.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10 timeline-item"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center circle-container">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="gap-y-2 flex flex-col">
                <h3 className="hidden md:block text-lg md:pl-20 md:text-3xl font-bold text-neutral-400 dark:text-neutral-400">
                  {item.title}
                </h3>
                <h3 className="hidden md:block text-base md:pl-20 md:text-xl font-bold text-neutral-400 dark:text-neutral-400">
                  {item.time}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-1 text-left font-bold text-neutral-400 dark:text-neutral-400">
                {item.title}
              </h3>
              <h3 className="md:hidden block text-base mb-4 text-left font-bold text-neutral-400 dark:text-neutral-400">
                {item.time}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: lastCirclePosition + "px", // Match line container to distance between circles
            top: firstCircleTop + "px", // Start at first circle
          }}
          className="absolute left-8 md:left-8 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              position: "absolute",
              top: 0,
            }}
            className="w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
