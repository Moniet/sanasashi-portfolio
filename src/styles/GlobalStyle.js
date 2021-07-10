/** @jsxImportSource @emotion/react */
import { css, Global, useTheme } from '@emotion/react'

const GlobalStyle = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        @font-face {
          src: url('/fonts/Editorial-New/EditorialNew-Regular.otf')
            format(opentype);
          font-family: 'Editorial New';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          src: url('/fonts/Editorial-New/EditorialNew-Ultralight.otf')
            format(opentype);
          font-family: 'Editorial New';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
        }
        @font-face {
          src: url('/fonts/Inter/Inter-Light.ttf') format(truetype);
          font-family: 'Inter';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
        }
        @font-face {
          src: url('/fonts/Inter/Inter-Regular.ttf') format(truetype);
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          src: url('/fonts/Inter/Inter-Medium.ttf') format(truetype);
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }

        html {
          font-size: 100%;
          cursor: none;
        }

        body {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.75;
          font-kerning: normal;
          font-feature-settings: 'kern', 'liga', 'clig', 'calt';
          background: ${theme.colors.bg};
          color: ${theme.colors.text};
        }

        p {
          margin-bottom: 1rem;
        }

        p::empty {
          display: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: 'Inter', 'Helvetica', sans-serif;
          font-weight: 300;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: 2.488rem;
        }

        h2 {
          font-size: 2.074rem;
        }

        h3 {
          font-size: 1.728rem;
        }

        h4 {
          font-size: 1.44rem;
        }

        h5 {
          font-size: 1.2rem;
        }

        small,
        .text_small {
          font-size: 0.833rem;
        }

        hr {
          width: min(100%, 900px);
          border: none;
          border-top: solid 1px rgba(255, 255, 255, 0.2);
        }
      `}
    />
  )
}

export default GlobalStyle
