import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...inputs: string[]) => {
   return twMerge(clsx(inputs));
};

export const validateString = (value: unknown, maxLength: number) => {
   if (!value || typeof value !== "string" || value.length > maxLength) {
      return false
   }

   return true
}