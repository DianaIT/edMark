import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const EditorComponent = styled.section`
  width: 50%;
  margin: 0.5rem;
  border: 1px solid lightgray;
  height: 95vh;
  padding: 2rem;
  font-size: 1.4rem;
  box-shadow: 5px 5px 5px rgba(123, 123, 123, 0.6);
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  font-size: 1.4rem;
`
