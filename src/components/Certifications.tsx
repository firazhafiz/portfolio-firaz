"use client";

import React, { useState } from "react";
import CardStatic from "./ui/card-static";
import Image from "next/image";
import { motion } from "motion/react";

const certifications = [
  {
    image: "/images/es2.jpg",
    title:
      "Event Series 2 Building Smarter Website: AI Powered Solutions with Google Cloud Integration",
    author: "Google Developer Group on Campus Unesa",
    credentialUrl: "",
  },
  {
    image: "/images/mernwpu.png",
    title: "Mern Stack Course",
    author: "WPU Course",
    credentialUrl: "https://learn.wpucourse.id/certificate/TK1D1IFD",
  },
  {
    image: "/images/companyvisit.jpg",
    title:
      "Company Visit - Exploring Technology and Work Culture in the Digital Industry",
    author: "Google Developer Group on Campus Unesa",
    credentialUrl: "",
  },
  {
    image: "/images/pznhtmlcssjs.jpg",
    title: "HTML, CSS, dan Javascipt : Pemula sampai Mahir",
    author: "Progammer Zaman Now",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-af1b562f-3085-4aba-981e-7260d40d5503/",
  },
  {
    image: "/images/es3.png",
    title:
      "Event Series 3 - Exploring AI and Blockchain for a Smarter Digital Economy",
    author: "Google Developer Group on Campus Unesa",
    credentialUrl: "",
  },
  {
    image: "/images/pznreact.jpg",
    title: "React.js : Pemula sampai Mahir",
    author: "Progammer Zaman Now",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-4fd37fe3-f98e-4054-a7ef-90c608999a87/",
  },
  {
    image: "/images/konaspi.jpg",
    title: "Konvensi Nasional Pendidikan Indonesia 2024",
    author: "Kece Media Unesa",
    credentialUrl: "",
  },
  {
    image: "/images/pzntypescript.jpg",
    title: "Pemrograman TypeScript : Pemula sampai Mahir",
    author: "Progammer Zaman Now",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-9a07da83-6e60-4cd2-aeb6-b4a894adb681/",
  },
  {
    image: "/images/pkkmb.png",
    title: "PKKMB Fakultas Teknik Universitas Negeri Surabaya",
    author: "Fakultas Teknik Unesa",
    credentialUrl: "",
  },
];

const Certifications = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const handleImageClick = (img: string, title: string) => {
    setModalImage(img);
    setModalTitle(title);
    setOpenModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto py-12 px-4"
    >
      <h2 className="text-3xl md:text-4xl mb-10 md:mb-16 font-bold text-center text-white mt-12">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {certifications.map((cert, idx) => (
          <CardStatic key={idx} {...cert} onImageClick={handleImageClick} />
        ))}
      </div>
      {openModal && modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
            <Image
              src={modalImage}
              alt={modalTitle || ""}
              width={800}
              height={600}
              className="rounded-xl object-contain w-full h-auto max-h-[80vh] bg-white"
              draggable={false}
            />
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-20"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Certifications;
