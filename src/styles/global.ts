import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  --webkit-font-smoothing: antialiased;
}
body, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
}
`
/* html {
@media (max-width: 1080px) {
  font-size: 93.75%; //15px
}
@media (max-width: 720px) {
  font-size: 87.5%; //14px */