import { NativeStackNavigationProp } from '@react-navigation/native-stack'
export type RootStackParamsT = {
  Home: undefined
  Profile: undefined
  History: undefined
  PlayList: undefined
  Songs: undefined
  Get_Started: undefined
  Main: undefined
}

export type NavigationType = Awaited<NativeStackNavigationProp<RootStackParamsT>>
