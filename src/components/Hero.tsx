import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import Button from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { ContainerTextFlip } from "./ui/text-flip";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 md:-top-20" fill="white" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100"></div>
      </div>
      <div className="flex justify-center relative my-15 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
            Hello Everyone
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
            words="Exploring the Future, One Idea at a Time"
          />

          <h3 className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-md">
            I&apos;m <span className="font-bold">Firaz Fulvian Hafiz</span>, a
            <ContainerTextFlip
              words={[
                "Fullstack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
            />{" "}
            based in Surabaya, East Java, Indonesia.
          </h3>

          <Link
            href="https://drive.google.com/file/d/15D5W5IB5xEfDpd4nXUiAb0qoGONsN_pz/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              title="Download CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
