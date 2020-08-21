import { ButtonLogin } from "./style"
import GitHub from "components/GitHub"
import { loginWithGitHub } from "firebase/client"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()

  const handleLogin = () => {
    loginWithGitHub()
      .then((user) => {
        console.log(user)
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
