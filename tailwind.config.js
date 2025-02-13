/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // 👈 Important for Vite
  theme: {
    extend: {},
  },
  darkMode: 'class', // 👈 Enable dark mode (class-based)
}
