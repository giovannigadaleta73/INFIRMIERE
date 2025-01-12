export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function () {
      console.log('Tailwind: Plugin eseguito correttamente!');
    },
  ],
};
