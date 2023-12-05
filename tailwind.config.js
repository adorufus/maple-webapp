/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    visibility: false,
  }
}

