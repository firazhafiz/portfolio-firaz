"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCardDemo() {
  const cards = [
    {
      title: "Diary Food",
      description:
        "A website used as inspiration for finding various local and international recipes for food and drinks.",
      details: [
        "Developed using Next.js for the frontend, Express.js for the backend, and Prisma as the ORM.",
        "Integrated with AI to enhance user experience with more accurate recipe searches.",
        "Supported by real-time interactive technology and equipped with features such as recipe uploads, bookmarks, comments, and recipe sharing.",
      ],
      image: "../assets/diaryfood.png",
      imageAlt: "thumbnail",
      actions: [
        {
          type: "link",
          label: "Check this →",
          className: "px-4 py-2 rounded-xl text-xs font-normal dark:text-white",
        },
        {
          type: "button",
          label: "Github",
          href: "https://github.com/firazhafiz/FE-DiaryFood",

          className:
            "px-4 py-2 rounded-full bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer",
        },
      ],
    },
    {
      title: "Diary Food",
      description:
        "A website used as inspiration for finding various local and international recipes for food and drinks.",
      details: [
        "Developed using Next.js for the frontend, Express.js for the backend, and Prisma as the ORM.",
        "Integrated with AI to enhance user experience with more accurate recipe searches.",
        "Supported by real-time interactive technology and equipped with features such as recipe uploads, bookmarks, comments, and recipe sharing.",
      ],
      image: "../assets/diaryfood.png",
      imageAlt: "thumbnail",
      actions: [
        {
          type: "link",
          label: "Check this →",
          className: "px-4 py-2 rounded-xl text-xs font-normal dark:text-white",
        },
        {
          type: "button",
          label: "Github",
          className:
            "px-4 py-2 rounded-full bg-black dark:bg-white dark:text-black cursor-pointer text-white text-xs font-bold",
        },
      ],
    },
    {
      title: "Diary Food",
      description:
        "A website used as inspiration for finding various local and international recipes for food and drinks.",
      details: [
        "Developed using Next.js for the frontend, Express.js for the backend, and Prisma as the ORM.",
        "Integrated with AI to enhance user experience with more accurate recipe searches.",
        "Supported by real-time interactive technology and equipped with features such as recipe uploads, bookmarks, comments, and recipe sharing.",
      ],
      image: "../assets/diaryfood.png",
      imageAlt: "thumbnail",
      actions: [
        {
          type: "link",
          label: "Check this →",
          className: "px-4 py-2 rounded-xl text-xs font-normal dark:text-white",
        },
        {
          type: "button",
          label: "Github",
          className:
            "px-4 py-2 cursor-pointer rounded-full bg-black dark:bg-white dark:text-black text-white text-xs font-bold",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mt-12">
        Recent Projects
      </h2>
      <div className="px-4 sm:px-6 lg:px-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6 lg:gap-8 justify-center">
        {cards.map((card, idx) => (
          <CardContainer className="inter-var" key={idx}>
            <CardBody
              className="border border-transparent dark:border-white/[0.2] rounded-xl p-6 w-full max-w-md flex flex-col "
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="absolute left-0 right-0 bottom-0  w-full flex justify-center z-10 pointer-events-none select-none">
                <Image
                  src="/assets/grid.svg"
                  alt="Grid"
                  width={600}
                  height={400}
                  className="opacity-100 object-contain"
                  draggable={false}
                />
              </div>
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-100 dark:text-white mb-4"
              >
                {card.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mb-4">
                <img
                  src={card.image}
                  height="1000"
                  width="1000"
                  className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.imageAlt}
                />
              </CardItem>
              <CardItem
                as="div"
                translateZ="60"
                className="text-neutral-300 text-sm mb-3 dark:text-neutral-300"
              >
                {card.description}
              </CardItem>
              {card.details && card.details.length > 0 && (
                <CardItem
                  as="ul"
                  translateZ={60}
                  className="list-disc pl-5 text-neutral-300 dark:text-neutral-300 text-xs mb-6 space-y-2"
                >
                  {card.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </CardItem>
              )}
              <div className="flex justify-between items-center mt-auto">
                {card.actions.map((action, aidx) =>
                  action.href ? (
                    <CardItem
                      key={aidx}
                      translateZ={20}
                      as="a"
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={action.className}
                    >
                      {action.label}
                    </CardItem>
                  ) : (
                    <CardItem
                      key={aidx}
                      translateZ={20}
                      as="button"
                      className={action.className}
                    >
                      {action.label}
                    </CardItem>
                  )
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
