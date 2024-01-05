"use client";

import React from "react";
import Title from "./title";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion as m } from "framer-motion";

const fadeInAnimationVariants = {
   initial: {
      opacity: 0,
      y: 100,
   },
   animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.05 * index,
      },
   }),
};

const Skills = () => {
   const { ref } = useSectionInView("Skills");

   return (
      <section
         ref={ref}
         id="skills"
         className="mb-28 max-w-[53rem] scroll-mt-28"
      >
         <Title>My Skills</Title>

         <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData?.map((skill, index) => (
               <m.li
                  className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:text-white/80 dark:bg-white/10"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
               >
                  {skill}
               </m.li>
            ))}
         </ul>
      </section>
   );
};

export default Skills;
