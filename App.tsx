import { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import SplashScreen from 'react-native-splash-screen'
import GetStarted from './src/screens/GetStarted'

const App = () => {
  useEffect(SplashScreen.hide, [])

  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <GetStarted />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
