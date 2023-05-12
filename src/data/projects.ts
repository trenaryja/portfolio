import technologies, { Technology } from './technologies'

export type ProjectCardProps = {
  title: string
  description: string
  links: {
    visit: string
    source: string
    img: string
  }
  technologies?: Technology[]
}

const projects: ProjectCardProps[] = [
  {
    title: 'Mathgasm',
    description: `A fun and simple chart creator to quickly draw a graph/chart without having to enter complex formulas or dummy data as you would in excel or a robust charting solution. Quickly show a downward trend for something like "My Enthusiasm for the game of Monopoly as I play" (it's a downward trend). Export and share your mathgasms with your friends!`,
    links: {
      visit: 'https://mathgasm.netlify.app/',
      source: 'https://github.com/trenaryja/mathgasm',
      img: '/screenshots/mathgasm.netlify.app_.png',
    },
    technologies: [
      technologies.react,
      technologies.javascript,
      technologies.netlify,
      technologies.gatsby,
      technologies.mui,
    ],
  },
  {
    title: 'Noise Visualizer',
    description:
      'Create different colors/frequencies of noise, and plot the frequencies of the noise in a frequency bar graph using svg. This app was created as an exploration of the browser-native Web Audio API',
    links: {
      visit: 'https://noise-visualizer.netlify.app/',
      source: 'https://github.com/trenaryja/noise-generator',
      img: '/screenshots/noise-visualizer.netlify.app_.png',
    },
    technologies: [
      technologies.react,
      technologies.javascript,
      technologies.netlify,
      technologies.gatsby,
      technologies.mui,
    ],
  },
  {
    title: 'How Long Since?',
    description: `A GatsbyJS Single Page React Application that tells you "how long since", based on the entered moment in time. Inspired by that question you always ask when you're with friends in a bar. Yes, I know, it's supposed to be "How long has it been since". But that's a mouthful.`,
    links: {
      visit: 'https://howlongsince.netlify.app/',
      source: 'https://github.com/trenaryja/howlongsince',
      img: '/screenshots/howlongsince.netlify.app_.png',
    },
    technologies: [
      technologies.react,
      technologies.javascript,
      technologies.netlify,
      technologies.gatsby,
      technologies.mui,
    ],
  },
  {
    title: 'Material Color',
    description:
      "This app is used as a demonstration of a javascript libary that I created called material-color. This library provides a programmatic way to get a color palette from any individual color, ensuring that all colors follow Google's Material Design guidelines.",
    links: {
      visit: 'https://material-color.herokuapp.com/',
      source: 'https://github.com/trenaryja/material-color',
      img: '/screenshots/material-color.herokuapp.com_.png',
    },
    technologies: [technologies.react, technologies.javascript, technologies.heroku, technologies.mui],
  },
  {
    title: 'Percent Calculator',
    description:
      'This is a simple web app that I built for my girlfriend to use at work, because she hates trying to figure out percentages using a regular calculator. Made in one night, and using Chakra UI for the first time!',
    links: {
      visit: 'https://perfectpercent.netlify.app/',
      source: 'https://github.com/trenaryja/percent-calculator',
      img: '/screenshots/perfectpercent.netlify.app_.png',
    },
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.netlify,
      technologies.next,
      technologies.chakra,
    ],
  },
  {
    title: 'Portfolio',
    description:
      "You're looking at it! If you'd like to check out the code that drives this site, click the Source button below and have a look around!",
    links: {
      visit: '#',
      source: 'https://github.com/trenaryja/portfolio',
      img: '/screenshots/justintrenary.netlify.app_.png',
    },
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.netlify,
      technologies.next,
      technologies.mui,
    ],
  },
]

export default projects
