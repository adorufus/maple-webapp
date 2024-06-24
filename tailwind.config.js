/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      'xs': '480px',    // Extra small devices (phones, less than 640px)
      'sm': '640px',    // Small devices (phones, 640px and up)
      'md': '768px',    // Medium devices (tablets, 768px and up)
      'lg': '1024px',   // Large devices (desktops, 1024px and up)
      'xl': '1280px',   // Extra large devices (large desktops, 1280px and up)
      '2xl': '1440px',  // 2x Extra large devices (1440px and up, including MacBook Air M1 default scaled resolution)
      '3xl': '1680px',  // 3x Extra large devices (1680px and up, including MacBook Air M1 "More Space" option)
      '4xl': '1920px',  // 4x Extra large devices (1920px and up)
      '5xl': '2560px',  // 5x Extra large devices (2560px and up, including MacBook Air M1 native resolution)
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      screens: {
        'phone': '375px',
        'laptop': '1024px'
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

