import Login from "components/Login"
import Logo from "components/Logo"
import GlobalStyles from "styles/globalStyles"

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Logo />
        <Login />
      </main>
    </>
  )
}
