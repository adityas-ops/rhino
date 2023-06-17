/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // adding font family
      fontFamily: {
        'Recoleta': ['Recoleta'],
        'RecoletaAlt': ['RecoletaAlt'],
        'RecoletaBlack': ['RecoletaBlack'],
        'RecoletaBold': ['RecoletaBold'],
        'Gordita':['gordita'],
        'GorditaBold':['gordita-bold'],
        'GorditaMedium':['gordita-medium'],
        'GorditaLight':['gordita-light'],
        'GorditaSemiBold':['gordita-semibold'],
      },
      //  adding responsive
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    }
  },
  plugins: [],
}
