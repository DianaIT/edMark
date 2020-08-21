import { Container, EditorComponent, TextArea } from "./style"
import { useState, useEffect } from "react"
import showdown from "showdown"

export default function Editor() {
  const [text, setText] = useState()
  const [preview, setPreview] = useState()
  const [dual, setDual] = useState(true)

  useEffect(() => {
    const textFormat = new showdown.Converter().makeHtml(text)
    setPreview(textFormat)
  }, [text])

  const updatePreview = (evt) => {
    setText(evt.target.value)
  }

  const changeView = () => {
    setDual(!dual)
  }
  return (
    <>
      <button onClick={changeView}> CHANGE VIEW </button>
      <Container>
        <EditorComponent>
          <TextArea onChange={updatePreview}></TextArea>
        </EditorComponent>
        {dual === true && (
          <EditorComponent
            dangerouslySetInnerHTML={{ __html: preview }}
          ></EditorComponent>
        )}
      </Container>
    </>
  )
}
