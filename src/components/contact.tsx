"use client";

import React from "react";
import Title from "@/src/components/title";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion as m } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/src/components/submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
   const { ref } = useSectionInView("Contact");

   const formAction = async (formData: FormData) => {
      const { data, error } = await sendEmail(formData);
      if (error) {
         toast.error(error);
         return;
      }

      toast.success("Email sent successfully");
   };

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
               href="mailto:ihtishamriaz.dev@gmail.com"
            >
               ihtishamriaz.dev@gmail.com
            </a>{" "}
            or through this form.
         </p>

         <form
            action={formAction}
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
            <SubmitBtn />
         </form>
      </m.section>
   );
};

export default Contact;
