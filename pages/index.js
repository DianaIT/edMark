import Login from "components/Login"
import Logo from "components/Logo"
import GlobalStyles from "styles/globalStyles"
import { UserContextProvider } from "context"

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <UserContextProvider>
          <Logo />
          <Login />
        </UserContextProvider>
      </main>
    </>
  )
}
