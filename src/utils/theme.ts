import { extendTheme } from '@chakra-ui/react'
import { Rubik } from 'next/font/google'

export const rubik = Rubik({ subsets: ['latin'] })

export const theme = extendTheme({
  config: { initialColorMode: 'dark' },
  fonts: {
    heading: rubik.style.fontFamily,
    body: rubik.style.fontFamily,
  },
})
