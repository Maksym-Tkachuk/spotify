import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

const App = () => {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ThemeProvider theme={theme}>
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 30 }}>
          egergr
        </Text>
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
