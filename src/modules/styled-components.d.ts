import { DefaultTheme } from 'styled-components'
import { MyTheme } from 'src/theme/types'

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
