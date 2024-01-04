import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
   return (
      <h2 className="text-3xl text-center capitalize font-medium mb-8">
         {children}
      </h2>
   );
};

export default Title;
