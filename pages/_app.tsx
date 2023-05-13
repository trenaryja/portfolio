import { Box, ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { BackToTop, BackgroundParticles } from '../src/components'
import { theme } from '../src/utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <title>Justin Trenary: Portfolio</title>
      </Head>
      <ChakraProvider theme={theme}>
        <BackgroundParticles />
        <BackToTop />
        <Box position="relative">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  )
}
