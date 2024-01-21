"use client";

import React from "react";
import Title from "./title";
import { motion as m } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

const About = () => {
   const { ref } = useSectionInView("About");

   return (
      <m.section
         ref={ref}
         id="about"
         className="max-w-[45rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.175 }}
      >
         <Title>About me</Title>

         <p className="mb-3">
            Welcome to my corner of the web! I'm a self-taught{" "}
            <span className="font-medium">Frontend Developer</span> with a
            passion for crafting immersive and user-centric digital experiences.
            With <span className="font-medium">1.5 years</span> of hands-on
            experience, I've been on a thrilling journey of transforming designs
            into visually stunning and seamlessly functional web applications
            using the power of <span className="font-medium">React</span>.
         </p>

         <p>
            Currently, I'm on an exciting path, diving deep into the intricacies
            of the <span className="font-medium">MERN</span> stack (
            <span className="font-medium">
               MongoDB, Express.js, React, Node.js
            </span>
            ) and exploring the powerful capabilities of{" "}
            <span className="font-medium">Next.js</span>. This ongoing learning
            process is not just about acquiring new skills; it's about expanding
            my <span className="underline">toolkit</span> to create even more
            dynamic and feature-rich web applications.
         </p>
      </m.section>
   );
};

export default About;
