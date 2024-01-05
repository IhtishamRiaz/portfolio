"use client";

import React from "react";
import Title from "@/src/components/title";
import { projectsData } from "@/lib/data";
import Project from "@/src/components/project";
import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
   const { ref } = useSectionInView("Projects", 0.5);

   return (
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
         <Title>My Projects</Title>

         <div>
            {projectsData.map((project, index) => (
               <Project key={index} {...project} />
            ))}
         </div>
      </section>
   );
};

export default Projects;
