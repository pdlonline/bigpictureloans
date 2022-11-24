/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'pink':{
        DEFAULT:"#ff0080"
      },
      'white': {
        DEFAULT: '#fff',
      },
      'blue': {
        light: '#06b6d4',
        DEFAULT: '#0e7490',
        dark: '#012466',
        xDark:'#0178b2',
      },
    }
    
  },
  plugins: [],
}