/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette (PRD)
        cyan: { brand: '#05c3d3' },
        skyblue: '#29abe2',
        gold: { DEFAULT: '#e0bd1e', dark: '#8a6d05', soft: '#fbf3cf' },
        // Formal base tones (navy / cream, inspired by the reference site)
        navy: { 950: '#071a2b', 900: '#0c2a43', 800: '#1a4162', 700: '#245580' },
        cream: { DEFAULT: '#f6f1e7', dark: '#e6d9c6' },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(24px,-32px) scale(1.12)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee 55s linear infinite reverse',
        float: 'float 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
