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
      },
      screens: {
        'phone': '375px',
        'laptop': {max: '1000px'}
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

