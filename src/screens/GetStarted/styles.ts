import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  height: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.common.black};
`

export const Image = styled.Image`
  width: 133px;
  height: 40px;
  align-self: center;
  margin-top: 32px;
`

export const ImageBackground = styled.ImageBackground`
  position: absolute;
  top: 80px;
  width: 400px;
  height: 450px;
`

export const ContentWrapper = styled.View`
  padding: 0px 40px 48px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  text-align: center;
  text-shadow: -3px -3px 10px ${({ theme }) => theme.colors.common.black};
  font-family: ${({ theme }) => theme.family.Montserrat.bold};
`

export const SubTitle = styled.Text`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.common.white};
  font-size: 14px;
  text-align: center;
  font-family: ${({ theme }) => theme.family.Montserrat.regular};
`
