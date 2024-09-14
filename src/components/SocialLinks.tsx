import React from "react";
import { socials } from "@/constants/socials";

export const SocialLinks = () => {
  return (
    <div className="flex flex-col space-y-2 pt-5">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="flex items-center space-x-2 text-gray-500 dark:text-[#ECDFCC] hover:text-[#88c24e] dark:hover:text-[#88c24e]"
        >
          <social.icon size={24} /> 
          <span className="text-sm dark:text-[#8e978b] dark:hover:text-[#88c24e]">{social.username}</span>
        </a>
      ))}
    </div>
  );
};
