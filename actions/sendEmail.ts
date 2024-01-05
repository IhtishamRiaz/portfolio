"use server";

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
   const senderEmail = formData.get("senderEmail");
   const message = formData.get("message");

   if (!validateString(senderEmail, 500)) {
      return {
         error: "Invalid email"
      }
   }
   if (!validateString(message, 5000)) {
      return {
         error: "Invalid email"
      }
   }

   try {
      await resend.emails.send({
         from: "Contact From <onboarding@resend.dev>",
         to: "riaz4u72nb+github@gmail.com",
         subject: "Portfolio Contact",
         reply_to: senderEmail as string,
         text: message as string
      })
   } catch (error) {
      console.log(error);
   }

};