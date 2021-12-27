import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'
import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getLibrary } from '@utils/web3-react'

const themeLight = createTheme({
  palette: {
    background: {
      default: '#3d7191'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
