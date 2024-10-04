/* @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 20px rgba(0, 128, 0, 0.5)', // Ejemplo de sombra con color verde
      },
      width: {
        '128': '32rem', // 512px
        '136': '34rem', // 544px
        '144': '36rem', // 576px
        '152': '38rem', // 608px
        '160': '40rem', // 640px
      },
      height: {
        '52': '13rem', // 208px
        '56': '14rem', // 224px
        '60': '15rem', // 240px
      },
    },
  },
  plugins: [],
};