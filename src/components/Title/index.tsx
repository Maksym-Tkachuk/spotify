import { Text, TextProps } from 'react-native'
import { useTheme } from 'styled-components'

export const Title = ({ children, style, ...props }: TextProps): JSX.Element => {
  const { family, colors, sizes } = useTheme()

  return (
    <Text
      style={[
        {
          color: colors.common.white,
          fontFamily: family.Montserrat.bold,
          fontSize: sizes.md,
          lineHeight: sizes.xl,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
