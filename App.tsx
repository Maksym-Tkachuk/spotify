import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'
import { NavBar } from 'src/features/NavBar'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
