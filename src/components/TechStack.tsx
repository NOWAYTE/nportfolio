import React from "react";
import { twMerge } from "tailwind-merge";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaDocker, FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel, SiTailwindcss, SiJavascript, SiSanity, SiArduino } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { DiRasberryPi } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiGnubash } from "react-icons/si";

export const TechStack = () => {
  const stack = [
    {
      title: "React",
      icon: <FaReact />,
      classname: "text-blue-600",
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript />,
      classname: "text-blue-500",
    },
    {
      title: "Next.js",
      icon: <TbBrandNextjs />,
      classname: "text-black",
    },
    {
      title: "Vercel",
      icon: <SiVercel />,
      classname: "text-black",
    },
    {
      title: "TailwindCSS",
      icon: <SiTailwindcss />,
      classname: "text-blue-400",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
      classname: "text-yellow-500",
    },
    {
      title: "Python",
      icon: <FaPython />,
      classname: "text-blue-500",
    },
    {
      title: "HTML5",
      icon: <FaHtml5 />,
      classname: "text-orange-500",
    },
    {
      title: "CSS3",
      icon: <FaCss3Alt />,
      classname: "text-blue-600",
    },
    {
      title: "Docker",
      icon: <FaDocker />,
      classname: "text-blue-400",
    },
    {
      title: "Bash",
      icon: <SiGnubash />,
      classname: "text-green-400",
    },
    {
      title: "VS Code",
      icon: <VscVscodeInsiders />,
      classname: "text-blue-600",
    },
    {
      title: "Sanity",
      icon: <SiSanity />,
      classname: "text-gray-700",
    },
    {
      title: "Firebase",
      icon: <RiFirebaseFill />,
      classname: "text-yellow-500",
    },
    {
      title: "Arduino",
      icon: <SiArduino />,
      classname: "text-red-600",
    },
    {
      title: "Raspberry Pi",
      icon: <DiRasberryPi />,
      classname: "text-red-600",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      classname: "text-gray-800",
    },
    {
      title: "Git",
      icon: <FaGitAlt />,
      classname: "text-orange-500",
    },
  ];

  return (
    <div className="container mx-auto px-8">
      <h1 className="font-black text-lg md:text-3xl lg:text-4xl mt-20 mb-4 dark:text-[#e7e5d5] sm:pl-20 md:pl-0">
        <span className="text-4xl pr-3">✨</span>
        Tech Stack
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 dark:text-[#7a8377]">
        {stack.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center">
            <div className={twMerge("flex items-center justify-center w-10 h-10 mb-2", item.classname)}>
              {React.cloneElement(item.icon, { size: 30 })}
            </div>
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};