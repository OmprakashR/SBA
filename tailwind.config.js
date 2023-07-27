 
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    content: {
      'arrowDownIcon': 'url("../images/arrow-right.svg")',
    },
    colors: {
      'theme-orange': '#F9B03D',
      'theme-blue': '#0498C5',
      'white': '#ffffff'}
  },
  plugins: [
    require('daisyui'),
  ],
}