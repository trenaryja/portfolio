import { Button, ButtonGroup } from '@mui/material'
import { IconBaseProps } from 'react-icons'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa'
import theme from '../styles/theme'

const iconProps: IconBaseProps = {
  size: theme.spacing(3),
}

export const SocialButtons = () => {
  return (
    <ButtonGroup>
      <Button href="https://github.com/trenaryja">
        <FaGithub {...iconProps} />
      </Button>
      <Button href="https://www.linkedin.com/in/justintrenary/">
        <FaLinkedin {...iconProps} />
      </Button>
      <Button href="https://codepen.io/jtrenary">
        <FaCodepen {...iconProps} />
      </Button>
    </ButtonGroup>
  )
}
