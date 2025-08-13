import { vars } from 'nativewind';

// Personal AI brand themes based on logo colors
export const themes = {
  light: vars({
    '--color-primary': '139 92 246', // Purple (logo accent)
    '--color-secondary': '75 85 99', // Gray (logo outline)
    '--color-accent': '147 51 234', // Deeper purple
    '--color-surface': '255 255 255', // White
    '--color-surface-secondary': '249 250 251', // Light gray
    '--color-text': '17 24 39', // Dark gray
    '--color-text-secondary': '107 114 128', // Medium gray
  }),
  dark: vars({
    '--color-primary': '167 139 250', // Lighter purple for dark mode
    '--color-secondary': '156 163 175', // Lighter gray for dark mode
    '--color-accent': '196 181 253', // Light purple accent
    '--color-surface': '17 24 39', // Dark gray (logo outline color)
    '--color-surface-secondary': '31 41 55', // Slightly lighter dark gray
    '--color-text': '249 250 251', // Light gray text
    '--color-text-secondary': '209 213 219', // Medium light gray
  }),
};

export type ThemeName = keyof typeof themes;
