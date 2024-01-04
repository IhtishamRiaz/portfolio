"use client";

import React from "react";
import { motion as m } from "framer-motion";

const Divider = () => {
   return (
      <m.div
         className="bg-gray-300 my-24 rounded-full h-16 w-1 hidden sm:block"
         initial={{ y: 100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.125 }}
      ></m.div>
   );
};

export default Divider;
