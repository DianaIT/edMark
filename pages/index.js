import Login from "../components/Login"
import Logo from "../components/Logo"
import GlobalStyles from "../styles/globalStyles"
import { useEffect } from "react"
import useUser from "../hooks/useUser"
import { useRouter } from "next/router"

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/")
  }, [user])

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
