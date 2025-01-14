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

[... início do README mantido igual ...]

### Modificações
- Interface adaptada para português brasileiro
- Simplificação da seção de educação
- Personalização das cores e estilos
- Otimização para projetos de backend
- Adicionado grid system para múltiplos cards de projetos
- Melhorado o sistema de alinhamento dos elementos
- Aumentado o tamanho dos botões para melhor usabilidade
- Centralização consistente em todas as seções
- Preparado layout para adição de futuros projetos
- Ajustado espaçamento entre seções
- Implementado sistema de modais para detalhes dos projetos
- Adicionada seção de Cursos e Metas
- Melhorada a responsividade em dispositivos móveis
- Otimizado carregamento de fontes e ícones
- Personalizado tema dark/light
- Adicionado componente de navegação suave
- Implementado sistema de popups informativos
- Melhorada a acessibilidade
- Otimizado SEO com meta tags personalizadas
- Reorganizada a estrutura de componentes
- Implementado sistema de transições suaves
- Melhorada a performance geral
- Adicionado suporte a múltiplos idiomas (preparação)
- Otimizado para diferentes tamanhos de tela
- Implementado sistema de feedback visual
- Melhorada a semântica HTML
- Adicionado suporte a imagens otimizadas
- Implementado sistema de cache eficiente
- Melhorada a estrutura de dados do portfólio


## 1.4. Como usar este modelo 🧰

> **Nota**: Este guia pressupõe que você tenha `npm` instalado em sua máquina. Caso contrário, você pode baixá-lo seguindo as instruções [aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Clique no botão "Use this template" na parte superior do repositório
2. Crie um novo repositório com base neste modelo
3. Clone o repositório para sua máquina local
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Personalize o portfólio atualizando o arquivo `/data/info.ts` com suas informações

### 1.4.1. Notas sobre a seção de contato 📧
Para modificar a seção de contato:
1. Edite o arquivo `info.ts`
2. Atualize o `Contact.tsx` em `src/components/contact_section`

Esta separação entre dados (`info.ts`) e visualização (`Contact.tsx`) permite melhor manutenção do código.

### 1.4.2. Notas sobre o feed RSS 📰
O feed RSS é gerado usando o `astro-plugin-feed`. Para personalizar:

1. Atualize a entrada `site` em `astro.config.mjs` com sua URL
2. Modifique `rss.xml.js` em `pages` com suas informações

### 1.4.3. Notas sobre SEO 🤖
Atualize as informações SEO no arquivo `BaseLayout.astro` em `src/layouts`.

### 1.4.4. Notas sobre estilos 🎨
O projeto usa Tailwind CSS. Personalize as cores no arquivo `tailwind.config.js` na raiz.

## 1.5. Estrutura do Projeto 📁

```markdown
## 1.5. Estrutura do Projeto 📁

Dentro deste modelo de portfólio, você encontrará os seguintes arquivos e diretórios:

```text
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
```


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
