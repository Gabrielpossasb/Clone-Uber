/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#fafafa',
          '200': '#e6e6e6',
          '600': '#494949',
          '800': '#2c2c2c',
          '900': '#000000',
        }
      },
      boxShadow: {
        botomInset: 'inset 0 -1px 4px #2222224f',
        box: '2px 3px 4px 2px #2222224f',
        boxHover: '2px 3px 4px 3px #1b1b1b4f',
      }
    },
  },
  plugins: [],
}
