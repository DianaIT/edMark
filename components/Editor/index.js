import { Container, EditorComponent, TextArea } from "./style"
import { useState, useEffect } from "react"
import showdown from "showdown"

export default function Editor() {
  const [text, setText] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    const textFormat = new showdown.Converter().makeHtml(text)
    setPreview(textFormat)
  }, [text])

  const updatePreview = (evt) => {
    setText(evt.target.value)
  }
  return (
    <Container>
      <EditorComponent>
        <TextArea onChange={updatePreview}></TextArea>
      </EditorComponent>
      <EditorComponent
        dangerouslySetInnerHTML={{ __html: preview }}
      ></EditorComponent>
    </Container>
  )
}
