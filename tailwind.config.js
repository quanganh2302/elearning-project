/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      colors: {
        // 'retro-primary': '#343434',
        // 'retro-second': '#E6B31E',
        // 'retro-third':'#CACACA' ,
        // 'retro-beige': '#FCFAF1',


        'retro-primary': '#004445',
        'retro-second': '#2C786C',
        'retro-third':'#F8B400' ,
        'retro-beige': '#FAF5E4' ,



        // 'retro-primary': '#313552',
        // 'retro-red': '#B8405E',
        // 'retro-green': '#2EB086',
        // 'retro-beige': '#EEE6CE',
        // retro-red: second
        // retro-green:third
        
      },
    },
  },
  plugins: [],
}