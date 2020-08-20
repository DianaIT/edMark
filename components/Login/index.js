import { Button } from "./style"
import GitHub from "../../components/GitHub"
import { loginWithGitHub } from "../../firebase/client"
import useUser from "../../hooks/useUser"
import { useRouter } from "next/router"

export default function Login() {
  const user = useUser()
  const router = useRouter()

  const handleLogin = () => {
    loginWithGitHub()
      .then(() => {
        router.push("./edmark")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      {user && <h1>{user.username}</h1>}

      <Button onClick={handleLogin}>
        <GitHub />
        &nbsp; Login
      </Button>
    </>
  )
}
