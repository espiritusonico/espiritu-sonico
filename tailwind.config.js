/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        forum: ['"Forum"', 'serif'],
      },
      colors: {
        gold: '#d6b97b',
        violetdeep: '#1a0b23',
        violetmid: '#382055',
      },
      keyframes: {
        fadeinAll: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.05)' },
        },
        logoZoom: {
          '0%': { transform: 'scale(1.3)', opacity: '0', filter: 'blur(8px)' },
          '100%': { transform: 'scale(1)', opacity: '1', filter: 'blur(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeinAll: 'fadeinAll 2s ease-out forwards',
        pulseSlow: 'pulseSlow 8s ease-in-out infinite',
        logoZoom: 'logoZoom 2.2s ease-out forwards',
        spinSlow: 'spinSlow 50s linear infinite',
      },
    },
  },
  plugins: [],
}
