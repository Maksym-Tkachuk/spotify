import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'simple_push',
  orientation: 'portrait',
  animationDuration: 400,
  navigationBarColor: 'transparent',
  navigationBarHidden: true,
}
