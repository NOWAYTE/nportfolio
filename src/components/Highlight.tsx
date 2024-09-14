import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-[#88c24e] px-1 py-0.5 dark:bg-[#88c24e] dark:text-black font-bold", className)}>
      {children}
    </span>
  );
};
