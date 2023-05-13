// import technologies, { Technology } from './technologies'

import { IconType } from 'react-icons'
import {
  SiChakraui,
  SiGatsby,
  SiHeroku,
  SiJavascript,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTwilio,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandMantine } from 'react-icons/tb'

export type Technology = {
  name: string
  icon: IconType
}

export type Project = {
  title: string
  description: string
  links: {
    visit: string
    source: string
    img: string
  }
  tech?: Technology[]
}

const tech: Record<string, Technology> = {
  react: { name: 'React', icon: SiReact },
  typescript: { name: 'TypeScript', icon: SiTypescript },
  javascript: { name: 'JavaScript', icon: SiJavascript },
  netlify: { name: 'Netlify', icon: SiNetlify },
  next: { name: 'Next.js', icon: SiNextdotjs },
  mui: { name: 'Material UI', icon: SiMui },
  heroku: { name: 'Heroku', icon: SiHeroku },
  gatsby: { name: 'Gatsby', icon: SiGatsby },
  chakra: { name: 'Chakra UI', icon: SiChakraui },
  storybook: { name: 'Storybook', icon: SiStorybook },
  mantine: { name: 'Mantine', icon: TbBrandMantine },
  twilio: { name: 'Twilio', icon: SiTwilio },
} as const

export const projects: Project[] = [
  {
    title: '@trenaryja/ui',
    description: `A collection of reusable UI components for my projects. There's no real system or pattern in place, just a hodge-podge of random components/ideas that I've come up with. If it inspires you, or you somehow find any of it useful, then hell yeah please tell me about it!`,
    links: {
      visit: 'https://trenaryja.github.io/ui',
      source: 'https://github.com/trenaryja/ui',
      img: '/screenshots/trenaryja.github.io_ui_.webp',
    },
    tech: [tech.react, tech.typescript, tech.storybook, tech.mantine],
  },
  {
    title: 'Trenary.love',
    description:
      'This is the website we used for our wedding! We went completely digital, with no paper invites, and managed all the invites, notifications, and updates through this site.',
    links: {
      visit: 'https://trenary.love',
      source: 'https://github.com/trenaryja/wedding-site',
      img: '/screenshots/trenary.love_.webp',
    },
    tech: [tech.react, tech.typescript, tech.netlify, tech.chakra, tech.mantine, tech.twilio, tech.next],
  },
  {
    title: 'Percent Calculator',
    description:
      'This is a simple web app that I built for my girlfriend to use at work, because she hates trying to figure out percentages using a regular calculator. Made in one night, and using Chakra UI for the first time!',
    links: {
      visit: 'https://perfectpercent.netlify.app/',
      source: 'https://github.com/trenaryja/percent-calculator',
      img: '/screenshots/perfectpercent.netlify.app_.webp',
    },
    tech: [tech.react, tech.typescript, tech.netlify, tech.next, tech.chakra],
  },
  {
    title: 'Mathgasm',
    description: `A fun and simple chart creator to quickly draw a graph/chart without having to enter complex formulas or dummy data as you would in excel or a robust charting solution. Quickly show a downward trend for something like "My Enthusiasm for the game of Monopoly as I play" (it's a downward trend). Export and share your mathgasms with your friends!`,
    links: {
      visit: 'https://mathgasm.netlify.app/',
      source: 'https://github.com/trenaryja/mathgasm',
      img: '/screenshots/mathgasm.netlify.app_.webp',
    },
    tech: [tech.react, tech.javascript, tech.netlify, tech.gatsby, tech.mui],
  },
  {
    title: 'Noise Visualizer',
    description:
      'Create different colors/frequencies of noise, and plot the frequencies of the noise in a frequency bar graph using svg. This app was created as an exploration of the browser-native Web Audio API',
    links: {
      visit: 'https://noise-visualizer.netlify.app/',
      source: 'https://github.com/trenaryja/noise-generator',
      img: '/screenshots/noise-visualizer.netlify.app_.webp',
    },
    tech: [tech.react, tech.javascript, tech.netlify, tech.gatsby, tech.mui],
  },
  {
    title: 'How Long Since?',
    description: `A GatsbyJS Single Page React Application that tells you "how long since", based on the entered moment in time. Inspired by that question you always ask when you're with friends in a bar. Yes, I know, it's supposed to be "How long has it been since". But that's a mouthful.`,
    links: {
      visit: 'https://howlongsince.netlify.app/',
      source: 'https://github.com/trenaryja/howlongsince',
      img: '/screenshots/howlongsince.netlify.app_.webp',
    },
    tech: [tech.react, tech.javascript, tech.netlify, tech.gatsby, tech.mui],
  },
  {
    title: 'Material Color',
    description:
      "This app is used as a demonstration of a javascript libary that I created called material-color. This library provides a programmatic way to get a color palette from any individual color, ensuring that all colors follow Google's Material Design guidelines.",
    links: {
      visit: 'https://material-color.herokuapp.com/',
      source: 'https://github.com/trenaryja/material-color',
      img: '/screenshots/material-color.herokuapp.com_.webp',
    },
    tech: [tech.react, tech.javascript, tech.heroku, tech.mui],
  },
  {
    title: 'Portfolio',
    description:
      "You're looking at it! If you'd like to check out the code that drives this site, click the Source button below and have a look around!",
    links: {
      visit: '#',
      source: 'https://github.com/trenaryja/portfolio',
      img: '/screenshots/justintrenary.netlify.app_.webp',
    },
    tech: [tech.react, tech.typescript, tech.netlify, tech.next, tech.chakra],
  },
]
