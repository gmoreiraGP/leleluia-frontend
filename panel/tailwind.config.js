const { black } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      transparent: 'transparent',
      red: colors.red,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      current: 'currentColor'
    },
    colors: {
      transparent: 'transparent',
      red: colors.red,
      gray: colors.gray,
      white: colors.white,
      black: colors.blueBlack
    },
    extend: {}
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fill: ['hover', 'focus', 'group-hover'],
      scale: ['focus-within']
    }
  },
  plugins: []
}
