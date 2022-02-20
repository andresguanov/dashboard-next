/* eslint-disable react/jsx-props-no-spreading */
import MainLayout from '@components/MainLayout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
)

export default MyApp
