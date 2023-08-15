import { TextInput } from 'react-native'
import { css, styled } from 'styled-components'

export const Input = styled(TextInput)(
  ({ theme: { family, sizes, colors } }) => css`
    padding: 24px 26px;
    border-radius: 24px;
    border: 1px solid ${colors.grey[500]};
    color: ${colors.grey[600]};
    font-family: ${family.Montserrat.semiBold};
    font-size: ${sizes['3xs']}px;
  `,
)
