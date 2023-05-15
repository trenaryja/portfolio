import { Button, Flex, Grid, GridProps, Heading, HeadingProps, Link, Text } from '@chakra-ui/react'
import { ContactForm, Hero, ProjectList, SocialButtons } from '../src/components'
import { scrollTo } from '../src/utils'

const PageWrapper = (props: GridProps) => (
  <Grid w="100%" minH="100vh" templateRows="auto 1fr auto" gap={10} {...props} />
)

const Header = () => (
  <Flex as="header" p={5} bg="blackAlpha.500" justify="center" position="sticky">
    <Flex maxW="container.md" justify="space-around" w="100%">
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
  </Flex>
)

const Footer = () => (
  <Flex as="footer" p={5} bg="blackAlpha.500" justify="center">
    <Flex placeItems="center" p={10} gap={10}>
      <Text textAlign="center">Made with 🤍 by Justin Trenary</Text>
      <SocialButtons />
    </Flex>
  </Flex>
)

const Main = (props: GridProps) => (
  <Grid
    as="main"
    rowGap={10}
    gridTemplateColumns={`1fr min(80ch, calc(100% - 2rem)) 1fr`}
    sx={{ '> *': { gridColumn: 2 } }}
    {...props}
  />
)

const HashHeading = ({ id, ...props }: HeadingProps) => (
  <Link href={`#${id}`} w="fit-content">
    <Heading
      id={id}
      py={3}
      sx={{
        '&:hover::after': {
          content: `" #"`,
          textDecoration: 'none',
        },
      }}
      {...props}
    />
  </Link>
)

// const FullBleed = (props: GridProps) => <Grid gridColumn="1/-1" {...props} />

export default function Index() {
  return (
    <PageWrapper>
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </PageWrapper>
  )
}
