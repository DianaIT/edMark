import { Button } from "./style"
import GitHub from "../../components/GitHub"
import { loginWithGitHub } from "../../firebase/client"
import { useEffect } from "react"
import useUser from "../../hooks/useUser"
import { useRouter } from "next/router"

export default function Login() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/")
  }, [user])

  const handleLogin = () => {
    loginWithGitHub()
      .then((user) => {
        router.push("/edmark")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Button onClick={handleLogin}>
      <GitHub />
      &nbsp; Login
    </Button>
  )
}
