import { Grid, Heading, Image, useBreakpointValue } from '@chakra-ui/react'

export const Hero = () => {
  const autoFlow = useBreakpointValue({ base: 'row', md: 'column' })
  return (
    <Grid autoFlow={autoFlow} placeItems="center">
      <Grid placeItems="center" gap={5} textAlign="center">
        <Heading size="4xl">{"Hi! I'm Justin!"}</Heading>
        <Image width={'5rem'} src="/logo.svg" alt="JT PI Logo" />
        <Heading>{'Welcome to my portfolio!'}</Heading>
      </Grid>
      <Image src="/bitmoji-face.png" alt="bitmoji of Justin" />
    </Grid>
  )
}
