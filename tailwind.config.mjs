import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  // Modo Claro
		  'primary': '#FFFFFF',      
		  'secondary': '#6366F1',    
		  'accent': '#4338CA',       // Cor mais escura para hover
		  'text': '#334155',         
		  
		  // Modo Escuro
		  'dk-primary': '#0F172A',   
		  'dk-secondary': '#818CF8', 
		  'dk-accent': '#C7D2FE',    // Cor mais clara para hover no dark mode
		  'dk-text': '#E2E8F0',      
		},
	  },
	},
	darkMode: 'class',
	plugins: [
	  typography,
	],
  }
