"use client";

import React from "react";
import { motion as m } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/store/globalStore";
import { SectionNameType } from "@/lib/types";

const Header = () => {
   const activeSection = useGlobalStore((state) => state.activeSection);
   const setActiveSection = useGlobalStore((state) => state.setActiveSection);
   const setLastClickTime = useGlobalStore((state) => state.setLastClickTime);

   const handleLinkClick = (name: SectionNameType) => {
      setActiveSection(name);
      setLastClickTime(Date.now());
   };

   return (
      <header className="z-[9999] relative">
         <m.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full sm:w-[36rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
         ></m.div>

         <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
               {links.map(({ url, name }) => (
                  <m.li
                     className="relative h-3/4 flex items-center justify-center"
                     key={url}
                     initial={{ y: -100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                  >
                     <Link
                        className={cn(
                           "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200",
                           activeSection === name
                              ? "text-gray-950 dark:text-gray-200"
                              : ""
                        )}
                        href={url}
                        onClick={() => handleLinkClick(name)}
                     >
                        {name}

                        {name === activeSection && (
                           <m.span
                              className="absolute inset-0 bg-gray-100 rounded-full -z-10 dark:bg-gray-800"
                              layoutId="LinkBackground"
                              transition={{
                                 type: "spring",
                                 stiffness: 380,
                                 damping: 30,
                              }}
                           />
                        )}
                     </Link>
                  </m.li>
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
