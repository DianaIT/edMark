import { Header, Avatar, Title } from "./style"
import useUser from "../../hooks/useUser"
import { logOut } from "../../firebase/client"
export default function UserHeader() {
  const user = useUser()

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Sesión cerrada"))
      .catch((error) => console.log(error))
  }

  return (
    <Header>
      <Title>EDMARK</Title>
      {user && <Avatar src={user.avatar} onclick={handleLogOut}></Avatar>}
    </Header>
  )
}
