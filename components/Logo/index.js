import { TitleLogo, SubTitle, Cursor } from "./style"

export default function Logo() {
  return (
    <>
      <TitleLogo>EDMARK</TitleLogo>
      <SubTitle>
        <Cursor> | </Cursor>
        your markdown editor
      </SubTitle>
    </>
  )
}
