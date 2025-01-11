# 1. Portfólio em Astro

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gio-del/Astro-Portfolio-Template)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/gio-del/Astro-Portfolio-Template)

> Este projeto é uma adaptação do [Astro Portfolio Template](https://github.com/gio-del/Astro-Portfolio-Template) original.

## 1.1. Índice
- [1. Portfólio em Astro](#1-portfólio-em-astro)
  - [1.1. Índice](#11-índice)
  - [1.2. Sobre esta versão 🚀](#12-sobre-esta-versão-)
  - [1.3. Características ✨](#13-características-)
  - [1.4. Como usar este modelo 🧰](#14-como-usar-este-modelo-)
  - [1.5. Estrutura do Projeto 📁](#15-estrutura-do-projeto-)
  - [1.6. Comandos 🧞‍♂️](#16-comandos-️)
  - [1.7. Tecnologias Utilizadas 🛠️](#17-tecnologias-utilizadas-️)
  - [1.8. Créditos 🙏](#18-créditos-)
  - [1.9. Licença 📝](#19-licença-)

## 1.2. Sobre esta versão 🚀
Esta é uma versão adaptada do template original, com foco em desenvolvedores brasileiros e otimizada para apresentar projetos de backend. Mantém as principais funcionalidades do template original com algumas modificações personalizadas.

## 1.3. Características ✨
### Características Mantidas
- Alternância entre modo claro/escuro
- Design responsivo
- SEO otimizado (robots.txt, sitemap.xml)
- Feed RSS
- Busca fuzzy para posts do blog

### Modificações
- Interface adaptada para português brasileiro
- Simplificação da seção de educação
- Personalização das cores e estilos
- Otimização para projetos de backend

## 1.4. Como usar este modelo 🧰
Nota: este mini-guia pressupõe que você tenha npminstalado em sua máquina, caso contrário, você pode baixá-lo seguindo as instruções aqui

Clique no botão "Usar este modelo" na parte superior do repositório.
Crie um novo repositório com base neste modelo.
Clone o repositório para sua máquina local.
Instale as dependências executandonpm install
Agora você pode iniciar o servidor de desenvolvimento executando npm run dev(veja esta seção para mais comandos)
Agora você pode começar a personalizar o modelo de portfólio atualizando o /data/info.tsarquivo com suas informações pessoais.
1.4.1. Notas sobre a seção de contato 📧
Se você adicionar/remover algo da seção de contato no info.tsarquivo, precisará atualizar o Contact.tsxarquivo localizado no src/components/contact_sectiondiretório simplesmente refletindo as alterações feitas no info.tsarquivo. Embora essa escolha possa parecer redundante, ela permite separar os dados da visualização.

1.4.2. Notas sobre o feed RSS 📰
O feed RSS é gerado usando o astro-plugin-feedplugin.

Para personalizá-lo:

Atualize a siteentrada no astro.config.mjsarquivo com a URL do seu site.
Modifique o rss.xml.jsarquivo localizado no pagesdiretório para refletir as informações do seu site.
1.4.3. Notas sobre SEO 🤖
Modifique a seção head do BaseLayout.astroarquivo localizado no src/layoutsdiretório para refletir as informações do seu site.

1.4.4. Notas sobre estilos 🎨
Este modelo de portfólio usa Tailwind CSS para estilização. Você pode modificar as cores usadas no portfólio atualizando o tailwind.config.jsarquivo localizado na raiz do projeto.

## 1.5. Estrutura do Projeto 📁
1.5. Estrutura do Projeto 🚀
Dentro deste modelo de portfólio, você encontrará os seguintes arquivos e diretórios:

.
├── astro.config.mjs
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   ├── pic.jpg
│   └── Resume.pdf
├── README.md
├── src
│   ├── components
│   │   ├── about_section
│   │   │   ├── About.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Experience.tsx
│   │   ├── contact_section
│   │   │   └── Contact.tsx
│   │   ├── navbar
│   │   │   ├── Hamburger.tsx
│   │   │   └── Nav.jsx
│   │   ├── post_section
│   │   │   ├── Blog.astro
│   │   │   └── Post.astro
│   │   ├── projects_section
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCarousel.tsx
│   │   ├── search
│   │   │   └── Search.tsx
│   │   ├── ToggleDarkMode.jsx
│   │   └── TopButton.jsx
│   ├── data
│   │   └── info.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   ├── posts
│   │   │   └── your-post-title.md
│   │   └── posts.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json


## 1.6. Comandos 🧞‍♂️
| Comando | Ação |
|---------|------|
| `npm install` | Instala dependências |
| `npm run dev` | Inicia servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Construa seu site de produção para `./dist/` |
| `npm run preview` | Visualize sua compilação localmente |
| `npm run astro ...` | Execute comandos CLI do Astro |

## 1.7. Tecnologias Utilizadas 🛠️
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fuse.js](https://fusejs.io/)

## 1.8. Créditos 🙏
Este projeto é uma adaptação do [Astro Portfolio Template](https://github.com/gio-del/Astro-Portfolio-Template) criado originalmente por [gio-del](https://github.com/gio-del). Todos os créditos do template original são mantidos.

### Modificações por
- [Adriano Sampaio](https://github.com/AdrianoATBS)

## 1.9. Licença 📝
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

⭐ Se você gostou deste projeto, considere dar uma estrela no [repositório original](https://github.com/gio-del/Astro-Portfolio-Template)!
