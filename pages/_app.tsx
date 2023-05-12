import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Rubik } from 'next/font/google'
import { BackToTop, BackgroundParticles } from '../src/components'

const rubik = Rubik({ subsets: ['latin'] })

export const theme = extendTheme({
  config: { initialColorMode: 'dark' },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <BackgroundParticles />
        <BackToTop />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
