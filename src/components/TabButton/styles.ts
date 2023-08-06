import { View } from 'react-native'
import Border from 'src/assets/border.svg'
import { styled } from 'styled-components'

export const ActiveBorder = styled(Border)`
  position: absolute;
  top: 0;
`

export const TabContainer = styled(View)`
  height: 100%;
  align-items: center;
  justify-content: center;
`
