import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    primary: '#1ED760',
    secondary: '#D7BD1E',
    natural: {
      lightGrey: '#F0F0F0',
      black: '#0F0E0E',
      darkGrey: '#333333',
    },
  },
  sizes: {
    '3xs': 12,
    '2xs': 14,
    xs: 18,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
  },
  family: {
    Montserrat: {
      bold: 'Montserrat-Bold',
      semiBold: 'Montserrat-SemiBold',
      regular: 'Montserrat-Regular',
    },
  },
}

export default theme
