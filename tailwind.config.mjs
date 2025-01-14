import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tema Claro
        'primary': '#264653', // Azul petróleo
        'secondary': '#F4A261', // Laranja suave
        'background': '#F9F9F9', // Branco gelo
        'card-background': '#E9ECEF', // Cinza claro
        'text': '#343A40', // Cinza escuro
        'text-secondary': '#6C757D', // Cinza médio

        // Tema Escuro
        'dk-primary': '#1A1A1A', // Preto escuro
        'dk-secondary': '#F4A261', // Laranja suave
        'dk-background': '#121212', // Fundo escuro
        'dk-card-background': '#2A2A2A', // Cinza escuro para cartões
        'dk-text': '#EAEAEA', // Branco claro
        'dk-text-secondary': '#B0B0B0', // Cinza claro
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
  ],
};