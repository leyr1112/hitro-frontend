import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Kanit", sans-serif;
  }
  * {
    font-family: Kanit, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background-color: rgb(98, 94, 92);
    background-blend-mode: overlay;
    background-attachment: fixed;
    // background-image: url(images/background.png);
    background-image: url(images/background.gif);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
