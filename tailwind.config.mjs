import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tema Claro
        'primary': '#ffffff', // Branco puro
        'secondary': '#b87333', // Bronze
        'background': '#f8f9fa', // Cinza muito claro
        'card-background': '#FFFFF0', // Branco levemente acinzentado para cards
        'text': '#000000', // Preto puro
        'text-secondary': '#2d3748', // Cinza escuro

        // Tema Escuro
        'dk-primary': '#000000', // Preto puro
        'dk-secondary': '#b87333', // Bronze mais escuro
        'dk-background': '#0a0a0a', // Preto mais profundo
        'dk-card-background': '#1A1A1A', // Preto um pouco mais claro que o fundo
        'dk-text': '#ffffff', // Branco puro
        'dk-text-secondary': '#e2e8f0', // Cinza muito claro
      },
    },
  },
  darkMode: 'class',
  plugins: [
    typography,
  ],
};