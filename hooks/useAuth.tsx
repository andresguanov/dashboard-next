import { useState, createContext } from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'
import endPoints from '@services/api'
import type { ReactNode } from 'react'

interface ProvideAuth {
  user: null
  // eslint-disable-next-line no-unused-vars
  signIn: (email: string | undefined, password: string | undefined) => Promise<any>
}

export const AuthContext = createContext<ProvideAuth>(null!)

const useProvideAuth = (): ProvideAuth => {
  const [user, setUser] = useState<null>(null)

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
      Cookie.set('token', accessToken.access_token, { expires: 5 })
    }
  }

  return {
    user,
    signIn,
  }
}

export const ProviderAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  const auth: ProvideAuth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
