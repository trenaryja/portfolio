import { Text } from '@chakra-ui/react'
import { VscHeartFilled } from 'react-icons/vsc'

export const MadeWithLove = () => (
  <Text>
    Made with
    <Text as="span" px={1.5} display="inline-block">
      <VscHeartFilled />
    </Text>
    by Justin Trenary
  </Text>
)
