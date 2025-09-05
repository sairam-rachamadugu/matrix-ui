/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E1AC38',
        'primary-hover': '#B7811F',
        'peacockBlue': '#016795',
        moonlight: {
          DEFAULT: '#D6DCE3',
          dark: '#9AA3B1',
        }
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-60%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(60%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },        
      },
      animation: {
        slideInLeft: 'slideInFromLeft 1s ease-out',
        slideInRight: 'slideInFromRight 1s ease-out',
        fadeInSlow: 'fadeIn 100s ease-in-out',
      },
          
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
})

