import { TextInputProps, TouchableOpacity, View } from 'react-native'
import { Input } from 'src/components/Input'
import { useTheme } from 'styled-components'

import { PressIcon } from 'src/features/PasswordInput/styles'
import { useState } from 'react'
import Hide from 'src/assets/hide_password.svg'

export const PasswordInput = (props: TextInputProps): JSX.Element => {
  const { colors } = useTheme()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <View style={{ justifyContent: 'center' }}>
      <Input
        placeholderTextColor={colors.grey[500]}
        secureTextEntry={isVisible}
        placeholder="Password"
        {...props}
      />
      <PressIcon onPress={() => setIsVisible(prev => !prev)}>
        <Hide />
      </PressIcon>
    </View>
  )
}

export default PasswordInput
