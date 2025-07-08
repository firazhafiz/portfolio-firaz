"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal, ModalBody } from "./animate.modal";

interface CardStaticProps {
  image: string;
  title: string;
  author: string;
  credentialUrl?: string;
  onImageClick?: (img: string, title: string) => void;
}

const CardStatic = ({
  image,
  title,
  author,
  credentialUrl,
  onImageClick,
}: CardStaticProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="cursor-pointer relative rounded-2xl hover:shadow-lg hover:shadow-slate-400/20 bg-neutral-900 dark:bg-black border border-neutral-800 dark:border-white/[0.1] shadow-md p-6 flex flex-col w-full max-w-xs mx-auto h-full overflow-hidden transition-shadow duration-200 group"
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
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
      <div className="w-full flex justify-center mb-4 z-20">
        <Image
          src={image}
          alt={title}
          width={340}
          height={180}
          className="rounded-lg object-cover w-full h-36 bg-white cursor-pointer"
          onClick={() => onImageClick?.(image, title)}
          draggable={false}
        />
      </div>
      <h3 className="font-bold text-base text-white mb-2 leading-snug z-20">
        {title}
      </h3>
      <div className="text-neutral-300 text-sm mb-10 z-20">{author}</div>
      <div className="mt-auto z-20">
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-xs font-semibold hover:from-indigo-600 hover:to-blue-700 transition-colors duration-200 shadow-sm"
          >
            Credential
          </a>
        )}
      </div>
      {/* Modal untuk gambar sertifikat full */}
      {openModal && (
        <Modal>
          <ModalBody className="flex items-center justify-center bg-transparent shadow-none">
            <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
              <Image
                src={image}
                alt={title}
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
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default CardStatic;
