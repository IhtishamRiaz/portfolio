"use client";

import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useThemeStore } from "@/store/themeStore";
import useStore from "@/hooks/useStore";

const ThemeSwitch = () => {
   const theme = useStore(useThemeStore, (state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);

   return (
      <button
         className="fixed bottom-5 right-5 bg-white bg-opacity-80 backdrop-blur-[0.5rem] w-[3rem] h-[3rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
         onClick={toggleTheme}
      >
         {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
   );
};

export default ThemeSwitch;
