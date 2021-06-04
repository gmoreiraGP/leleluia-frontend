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
      primary: colors.red,
      white: colors.white
    },
    colors: {
      primary: colors.red,
      secondary: colors.warmGray,
      complementary: colors.purple,
      white: colors.white,
      gray: colors.gray
    },
    extend: {}
  },
  variants: {
    extend: {
      fill: ['hover', 'focus', 'group-hover']
    }
  },
  plugins: []
}
