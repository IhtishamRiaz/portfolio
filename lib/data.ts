import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import shareIt from "@/public/share-it.png";
import webistech from "@/public/webistech.png";

export const links = [
   {
      name: "Home",
      url: "#home",
   },
   {
      name: "About",
      url: "#about",
   },
   {
      name: "Projects",
      url: "#projects",
   },
   {
      name: "Skills",
      url: "#skills",
   },
   {
      name: "Experience",
      url: "#experience",
   },
   {
      name: "Contact",
      url: "#contact",
   },
] as const;

export const experiencesData = [
   {
      title: "Matriculation",
      location: "Azadi Army Public School & College",
      description:
         "I did my matriculation in Computer Science from Azadi Army Public School & College.",
      icon: React.createElement(LuGraduationCap),
      date: "2021",
   },
   {
      title: "Intermediate in Computer Science",
      location: "Azadi Army Public School & College",
      description:
         "I went to Azadi Army Public School & College for my Intermediate in Computer Science, during which I started learning web development.",
      icon: React.createElement(LuGraduationCap),
      date: "2021 - 2023",
   },
   {
      title: "Frontend Developer",
      location: "Sargodha, PK",
      description:
         "During my intermediate studies, I secured a part-time position as a Frontend Developer at TheZoq, where I Collaborated with a laravel developer and played a pivotal role in shaping the frontend aspects of various projects.",
      icon: React.createElement(CgWorkAlt),
      date: "2022 - present",
   },
] as const;

export const projectsData = [
   {
      title: "Share it",
      description:
         "ShareIt is a secure file-sharing web app, allowing users to effortlessly upload files to the cloud, set passwords, and share via links or email.",
      tags: ["React", "Next.js", "Firebase", "Tailwind", "Clerk"],
      imageUrl: shareIt,
      link: "https://share-it-ir.vercel.app/",
   },
   {
      title: "Webistech",
      description:
         "Developed a online learning platform for a web development institution. Implemented secure user registration and login functionalities, enabling students to enroll in specific courses tailored for their learning journey.",
      tags: ["React", "SCSS", "MUI"],
      imageUrl: webistech,
      link: "https://webistech.com/",
   },
] as const;

export const skillsData = [
   "HTML",
   "CSS",
   "JavaScript",
   "TypeScript",
   "React",
   "Next.js",
   "Node.js",
   "Git",
   "Tailwind",
   "MongoDB",
   "Express",
   "Framer Motion",
   "Zustand",
] as const;
