import { Link, useRoute } from '@react-navigation/native'
import { ReactNode } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Container } from 'src/components/Container'
import { Title } from 'src/components/Title'
import { Screens } from 'src/constants'
import {
  IconBox,
  IconStack,
  Line,
  Possibility,
  Question,
  Support,
} from 'src/layouts/AuntificationLayout/styles'
import { useTheme } from 'styled-components'
import FaceBook from 'src/assets/facebook.svg'
import Google from 'src/assets/google.svg'
import Apple from 'src/assets/apple.svg'

type AuntificationLayout = {
  children: ReactNode
  title?: string
}

const AuntificationLayout = ({
  children,
  title = 'Log In',
}: AuntificationLayout): JSX.Element => {
  const { colors } = useTheme()
  const route = useRoute()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ flex: 1, justifyContent: 'center' }}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
        <Support>
          If You Need Any Support{' '}
          <Link style={{ color: colors.primary }} to={`/${Screens.GET_STARTED}`}>
            Click Here
          </Link>
        </Support>
        {children}
        <Line>
          <Possibility style={{ position: 'absolute' }}>Or</Possibility>
        </Line>
        <IconStack>
          <IconBox>
            <FaceBook />
          </IconBox>
          <IconBox>
            <Google />
          </IconBox>
          <IconBox>
            <Apple />
          </IconBox>
        </IconStack>

        {route.name === Screens.LOG_IN ? (
          <Question>
            Don't have an account?{' '}
            <Link style={{ color: colors.secondary }} to={`/${Screens.REGISTER}`}>
              Register
            </Link>
          </Question>
        ) : (
          <Question>
            have an account?{' '}
            <Link style={{ color: colors.secondary }} to={`/${Screens.LOG_IN}`}>
              Log In
            </Link>
          </Question>
        )}
      </Container>
    </SafeAreaView>
  )
}

export default AuntificationLayout
