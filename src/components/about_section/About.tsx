import React from "react";
import { info } from "../../data/info";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-6 bg-background dark:bg-dk-primary p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-primary dark:text-dk-secondary mb-4">Sobre Mim</h1>
      <p className="text-xl font-normal text-text dark:text-dk-text text-center">
        Sou desenvolvedor de software com foco em back-end, apaixonado por tecnologia e boas práticas de desenvolvimento. Atualmente, curso Análise e Desenvolvimento de Sistemas na Estácio e tenho experiência com C#, .NET, SQL, Docker, Clean Architecture e princípios como SOLID e TDD. Meu objetivo é contribuir para projetos inovadores que façam a diferença e crescer profissionalmente, sempre buscando aprendizado e evolução contínuos.
      </p>
      <a href="/sobre" className="bg-secondary text-white py-2 px-6 rounded transition duration-300 hover:bg-primary dark:hover:bg-dk-secondary">
        Saber Mais
      </a>
    </div>
  );
}