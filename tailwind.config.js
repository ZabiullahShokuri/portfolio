/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: 'class', // ✅ MUST be here
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1f2937',
        light: '#f9fafb',
        primary: '#007aff',
        secondary: '#6b7280',
      },
    },
  },
  plugins: [],
};
