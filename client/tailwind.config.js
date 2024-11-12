// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Chakra Petch', 'sans-serif'], // replace 'CustomFont' with your font name
      },
      colors: {
        primary: '#243642',
        highlight: '#6095ba',
        greenish: '#629584',
        foreground: '#E2F1E7',
        db: '#00001C',
        button_bg: "#eaeaea",
      },
    },
  },
  plugins: [],
};
