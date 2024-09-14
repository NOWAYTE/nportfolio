/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        'dark-background': '#1a1a1a',
        'dot-black': '#000000',
        'dot-white': '#ffffff',
        // You can add more custom colors here
      },
    },
  },
  plugins: [],
}