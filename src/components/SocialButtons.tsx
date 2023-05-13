import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa'

const size = '1.5rem'

export const SocialButtons = () => (
  <Flex gap={5}>
    <Link as={NextLink} href="https://github.com/trenaryja">
      <FaGithub size={size} />
    </Link>
    <Link as={NextLink} href="https://www.linkedin.com/in/justintrenary/">
      <FaLinkedin size={size} />
    </Link>
    <Link as={NextLink} href="https://codepen.io/jtrenary">
      <FaCodepen size={size} />
    </Link>
  </Flex>
)
