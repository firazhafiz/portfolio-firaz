"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaRegCopy,
} from "react-icons/fa";
import Image from "next/image";

const EMAIL = "firazfulvianhafiz05@gmail.com";
const PHONE = "0823-3267-6848";
const SOCIALS = [
  {
    icon: <FaLinkedin size={22} />,
    href: "https://linkedin.com/in/firazhafiz",
  },
  { icon: <FaGithub size={22} />, href: "https://github.com/firazhafiz" },
  { icon: <FaInstagram size={22} />, href: "https://instagram.com/razhaaf" },
  { icon: <FaWhatsapp size={22} />, href: "https://wa.me/6282332676848" },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <section className="w-full max-w-3xl mx-auto py-20 px-4 flex flex-col items-center relative">
      <button className="mb-6 px-6 py-2 rounded-full bg-white/10 text-white font-semibold shadow transition">
        Let&apos;s Connect
      </button>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
        Get in <span className="text-purple-300">Touch</span>
      </h2>
      <p className="text-neutral-300 text-center max-w-xl mb-10 text-base md:text-lg">
        Ready to collaborate or just want to say hi? Drop me a message or
        connect through any platform below. I&apos;m always open for new
        opportunities, discussions, or a friendly chat!
      </p>
      <div className="absolute left-0 right-0 top-[280px] md:top-[120px] w-full flex justify-center z-0 pointer-events-none select-none opacity-60">
        <Image
          src="/assets/grid.svg"
          alt="Grid"
          width={1500}
          height={800}
          className="object-contain w-full max-w-2xl h-auto"
          draggable={false}
          priority={false}
        />
      </div>
      <div className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mb-10">
          <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 shadow-inner min-w-[260px]">
            <span className="bg-black/60 rounded-full p-2 text-white">
              <FaEnvelope size={20} />
            </span>
            <span className="font-medium text-white text-base select-all">
              {EMAIL}
            </span>
            <button
              onClick={() => handleCopy(EMAIL, "email")}
              className="ml-2 text-neutral-300 hover:text-blue-400 transition"
              aria-label="Copy email"
            >
              <FaRegCopy size={18} />
            </button>
            {copied === "email" && (
              <span className="ml-2 text-xs text-blue-400">Copied!</span>
            )}
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 shadow-inner min-w-[200px]">
            <span className="bg-black/60 rounded-full p-2 text-white">
              <FaPhone size={20} />
            </span>
            <span className="font-medium text-white text-base select-all">
              {PHONE}
            </span>
            <button
              onClick={() => handleCopy(PHONE, "phone")}
              className="ml-2 text-neutral-300 hover:text-blue-400 transition"
              aria-label="Copy phone"
            >
              <FaRegCopy size={18} />
            </button>
            {copied === "phone" && (
              <span className="ml-2 text-xs text-blue-400">Copied!</span>
            )}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white text-center mb-4 mt-6">
          Find me on
        </h3>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 hover:bg-white/20 p-4 text-white shadow transition flex items-center justify-center"
              aria-label="Social link"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
