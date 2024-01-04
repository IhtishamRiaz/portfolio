import React from "react";
import Title from "@/src/components/title";
import { projectsData } from "@/lib/data";
import Project from "@/src/components/project";

const Projects = () => {
   return (
      <section>
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
