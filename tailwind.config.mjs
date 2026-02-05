import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        secondary: '#f4f4f4',
        accent: '#333',
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        display: ['Syne', ...defaultTheme.fontFamily.sans],
        mono: ['Space Grotesk', ...defaultTheme.fontFamily.mono],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
