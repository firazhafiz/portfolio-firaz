"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-16 px-4 md:px-12 bg-black-100 rounded-xl shadow-lg mt-10"
    >
      <div className="flex-shrink-0 flex justify-center items-center">
        <Image
          src="/images/firaznikol.jpg"
          alt="Firaz's photo"
          width={350}
          height={350}
          className="object-cover rounded-xl border-1 border-blue-300 shadow-md w-80 h-auto md:w-full md:h-full"
          priority
          quality={100}
          sizes="(max-width: 768px) 80vw, 350px"
        />
      </div>
      <div className="text-white max-w-2xl text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-sm md:text-base lg:text-md leading-relaxed text-gray-400">
          As an Informatics Engineering student at Universitas Negeri Surabaya,
          I am a passionate and self-driven developer with a flair for
          full-stack development, specializing in React.js and Node.js. Since
          embarking on my web development journey in 2023, I&apos;ve immersed
          myself in creating intuitive, pixel-perfect interfaces and robust,
          high-performance applications. Now, in my early thirties, I leverage
          cutting-edge tools like Next.js, TypeScript, Tailwind CSS, Laravel,
          and Supabase to craft seamless digital experiences that blend
          technical precision with creative vision.
        </p>
        <p className="text-sm md:text-base lg:text-md leading-relaxed text-gray-400 mt-4">
          Now in my early thirties, I leverage a powerful stack of modern
          technologies including Next.js, TypeScript, Tailwind CSS, Laravel, and
          Supabase to build cutting-edge web applications that push the
          boundaries of innovation. Over the past two years, I&apos;ve evolved
          from a budding developer into a confident creator, taking on
          increasingly ambitious projects that demand both technical rigor and
          creative flair.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
