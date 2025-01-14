import React from "react";
import { info } from "../../data/info";

export default function Projects() {
  return (
    <div className="flex flex-col items-center my-10 text-center bg-background dark:bg-dk-background p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-primary dark:text-dk-secondary mb-6">Meus Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.projects.map((project, index) => (
          <div key={index} className="bg-card-background dark:bg-dk-card-background p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-2xl text-text dark:text-dk-text font-semibold">{project.title}</h2>
            <p className="text-text-secondary dark:text-dk-text-secondary mb-4">{project.description}</p>
            <a href={project.link} className="text-secondary dark:text-dk-secondary hover:underline">Ver Projeto</a>
          </div>
        ))}
      </div>
      <a href="/projetos" className="mt-4 bg-secondary text-white py-2 px-6 rounded transition duration-300 hover:bg-primary dark:bg-dk-secondary">
        Ver Mais Projetos
      </a>
    </div>
  );
}