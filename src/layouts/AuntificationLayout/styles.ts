import { Platform, Pressable, Text, View } from 'react-native'
import { css, styled } from 'styled-components'

export const Support = styled(Text)(
  ({ theme: { colors, family, sizes } }) => css`
    margin-top: 16px;
    color: ${colors.common.white};
    text-align: center;
    font-family: ${family.Montserrat.regular};
    font-size: ${sizes['3xs']}px;
    line-height: ${sizes['sm']}px;
  `,
)

export const IconBox = styled(Pressable)(
  ({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.grey['500']};
    ${Platform.OS === 'ios'
      ? css`
          shadow-color: black;
          shadow-offset: 0px 4px;
          shadow-opacity: 0.25;
          shadow-radius: 4px;
        `
      : css`
          elevation: 4;
        `}
  `,
)

export const IconStack = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

export const Line = styled(View)(
  ({ theme: { colors } }) => css`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background-color: ${colors.grey['500']};
  `,
)

export const Possibility = styled(Text)(
  ({ theme: { colors, family, sizes } }) => css`
    position: absolute;
    padding: 16px;
    background-color: ${colors.common.black};
    color: ${colors.common.white};
    text-align: center;
    font-family: ${family.Montserrat.regular};
    font-size: ${sizes['3xs']}px;
    line-height: ${sizes['sm']}px;
    border-radius: 50px;
  `,
)

export const Question = styled(Support)(
  ({ theme: { family } }) => css`
    margin-top: 32px;
    font-family: ${family.Montserrat.semiBold};
  `,
)
