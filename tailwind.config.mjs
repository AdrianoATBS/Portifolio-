import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
// Tema Claro
'primary': '#ffffff', // Branco
'secondary': '#228b22', // Verde
'accent': '#ff0000', // Vermelho
'background': '#f5f5f5',
'card-background': '#e5e5e5',
'text': '#333333',

// Tema Escuro
'dk-primary': '#000000', // Preto
'dk-secondary': '#006400', // Verde escuro
'dk-accent': '#800000', // Vermelho escuro
'dk-background': '#1a1a1a',
'dk-card-background': '#282828',
'dk-text': '#ffffff',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
  ],
};