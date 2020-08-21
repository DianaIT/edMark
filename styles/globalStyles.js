import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: Incosolata;
  src: url(fonts/Inconsolata-Regular.ttf);
}



@font-face {
  font-family: NunitoSans;
  src: url(fonts/NunitoSans-Regular.ttf);
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}
`
export default GlobalStyles
