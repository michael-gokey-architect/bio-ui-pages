/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme1': {
          'primary': '#1DA1F2',
          'secondary': '#14171A',
          'tertiary': '#657786',
          'quaternary': '#AAB8C2',
          'quinary': '#E1E8ED',
          'senary': '#F5F8FA',
        },
        'theme2': {
          'primary': '#FF6347',
          'secondary': '#8B0000',
          'tertiary': '#B22222',
          'quaternary': '#FF4500',
          'quinary': '#FFA07A',
          'senary': '#FF7F50',
        }
      },
      extend: {
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
    }
},
variants: {},
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('tailwind-hamburgers'),
],
}
