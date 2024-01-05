"use client";

import React from "react";
import Title from "./title";
import { useSectionInView } from "@/hooks/useSectionInView";
import { FaPaperPlane } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
   const { ref } = useSectionInView("Contact");

   return (
      <m.section
         ref={ref}
         id="contact"
         className="mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)]"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
      >
         <Title>Contact Me</Title>

         <p className="text-gray-700 text-center -mt-5 dark:text-white/80">
            Please contact me directly at{" "}
            <a
               className="underline hover:text-gray-950 transition dark:hover:text-white/40"
               href="mailto:riaz4u72nb@gmail.com"
            >
               riaz4u72nb@gmail.com
            </a>{" "}
            or through this form.
         </p>

         <form
            action={async (formData) => await sendEmail(formData)}
            className="mt-10 flex flex-col dark:text-black font-medium"
         >
            <input
               type="email"
               name="senderEmail"
               required
               maxLength={500}
               placeholder="Your email"
               className="h-14 px-4 rounded-lg border border-black/10 outline-gray-600 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-100 dark:outline-none dark:placeholder:text-black/60"
            />

            <textarea
               placeholder="Your message"
               name="message"
               required
               maxLength={5000}
               className="h-52 my-3 p-4 rounded-lg border border-black/10 resize-y outline-gray-600 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-100 dark:outline-none dark:placeholder:text-black/60"
            />

            <button
               type="submit"
               className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
            >
               Submit{" "}
               <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-focus:translate-x-1 group-focus:-translate-y-1" />
            </button>
         </form>
      </m.section>
   );
};

export default Contact;
