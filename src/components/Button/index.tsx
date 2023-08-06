import { TouchableOpacityProps } from 'react-native'

import { TouchableOpacity, Text } from './styles'

type ButtonProps = {
  text: string
} & TouchableOpacityProps

const Button = ({ text, ...props }: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity {...props}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
