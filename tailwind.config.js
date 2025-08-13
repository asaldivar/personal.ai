/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './services/**/*.{js,jsx,ts,tsx}',
    './utils/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Personal AI brand colors using CSS variables
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-secondary':
          'rgb(var(--color-surface-secondary) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
    },
  },
  plugins: [
    // Set default theme values on the :root element
    ({ addBase }) =>
      addBase({
        ':root': {
          // Light theme defaults
          '--color-primary': '139 92 246', // Purple (logo accent)
          '--color-secondary': '75 85 99', // Gray (logo outline)
          '--color-accent': '147 51 234', // Deeper purple
          '--color-surface': '255 255 255', // White
          '--color-surface-secondary': '249 250 251', // Light gray
          '--color-text': '17 24 39', // Dark gray
          '--color-text-secondary': '107 114 128', // Medium gray
        },
      }),
  ],
};
