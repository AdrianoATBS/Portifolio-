import { useEffect, useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";
import Hamburger from "./Hamburger";
import { info } from "../../data/info";

export default function Nav({ posts }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Sobre Mim", href: "/#sobre" },      
    { name: "Cursos e Metas", href: "/#cursos-metas" },
    { name: "Projetos", href: "/#projetos" },    
    { name: "Contato", href: "/#contato" },
  ];

  const extractInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((name) => {
      initials += name.charAt(0);
    });
    return initials;
  };

  return (
    <>
      <nav className="container mx-auto top-0 z-50 absolute bg-primary dark:bg-dk-primary">
        <div className="w-full px-6 py-2 flex justify-between items-center">
          <a className="font-bold text-2xl lg:text-4xl" href="/">
            <span className="text-secondary dark:text-dk-secondary">
              {"" + extractInitials(info.name) + ""}
            </span>
          </a>
          <div className="hidden lg:block">
            <ul className="inline-flex text-secondary dark:text-dk-secondary text-2xl font-normal">
              {navLinks.map((link, index) => (
                <li key={index} className="p-4 hover:text-accent dark:hover:text-dk-accent">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="px-4 flex">
                <ToggleDarkMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}