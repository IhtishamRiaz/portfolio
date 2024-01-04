"use client";

import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Hero = () => {
   return (
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
         <div className="flex items-center justify-center">
            <div className="relative">
               <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, type: "tween" }}
               >
                  <Image
                     src={
                        "https://avatars.githubusercontent.com/u/116669290?v=4"
                     }
                     alt="Ihtisham"
                     width={192}
                     height={192}
                     quality={95}
                     priority={true}
                     className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-xl block"
                  />
               </m.div>
               <m.span
                  className="absolute bottom-0 right-0 text-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                     duration: 0.7,
                     type: "spring",
                     stiffness: 125,
                     delay: 0.3,
                  }}
               >
                  👋
               </m.span>
            </div>
         </div>

         <m.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <span className="font-bold">Hello, I'm Ihtisham.</span> I'm a{" "}
            <span className="font-bold">frontend developer</span> with{" "}
            <span className="font-bold">1.5 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
         </m.h1>

         <m.div
            className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
         >
            <Link
               href="#contact"
               className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
               Contact me here{" "}
               <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
               href="/CV.pdf"
               download
               className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
            >
               Download CV{" "}
               <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
               href="https://www.linkedin.com/in/ihtisham00/"
               target="_blank"
               className="bg-white text-gray-700 p-4 px-[18px] flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
            >
               <BsLinkedin />
            </a>

            <a
               href="https://github.com/IhtishamRiaz"
               target="_blank"
               className="bg-white text-gray-700 p-4 px-[18px] flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition border border-black/10"
            >
               <FaGithubSquare />
            </a>
         </m.div>
      </section>
   );
};

export default Hero;
