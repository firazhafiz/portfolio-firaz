"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradient-background";
import { GlobeDemo } from "./grid-globe";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import Button from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[12rem] md:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  spareImg,
  titleClassName,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg-text-base z-10">
            {description}
          </div>
          <div className="lg:text-2xl max-w-96 z-10 font-sans font-bold text-lg ">
            {title}
          </div>
        </div>
        {id === 2 && <GlobeDemo />}
        {id === 5 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute top-2 -right-3 lg:-right-2">
            {/* tech stack lists */}
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {["React", "Next.js", "Tailwind", "TypeScript"].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              {["Express", "MongoDB", "Supabase", "Laravel"].map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {["Flutter", "Node.js", "Dart", "Firebase"].map((item) => (
                <span
                  key={item}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0 `}>
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <Button
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
