"use client";

import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
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
    github: "https://github.com/username/project3",
  },
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
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
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