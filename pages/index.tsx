import { Button, Flex, Grid, GridProps, Text } from '@chakra-ui/react'
import { ContactForm, HashHeading, Hero, ProjectList, SocialButtons } from '../src/components'
import { scrollTo } from '../src/utils'

const contentWidth = 'min(80ch, calc(100% - 2rem))'

const contentWrapperProps: GridProps = {
  templateColumns: `1fr ${contentWidth} 1fr`,
  sx: {
    '> *': { gridColumn: 2 },
    '> .full-bleed': { gridColumn: '1/-1', width: '100%' },
  },
}

const PageWrapper = (props: GridProps) => (
  <Grid minH="100vh" templateRows="auto 1fr auto" gap={10} {...contentWrapperProps} {...props} />
)

const Header = () => (
  <Grid as="header" className="full-bleed" {...contentWrapperProps} p={5} bg="blackAlpha.500">
    <Flex as="nav" justify="space-around">
      <Button variant="link" onClick={() => scrollTo('about')}>
        About
      </Button>
      <Button variant="link" onClick={() => scrollTo('projects')}>
        Projects
      </Button>
      <Button variant="link" onClick={() => scrollTo('contact')}>
        Contact
      </Button>
    </Flex>
  </Grid>
)

const Footer = () => (
  <Flex
    as="footer"
    className="full-bleed"
    bg="blackAlpha.500"
    justify="center"
    placeItems="center"
    p={10}
    gap={10}
    flexDirection={['column', 'row']}
  >
    <Text textAlign="center">Made with 🤍 by Justin Trenary</Text>
    <SocialButtons />
  </Flex>
)

export default function Index() {
  return (
    <PageWrapper>
      <Header />
      <Grid as="main" gap={10}>
        <Hero />
        <HashHeading id="about">About</HashHeading>
        <Text>
          I am a full stack software engineer with experience working in the government contracting industry. My
          interests in software are wide, ranging from backend technologies such as GraphQL, to front end technologies
          such as React and React Native. Having built multiple personal web applications and npm packages, I also have
          experience working with enterprise-scale web applications, and both RESTful and GraphQL APIs. Overall Im
          looking for opportunities to continue learning new technologies and make meaningful contributions to a team at
          the company I work for!
        </Text>
        <HashHeading id="projects">Projects</HashHeading>
        <ProjectList />
        <HashHeading id="contact">Contact</HashHeading>
        <ContactForm />
      </Grid>
      <Footer />
    </PageWrapper>
  )
}
