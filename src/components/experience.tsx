"use client";

import React from "react";
import Title from "./title";
import { useSectionInView } from "@/hooks/useSectionInView";
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useStore from "@/hooks/useStore";
import { useThemeStore } from "@/store/themeStore";

const Experience = () => {
   const { ref } = useSectionInView("Experience");
   const theme = useStore(useThemeStore, (state) => state.theme);

   return (
      <section ref={ref} id="experience" className="mb-28 scroll-mt-28">
         <Title>My Experience</Title>

         <VerticalTimeline lineColor="">
            {experiencesData?.map(
               ({ title, location, date, description, icon }, index) => (
                  <React.Fragment key={index}>
                     <VerticalTimelineElement
                        id={`experience-${index}`}
                        contentStyle={{
                           background:
                              theme === "light"
                                 ? "#f3f4f6"
                                 : "rgba(255,255,255,0.05)",
                           boxShadow: "none",
                           border: "1px solid rgba(0,0,0,0.05)",
                           textAlign: "left",
                           padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                           borderRight:
                              theme === "light"
                                 ? "0.4rem solid  #9ca3af"
                                 : "0.4rem solid  rgba(255,255,255,0.5)",
                        }}
                        date={date}
                        icon={icon}
                        iconStyle={{
                           background:
                              theme === "light"
                                 ? "white"
                                 : "rgba(255,255,255,0.15)",
                           fontSize: "1.5rem",
                        }}
                     >
                        <h3 className="capitalize font-semibold">{title}</h3>
                        <p className="!mt-0 font-normal">{location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                           {description}
                        </p>
                     </VerticalTimelineElement>
                  </React.Fragment>
               )
            )}
         </VerticalTimeline>
      </section>
   );
};

export default Experience;
