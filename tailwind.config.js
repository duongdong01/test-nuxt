module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': {
            transform: 'translateY(-80px)'
          },
          '40%': {
            transform: 'translateY(-40px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fadeInOutProFile: {
          '0%': {
            transform: 'translate3d(0,0,0)'
          },
          '40%': {
            transform: 'translate3d(1500px,0,0)'
          },
          '100%': {
            transform: 'translate3d(2560px,0,0)'
          }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease-in-out',
        fadeInOutProFile: 'fadeInOutProFile 1s ease-in-out'
      }
    }
    // screens: {
    //   '2xl': { max: '1535px' },
    //   // => @media (max-width: 1535px) { ... }
    //   xl: { max: '1279px' },
    //   // => @media (max-width: 1279px) { ... }
    //   lg: { max: '1023px' },
    //   // => @media (max-width: 1023px) { ... }
    //   md2: { min: '767px' },
    //   // => @media (min-width: 767px) { ... }
    //   maxmd: { min: '767px' },
    //   // => @media (min-width: 1023px) { ... }
    //   minmd: { max: '768px' },
    //   // => @media (max-width: 767px) { ... }
    //   sm: { max: '639px' }
    //   // => @media (max-width: 639px) { ... }
    // }
  },
  plugins: []
}
