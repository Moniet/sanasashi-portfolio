import { ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
import Reset from '../styles/Reset'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
