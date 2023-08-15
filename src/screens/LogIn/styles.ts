import { Platform, Pressable, Text, View } from 'react-native'
import { css, styled } from 'styled-components/native'

export const Question = styled(Text)(
  ({ theme: { colors, family, sizes } }) => css`
    margin: 16px 0;
    color: ${colors.common.white};
    font-family: ${family.Montserrat.regular};
    font-size: ${sizes['3xs']}px;
    line-height: ${sizes['sm']}px;
    text-decoration-line: underline;
  `,
)
