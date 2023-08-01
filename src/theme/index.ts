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
    '3xs': '12px',
    '2xs': '14px',
    xs: '18px',
    sm: '20px',
    md: '24px',
    lg: '28px',
    xl: '32px',
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
