/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'club-dark-background': '#1D1D1D',
          'club-dark-card': '#2A2D34',
          'club-text-primary': '#FFFFFF',
          'club-text-secondary': '#C2C6CD',
          'club-text-disabled': '#7C828C',
          'club-primary-cta': '#05A9F2',
          'club-primary-hover': '#0072C9',
          'club-interactive-border': '#5CDFF2',
          'club-success': '#6CC375',
          'club-error': '#F25749',
          'club-info': '#5CDFF2',
          'club-warning': '#F29B30',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }