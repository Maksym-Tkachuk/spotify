import { View } from 'react-native'
import { css, styled } from 'styled-components'

export const Container = styled(View)(
  ({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.common.black};
    padding: 0 40px;
  `,
)
