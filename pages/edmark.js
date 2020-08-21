import Editor from "components/Editor"
import UserHeader from "components/UserHeader"
import { UserContextProvider } from "context"

export default function Edmark() {
  return (
    <>
      <UserContextProvider>
        <UserHeader />
      </UserContextProvider>
      <Editor />
    </>
  )
}
