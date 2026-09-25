/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#641C2B',
          deep: '#45131F',
          light: '#7e2437',
          dark: '#340e17',
        },
        ivory: {
          DEFAULT: '#F8F3EA',
          cream: '#EFE7DA',
          soft: '#F4ECE0',
          pure: '#FAF6F0',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D7B777',
          dark: '#AB8742',
          muted: '#E0C895',
        },
        charcoal: {
          DEFAULT: '#252525',
          dark: '#1A1A1A',
          light: '#363636',
        },
        mutedbrown: '#6D5A4A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
