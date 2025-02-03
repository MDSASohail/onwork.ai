/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primaryBgColor :'#081225',
        secondryBgColor :'#eff4ff',
        borderColor : '#8766FF',
        hoverBGColor : '#8766FF',
        textLightColor : '#9F9F9F'
      },
      borderRadius :{
        uniformRadius : '16px'
      },

      fontSize:{
        sm12:"12px",
        sm10:"10px"
      }

    },
  },
  plugins: [],
}