import { useState, createContext } from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'
import endPoints from '@services/api'
import type { ReactNode } from 'react'
import { route } from 'next/dist/server/router'

interface User {
  email: string
  id: number
  name: string
  password: string
  role: string
}

interface ProvideAuth {
  user: User
  // eslint-disable-next-line no-unused-vars
  signIn: (email: string | undefined, password: string | undefined) => Promise<any>
  logout: any
}

export const AuthContext = createContext<ProvideAuth>(null!)

const useProvideAuth = (): ProvideAuth => {
  const [user, setUser] = useState<User>(null!)

  const signIn = async (
    email: string | undefined,
    password: string | undefined,
  ): Promise<any> => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const { data: accessToken }: { data: Token } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options,
    )

    if (accessToken) {
      const { access_token: token }: Token = accessToken
      Cookie.set('token', token, { expires: 5 })

      // Axios type error
      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: userInfo } = await axios.get(endPoints.auth.profile)
      setUser(userInfo)
    }
  }

  const logout = () => {
    Cookie.remove('token')
    setUser(null)
    delete axios.defaults.headers.Authorization
    window.location.href = '/login'
  }

  return {
    user,
    signIn,
    logout,
  }
}

export const ProviderAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  const auth: ProvideAuth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
