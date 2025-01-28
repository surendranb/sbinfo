/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core neutrals
        primary: {
          DEFAULT: '#1A1F36', // Deep charcoal for text
          50: '#F8FAFC',     // Light background
          100: '#F1F5F9',    // Subtle background
          200: '#E2E8F0',    // Borders
          300: '#94A3B8',    // Muted text
          400: '#64748B',    // Secondary text
        },
        // Single accent color
        accent: '#2D5AF0',    // Deep blue
        // Supporting colors
        secondary: '#E6B155', // Warm gold
        tertiary: '#34D399',  // Muted emerald
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}