import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'

import { useEffect } from 'react'

import SplashScreen from 'react-native-splash-screen'

import { Navigation } from 'src/features/Navigation'

const App = () => {
  useEffect(SplashScreen.hide, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor="transparent" />
        <Navigation />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
