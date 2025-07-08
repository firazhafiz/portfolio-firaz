"use client";

import { HoverEffect } from "./ui/card-hover";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPhp,
  SiFlutter,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { FaDesktop, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { motion } from "motion/react";

const techStackItems = [
  {
    title: "Frontend Development",
    titleIcon: <FaDesktop color="white" size={22} />,
    techs: [
      { icon: <SiHtml5 color="white" size={20} />, name: "HTML" },
      { icon: <SiCss3 color="white" size={20} />, name: "CSS" },
      { icon: <SiJavascript color="white" size={20} />, name: "JavaScript" },
      { icon: <SiReact color="white" size={20} />, name: "React" },
      { icon: <SiNextdotjs color="white" size={20} />, name: "Next.js" },
      { icon: <SiTailwindcss color="white" size={20} />, name: "Tailwind CSS" },
      { icon: <SiTypescript color="white" size={20} />, name: "TypeScript" },
    ],
    link: "#frontend",
    description: "",
  },
  {
    title: "Backend Development",
    titleIcon: <FaServer color="white" size={22} />,
    techs: [
      { icon: <SiNodedotjs color="white" size={20} />, name: "Node.js" },
      { icon: <SiExpress color="white" size={20} />, name: "Express.js" },
      { icon: <SiPrisma color="white" size={20} />, name: "Prisma" },
      { icon: <SiPhp color="white" size={20} />, name: "PHP" },
    ],
    link: "#backend",
    description: "",
  },
  {
    title: "Mobile Development",
    titleIcon: <FaMobileAlt color="white" size={22} />,
    techs: [
      { icon: <SiFlutter color="white" size={20} />, name: "Flutter" },
      { icon: <SiDart color="white" size={20} />, name: "Dart" },
    ],
    link: "#mobile",
    description: "",
  },
  {
    title: "Database",
    titleIcon: <FaDatabase color="white" size={22} />,
    techs: [
      { icon: <SiMysql color="white" size={20} />, name: "MySQL" },
      { icon: <SiPostgresql color="white" size={20} />, name: "PostgreSQL" },
      { icon: <SiMongodb color="white" size={20} />, name: "MongoDB" },
      { icon: <SiSupabase color="white" size={20} />, name: "Supabase" },
      { icon: <SiFirebase color="white" size={20} />, name: "Firebase" },
    ],
    link: "#database",
    description: "",
  },
];

const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto pt-12 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Tech Stack
      </h2>
      <HoverEffect items={techStackItems} />
    </motion.section>
  );
};

export default TechStack;
