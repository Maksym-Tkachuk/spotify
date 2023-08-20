type SizesT = {
  '3xs': number
  '2xs': number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

type ColorsT = {
  primary: string
  secondary: string
  grey: {
    600: string
    500: string
  }
  natural: {
    lightGrey: string
    black: string
    darkGrey: string
  }
  common: {
    white: string
    black: string
  }
}

type FamilyT = {
  Montserrat: {
    bold: 'Montserrat-Bold'
    semiBold: 'Montserrat-SemiBold'
    regular: 'Montserrat-Regular'
  }
}

export interface MyTheme {
  colors: ColorsT
  sizes: SizesT
  family: FamilyT
}
