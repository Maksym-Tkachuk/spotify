import { Input } from 'src/components/Input'

import { useForm, Controller } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Text } from 'react-native'
import PasswordInput from 'src/features/PasswordInput'
import AuntificationLayout from 'src/layouts/AuntificationLayout'
import Button from 'src/components/Button'
import Flex from 'src/components/Flex'
import { Question } from './styles'

const LogIn = (): JSX.Element => {
  const { colors } = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      login: '',
      password: '',
    },
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <AuntificationLayout>
      <Flex style={{ marginTop: 16 }} gap={16}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              placeholderTextColor={colors.grey[500]}
              onChangeText={onChange}
              value={value}
              placeholder="Enter Username Or Email"
            />
          )}
          name="login"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="password"
        />
      </Flex>
      {errors.firstName && <Text>This is required.</Text>}
      <Question>Forgot password?</Question>
      <Button onPress={handleSubmit(onSubmit)} text="Log In" />
    </AuntificationLayout>
  )
}

export default LogIn
