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
    <div className="flex flex-col items-center max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-secondary dark:text-dk-secondary mb-6">Contato</h1>
      <p className="text-xl text-text dark:text-dk-text mb-8 text-center">
        Entre em contato através das minhas redes sociais
      </p>
      
      {/* Social Media Links */}
      <div className="flex flex-row items-center justify-center gap-12 mb-12">
        {socialMediaLinks.map((socialMedia, index) => (
          <a
            key={index}
            href={socialMedia.link}
            target="_blank"
            rel="noreferrer"
            className={`text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent transition-all duration-300 ${
              size === "md" ? "text-3xl lg:text-4xl" : "text-5xl lg:text-7xl"
            }`}
            aria-label={socialMedia.link_alt}
          >
            <i className={socialMedia.icon}></i>
          </a>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="text-center mt-8">
        <p className="text-lg text-text dark:text-dk-text mb-4">
          Sua opinião é valiosa para meu desenvolvimento profissional
        </p>
        <a
          href="https://forms.gle/diAEB3kbSi8p8hex8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white py-3 px-8 rounded-lg text-lg font-medium transition duration-300 hover:bg-accent dark:hover:bg-dk-accent hover:shadow-lg"
        >
          Deixar Feedback
        </a>
      </div>
    </div>
  );
}