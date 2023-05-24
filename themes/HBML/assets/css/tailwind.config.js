module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ]
}

