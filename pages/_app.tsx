/* eslint-disable react/jsx-props-no-spreading */
import MainLayout from '@components/MainLayout'
import { ProviderAuth } from '@hooks/useAuth'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ProviderAuth>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  </ProviderAuth>
)

export default MyApp
