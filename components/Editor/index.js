import { Container, EditorComponent, TextArea } from "./style"
import { useState, useEffect } from "react"

export default function Editor() {
  const [text, setText] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    setPreview(text)
  }, [text])

  const updatePreview = (evt) => {
    setText(evt.target.value)
  }
  return (
    <Container>
      <EditorComponent>
        <TextArea onChange={updatePreview}></TextArea>
      </EditorComponent>
      <EditorComponent>{preview}</EditorComponent>
    </Container>
  )
}
