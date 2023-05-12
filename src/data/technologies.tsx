import {
  SiChakraui,
  SiGatsby,
  SiHeroku,
  SiJavascript,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'

export type Technology = {
  name: string
  icon: JSX.Element
}

const technologies = {
  react: {
    name: 'React',
    icon: <SiReact />,
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  javascript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  netlify: {
    name: 'Netlify',
    icon: <SiNetlify />,
  },
  next: {
    name: 'Next.js',
    icon: <SiNextdotjs />,
  },
  mui: {
    name: 'Material UI',
    icon: <SiMui />,
  },
  heroku: {
    name: 'Heroku',
    icon: <SiHeroku />,
  },
  gatsby: {
    name: 'Gatsby',
    icon: <SiGatsby />,
  },
  chakra: {
    name: 'Chakra UI',
    icon: <SiChakraui />,
  },
}

export default technologies
