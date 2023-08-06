import { View } from 'react-native'
import {
  Wrapper,
  Image,
  Title,
  SubTitle,
  ContentWrapper,
  ImageBackground,
} from './styles'
import Button from '../../components/Button'

import logo from '../../assets/images/spotify_logo.png'

const GetStarted = (): JSX.Element => {
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
        <Button text="Get Started" style={{ marginTop: 32 }} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default GetStarted
