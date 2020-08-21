import { Header, Avatar, Title } from "./style"
import { logOut } from "firebase/client"
import useUser from "hooks/useUser"

export default function UserHeader() {
  const { user } = useUser()
  console.log(user)

  const handleLogOut = () => {
    logOut()
  }

  return (
    <Header>
      <Title>EDMARK</Title>
      {user && (
        <>
          <section>
            <span>
              <span role="img" aria-label="hi there!">
                👋🏻
              </span>{" "}
              Hi there, {user.username.split(" ")[0]}
            </span>
            <Avatar src={user.avatar} onClick={handleLogOut}></Avatar>
          </section>
        </>
      )}
    </Header>
  )
}
