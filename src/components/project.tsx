"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion as m, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
   title,
   description,
   tags,
   imageUrl,
   link,
}: ProjectProps) => {
   const ref = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
   });

   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

   return (
      <m.div
         ref={ref}
         style={{ opacity: scaleProgress, scale: opacityProgress }}
         className="group mb-3 sm:mb-8 last:mb-0"
      >
         <section className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:group-even:pl-8 sm:pr-8 hover:bg-gray-200 transition rounded-md dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full sm:group-even:ml-[18rem]">
               <div className="flex gap-2">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <a
                     href={link}
                     target="_blank"
                     className="text-slate-800 dark:text-white text-xl opacity-0 group-hover:opacity-100 transition-all"
                  >
                     <FiExternalLink />
                  </a>
               </div>

               <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {description}
               </p>

               <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                  {tags?.map((tag, index) => (
                     <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                        key={index}
                     >
                        {tag}
                     </li>
                  ))}
               </ul>
            </div>

            <Image
               src={imageUrl}
               alt={title}
               quality={95}
               className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition hidden sm:block
               group-hover:-translate-x-3 
               group-hover:translate-y-3 
               group-hover:-rotate-2 
               group-hover:scale-[1.04]

               group-even:right-[initial] 
               group-even:-left-40 
               group-even:group-hover:translate-x-3
               group-even:group-hover:rotate-2 
            "
            />
         </section>
      </m.div>
   );
};

export default Project;
