import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import { NavBar } from 'src/features/NavBar'
import { useEffect } from 'react'

import SplashScreen from 'react-native-splash-screen'
import GetStarted from 'src/screens/GetStarted'

const App = () => {
  useEffect(SplashScreen.hide, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <GetStarted />
        <NavBar />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
