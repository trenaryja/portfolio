import { Grid, Heading, Image, ImageProps, useBoolean, useBreakpointValue, useInterval } from '@chakra-ui/react'

const duration = 3

type FaceProps = ImageProps & { show: boolean }

const Face = ({ show, ...props }: FaceProps) => {
  return (
    <Image
      p={5}
      fit="contain"
      width="100%"
      borderRadius="full"
      aspectRatio="1/1"
      gridArea="x"
      transition={`all ${duration / 4}s ease-in-out`}
      opacity={show ? 1 : 0}
      alt={props.alt ?? ''}
      {...props}
    />
  )
}

export const Hero = () => {
  const [showBitmoji, setShowBitmoji] = useBoolean(true)

  useInterval(() => {
    setShowBitmoji.toggle()
  }, duration * 1000)

  const autoFlow = useBreakpointValue({ base: 'row', md: 'column' })
  return (
    <Grid autoFlow={autoFlow} placeItems="center" gap={10}>
      <Grid placeItems="center" gap={5} textAlign="center">
        <Heading size="3xl">Hi! I'm Justin!</Heading>
        <Image width="5rem" src="/logo.svg" alt="JT PI Logo" />
        <Heading>Welcome to my portfolio!</Heading>
      </Grid>
      <Grid maxW={400} templateAreas="x" placeItems="center">
        <Face src="/faces/bitmoji.webp" alt="Bitmoji of Justin" show={showBitmoji} transform="scaleX(-1)" />
        <Face src="/faces/justin.webp" alt="Justin" show={!showBitmoji} />
      </Grid>
    </Grid>
  )
}
