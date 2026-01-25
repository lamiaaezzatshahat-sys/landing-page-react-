/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0066cc',
          dark: '#003366',
          light: '#3399ff',
        },
        secondary: {
          teal: '#00ccbb',
          green: '#00a86b',
        },
        accent: {
          orange: '#ff9900',
          red: '#ff3333',
        },
        background: {
          light: '#f8f9fa',
          blue: '#e6f2ff',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'zoom-in': 'zoomIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
