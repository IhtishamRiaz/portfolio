import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalStore } from "@/store/globalStore";
import { SectionNameType } from "@/lib/types";

export const useSectionInView = (sectionName: SectionNameType, threshold = 0.75) => {
   const setActiveSection = useGlobalStore((state) => state.setActiveSection);

   const lastClickTime = useGlobalStore((state) => state.lastClickTime);

   const { ref, inView } = useInView({ threshold });

   useEffect(() => {
      if (inView && Date.now() - lastClickTime > 500) {
         setActiveSection(sectionName);
      }
   }, [inView, setActiveSection, lastClickTime, sectionName]);

   return { ref }
}

