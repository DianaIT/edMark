import styled from "styled-components"

export const TitleLogo = styled.h1`
  border-bottom: 1px solid lightgray;
  letter-spacing: 10px;
  font-size: 3rem;
  margin-bottom: 0;
  margin-left: 15px;
`

export const SubTitle = styled.h2`
  letter-spacing: 3px;
  position: relative;
  margin-left: 15px;
  margin-top: -1px;
`

export const Cursor = styled.span`
  animation-name: parpadeo;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  color: grey;
  position: absolute;
  left: -12px;

  -webkit-animation-name: parpadeo;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;

  @-moz-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
