import { ButtonLogin } from "./style"
import GitHub from "components/GitHub"
import { loginWithGitHub } from "firebase/client"
import { useRouter } from "next/router"
import useUser from "hooks/useUser"

export default function Login() {
  const router = useRouter()
  const { setUser } = useUser()

  const handleLogin = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
        router.push("./edmark")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <ButtonLogin onClick={handleLogin}>
      <GitHub />
      &nbsp; Login
    </ButtonLogin>
  )
}
