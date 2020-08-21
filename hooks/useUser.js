import { useEffect, useContext } from "react"
import { onAuthStateChanged } from "firebase/client"
import { useRouter } from "next/router"
import Context from "context"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const { user, setUser } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/")
  }, [user])

  return { user, setUser }
}
