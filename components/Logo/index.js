import { Container, Title, SubTitle, Cursor } from "./style"

export default function Logo() {
  return (
    <Container>
      <Title>EDMARK</Title>
      <SubTitle>
        <Cursor> | </Cursor>
        your markdown editor
      </SubTitle>
    </Container>
  )
}
