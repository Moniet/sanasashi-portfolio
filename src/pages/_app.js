import { ThemeProvider } from '@emotion/react'
import theme from '../styles/theme'
import Reset from '../styles/Reset'
import GlobalStyle from '../styles/GlobalStyle'
import Cursor from '../components/design-system/Cursor'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Cursor />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
