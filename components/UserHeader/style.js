import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-shadow: 5px 5px 5px rgba(123, 123, 123, 0.5);
`

export const Title = styled.h1`
  letter-spacing: 5px;
  margin-left: 32px;
`

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 999px;
  box-shadow: 5px 5px 5px rgba(123, 123, 123, 0.3);
  margin-right: 32px;

  &:hover {
    border: 2px solid red;
    box-shadow: none;
  }
`
