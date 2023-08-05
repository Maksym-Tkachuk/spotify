type SizesT = {
  '3xs': string
  '2xs': string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

type ColorsT = {
  primary: string
  secondary: string
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
