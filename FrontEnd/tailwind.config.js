/* @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    boxShadow: {
      'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 20px rgba(0, 128, 0, 0.5)', // Ejemplo de sombra con color verde
    },
  },
};
export const variants = {};
export const plugins = [];
