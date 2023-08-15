import { Input } from 'src/components/Input'

import { useForm, Controller } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Text } from 'react-native'
import PasswordInput from 'src/features/PasswordInput'
import AuntificationLayout from 'src/layouts/AuntificationLayout'
import Button from 'src/components/Button'

const Register = (): JSX.Element => {
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={{ marginTop: 16 }}
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
          <Input
            style={{ marginTop: 16 }}
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
          <PasswordInput
            style={{ marginTop: 16 }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <PasswordInput
            style={{ marginTop: 16 }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Button
        style={{ marginTop: 16 }}
        onPress={handleSubmit(onSubmit)}
        text="Register"
      />
    </AuntificationLayout>
  )
}

export default Register
