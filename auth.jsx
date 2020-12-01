import nookies from 'nookies'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { firebaseClient } from './firebaseClient'
const AuthContext = createContext({
  user: null,
})
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (typeof window !== undefined) {
      window.nookies = nookies
    }
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      console.log(`token changed!`)
      if (!user) {
        console.log(`no token found...`)
        setUser(null)
        nookies.destroy(null, 'token')
        nookies.set(null, 'token', '', {})
        return
      }
      console.log(`updating token...`)
      const token = await user.getIdToken()
      setUser(user)
      nookies.destroy(null, 'token')
      nookies.set(null, 'token', token, {})
    })
  }, [])
  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`)
      const user = firebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])
  return React.createElement(
    AuthContext.Provider,
    { value: { user } },
    children
  )
}
export const useAuth = () => {
  return useContext(AuthContext)
}
