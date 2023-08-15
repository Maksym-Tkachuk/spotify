import { Screens } from 'src/constants'

import GetStarted from 'src/screens/GetStarted'

import { NavBar } from 'src/features/NavBar'
import { SCREEN_OPTIONS } from 'src/features/Navigation/constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamsT } from 'src/types'
import LogIn from 'src/screens/LogIn'
import Register from 'src/screens/Register'

export const Stack = createNativeStackNavigator<RootStackParamsT>()

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={SCREEN_OPTIONS}
        initialRouteName={Screens.LOG_IN}
      >
        <Stack.Screen name={Screens.GET_STARTED} component={GetStarted} />
        <Stack.Screen name={Screens.LOG_IN} component={LogIn} />
        <Stack.Screen name={Screens.REGISTER} component={Register} />
        <Stack.Screen name={Screens.MAIN} component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
