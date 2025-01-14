import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact({ contact, size }: ContactProps) {
  const socialMediaLinks = [
    {
      name: "email",
      icon: "fas fa-envelope",
      link: `mailto:${contact.email}`,
      link_alt: "Email",
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: contact.github,
      link_alt: "GitHub",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: contact.linkedin,
      link_alt: "LinkedIn",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-secondary dark:text-dk-secondary mb-4">Ajude-me com Conselhos</h1>
      <p className="text-lg text-text dark:text-dk-text mb-4">
        Estou sempre aberto a conselhos e colaborações. Sinta-se à vontade para entrar em contato!
      </p>
      <a href="/formulario" className="mt-4 bg-accent text-white py-2 px-4 rounded transition duration-300 hover:bg-secondary dark:hover:bg-dk-secondary">
        Abrir Formulário
      </a>
      <div className="flex flex-row items-center container justify-around mt-4">
        {socialMediaLinks.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.link}
            target="_blank"
            rel="noreferrer"
            className={`text-white dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent ${size === "md" ? "text-3xl lg:text-4xl" : "text-5xl lg:text-9xl"}`}
            aria-label={socialMedia.link_alt}
          >
            <i className={socialMedia.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}