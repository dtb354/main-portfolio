"use client";

import React from "react";
import Image from "next/image";
import { LuCode } from "react-icons/lu";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

type TechIconMeta = {
  label: string;
  icon: IconType;
  badgeClassName: string;
};

const BASE_BADGE_CLASS =
  "inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full";

const TECH_ICON_MAP: Record<string, TechIconMeta> = {
  php: {
    label: "PHP",
    icon: SiPhp,
    badgeClassName: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  },
  javascript: {
    label: "JavaScript",
    icon: SiJavascript,
    badgeClassName: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  mysql: {
    label: "MySQL",
    icon: SiMysql,
    badgeClassName: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  },
  "html/css": {
    label: "HTML/CSS",
    icon: SiHtml5,
    badgeClassName: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  html: {
    label: "HTML",
    icon: SiHtml5,
    badgeClassName: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  css: {
    label: "CSS",
    icon: SiCss3,
    badgeClassName: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  },
  tailwindcss: {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    badgeClassName: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  },
  laravel: {
    label: "Laravel",
    icon: SiLaravel,
    badgeClassName: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  },
  "laravel cloud": {
    label: "Laravel Cloud",
    icon: SiLaravel,
    badgeClassName: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
  "jwt web tokens": {
    label: "JWT",
    icon: SiJsonwebtokens,
    badgeClassName: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  },
  openai: {
    label: "OpenAI",
    icon: SiOpenai,
    badgeClassName: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  },
};

function getTechIconMeta(technology: string): TechIconMeta {
  const normalizedTechnology = technology.trim().toLowerCase();
  return (
    TECH_ICON_MAP[normalizedTechnology] ?? {
      label: technology,
      icon: LuCode,
      badgeClassName: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
    }
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "NutriCoach",
    description: "Developed an AI chatbot to assist in personalised dietary and nutritious guidance by using AI Context Engineering and the OpenAI API",
    image: "/project-images/NutriCoach.png",
    technologies: ["PHP", "Javascript", "MySQL", "HTML/CSS", "TailwindCSS"],
    link: "https://project.cmi.hr.nl/2025_2026/tle1_t1/tle1_eindmarkt/healthy-app/login.php",
    github: "https://github.com/dtb354/NutriCoach",
  },
  {
    id: 2,
    title: "Pokemon TCG Forum",
    description: "A full-stack social media CRUD web application to discuss favorite Pokémon cards/deck strategies and " +
        "appreciating the artwork using database design and following OWASP regulations and DTAP process.",
    image: "/project-images/PokemonTCG.png",
    technologies: ["Laravel", "laravel Cloud", "HTML/CSS", "TailwindCSS"],
    github: "https://github.com/dtb354/pokemon-decks",
  },
  {
    id: 3,
    title: "NM Klikker",
    description: "A web clicker game built using Laravel to bring awareness to animal life in the Netherlands developed for Natuurmonumenten",
    image: "/project-images/NMKlikker.png",
    technologies: ["Laravel", "PHP", "HTML/CSS", "TailwindCSS"],
    github: "https://github.com/BoorZuur/TLE2",
  },
  {
    id: 4,
    title: "Internship Matching REST api",
    description: "Developed a back end for various internship matching platforms that utilises an AI algorithm to match students to internships.",
    image: "/project-images/ERD-internshipmatching.png",
    technologies: ["Laravel", "PHP", "JWT Web Tokens"],
    github: "https://github.com/TLE-3-Stage-Matching/Back-End"
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => {
                  const techMeta = getTechIconMeta(tech);
                  const Icon = techMeta.icon;

                  return (
                    <span
                      key={tech}
                      className={`${BASE_BADGE_CLASS} ${techMeta.badgeClassName}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {techMeta.label}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}