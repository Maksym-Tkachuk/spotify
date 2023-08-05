import styled from 'styled-components/native'

export const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 80px;
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.common.black};
  font-size: ${({ theme }) => theme.sizes.md};
  font-family: ${({ theme }) => theme.family.Montserrat.semiBold};
  text-align: center;
`
