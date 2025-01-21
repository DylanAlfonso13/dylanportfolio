/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Use 'media' for automatic based on OS settings
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1E1E1E', // Text for light mode
          dark: '#F8FAFC',  // Text for dark mode
        },
        secondary: {
          light: '#4A4A4A',
          dark: '#CBD5E1',
        },
        background: {
          light: '#F2F2F2',
          dark: '#0F172A',
        },
        accent: {
          light: '#3B82F6',
          dark: '#60A5FA',
        },
        neutral: {
          light: '#F3F4F6',
          dark: '#1E293B',
        },
        border: {
          light: '#E5E7EB',
          dark: '#334155',
        },
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}

