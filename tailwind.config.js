/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Friend Group Colors
        'teal': {
          DEFAULT: '#008080',
          light: '#4db8b8',
          dark: '#004d4d',
        },
        'orange': {
          DEFAULT: '#ff8c00',
          light: '#ffb84d',
          dark: '#cc7000',
        },
        'vantablack': '#0a0a0a',
        'periwinkle': '#ccccff',
        'purple': {
          DEFAULT: '#9333ea',
          light: '#c084fc',
          dark: '#6b21a8',
        },
        'green': {
          DEFAULT: '#22c55e',
          light: '#4ade80',
          dark: '#15803d',
        },
        'yellow': {
          DEFAULT: '#eab308',
          light: '#fde047',
          dark: '#a16207',
        },
        'gold': {
          DEFAULT: '#ffd700',
          light: '#ffed4a',
          dark: '#b8860b',
        },
        'sky-blue': {
          DEFAULT: '#87ceeb',
          light: '#b8e4f5',
          dark: '#5ba3c9',
        },
        'galaxy-blue': {
          DEFAULT: '#4b6cb7',
          light: '#7a94d4',
          dark: '#2d4a7c',
        },
        'blood-red': {
          DEFAULT: '#8b0000',
          light: '#c41e1e',
          dark: '#5c0000',
        },
      },
    },
  },
  plugins: [],
}