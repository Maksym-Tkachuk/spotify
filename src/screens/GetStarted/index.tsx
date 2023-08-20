import {
  Wrapper,
  Image,
  Title,
  SubTitle,
  ContentWrapper,
  ImageBackground,
} from 'src/screens/GetStarted/styles'
import Button from 'src/components/Button'

import logo from 'src/assets/images/spotify_logo.png'
import { useNavigation } from '@react-navigation/native'
import { Screens } from 'src/constants'
import { NavigationType } from 'src/types'

const GetStarted = (): JSX.Element => {
  const navigation = useNavigation<NavigationType>()

  return (
    <Wrapper>
      <Image source={logo} />
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        resizeMode="contain"
      />
      <ContentWrapper>
        <Title>Music for everyone.</Title>
        <SubTitle>
          Discover your favorite tunes, anytime, anywhere. Let the rhythm take you on
          a journey to endless melodies and beats that resonate with your soul.
        </SubTitle>
        <Button
          onPress={() => navigation.navigate(Screens.MAIN)}
          text="Get Started"
          style={{ marginTop: 32 }}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

export default GetStarted
