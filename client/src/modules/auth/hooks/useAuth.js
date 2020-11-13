import { useHistory } from 'react-router-dom'
import useLocalStorage from 'hooks/useLocalStorage'

export default function useAuth() {
  const { token, clear: clearToken, setItem: setToken } = useLocalStorage(
    'token',
    'string',
  )
  const { user, clear: clearUser, setItem: setUser } = useLocalStorage(
    'user',
    'object',
  )

  const history = useHistory()

  const afterLoggedIn = (newToken, newUser) => {
    setToken(newToken)
    setUser(newUser)
  }

  const logOut = () => {
    clearToken()
    clearUser()
    history.push('/log-in')
  }

  return {
    isLogged: user && user.username && !!token,
    token,
    user,
    afterLoggedIn,
    logOut,
  }
}
